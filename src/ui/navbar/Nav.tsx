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
    <header>
      <nav className="h-10 w-full flexBetween fixed z-[100] top-4  nav text-white font-bold transition-all px-8 ">
        {" "}
        <a href="#hero">
          <img src="/logo.png" className="h-20 filter drop-shadow-xl" alt="" />
        </a>
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
