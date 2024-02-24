import { useState } from "react";
import "./navbar.scss";
import { NAV_BAR_LINKS } from "../../constents";

declare global {
  interface Window {
    ethereum?: Record<string, unknown> | undefined;
  }
}

const Navbar = () => {
  // const navigate =useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed z-[100] lg:top-4 w-full">
      <nav className="h-20 lg:px-32 flexCenter rounded-3xl mx-auto nav text-white font-bold transition-all ">
        {" "}
        {/* <a href="#hero">
          <img src="https://polygon-blockchain.vercel.app/assets/icon/logo-1.png" className=" filter drop-shadow-xl" alt="" />
        </a> */}
        <div className={isMenuOpen ? `links nav-mobile-active` : "links"}>
          <ul>
            {NAV_BAR_LINKS.map((item, i) => (
              <a
                onClick={() => setIsMenuOpen(false)}
                className="linkItem"
                key={i}
                href={item.link}
              >
                {item.title}
              </a>
            ))}
            <a
              onClick={() => setIsMenuOpen(false)}
              className="linkItem"
              href="https://bitport.gitbook.io/whitepaper/advantages"
              target="_blank"
            >
              Doc
            </a>
          </ul>
        </div>
        {/* hamburger Icon */}
        <div
          className={isMenuOpen ? `hamburger active` : "hamburger"}
          onClick={() =>
            setIsMenuOpen((prev) => {
              return !prev;
            })
          }
          aria-label="Toggle Mobile Menu"
        >
          <span className="bar top-bar"></span>
          <span className="bar middle-bar"></span>
          <span className="bar bottom-bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
