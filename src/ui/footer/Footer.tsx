
import { footer_data } from "../../constents";
import "./footer.scss";

function Footer() {
  return (
    <>
      <section id="footer" className="border-t">
        <div className="left__content ">
          <a href="mailto:info@metadogeunity.games">info@metadogeunity.games</a>
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

            {/* <ul>
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
            </ul> */}
        </div>
      </section>
      <div className="last__footer">
        <p>©2023 MetaDogeUnity. All rights reserved</p>
      </div>
    </>
  );
}
export default Footer;
