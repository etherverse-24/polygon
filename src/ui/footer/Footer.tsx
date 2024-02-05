
import { footer_data } from "../../constents";
import "./footer.scss";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="left__content">
          <a href="mailto:contact@polygon.xyz">contact@polygon.xyz</a>
        </div>
        <div className="center__content">
          <ul>
            <h2>
              <b>Socials</b>
            </h2>
            {footer_data.Social.map((item, i) => (
              <li key={i}>
                <a href={item.link} target="_blank">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <ul>
            <h2>
              <b>Resources</b>
            </h2>
            {footer_data.Social_head.map((item, i) => (
              <li key={i}>
                <a href={item.link} target="_blank">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right__content">
          <div id="newsletter">
            <a href="https://t.me/bitport_erc" target="_blank">
              Join Community
            </a>
          </div>
        </div>
      </section>
      <div className="last__footer">
        <p>© Copyright 2023 polygon blockchain. All Rights Reserved</p>
      </div>
    </>
  );
}
export default Footer;
