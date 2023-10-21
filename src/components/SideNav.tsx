import { useLocation } from "react-router";
import { useSpring, animated } from "@react-spring/web";

const SideNav = ({ toggleSideNav }) => {
  const fadeIn = useSpring({
    from: { opacity: 0, marginLeft: -1 },
    to: { opacity: 1, marginLeft: 0 },
    config: {
      duration: 1000,
    },
  });

  const location = useLocation();

  let navStyle = "";
  if (location.pathname === "/about") {
    navStyle = "aboutStyle";
  }
  if (location.pathname === "/skills") {
    navStyle = "skillStyle";
  }
  if (location.pathname === "/portfolio" || location.pathname === "/contact") {
    navStyle = "portfolioStyle";
  }

  return (
    <animated.div className={`sidenav ${navStyle}`} style={fadeIn}>
      <h1>
        L<strong>.</strong>B<strong>.</strong>D
      </h1>
      <h6>Lambe Boluwatife Daniel</h6>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/skills">SKILLS</a>
        </li>

        <li>
          <a href="/portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
      <div className="social-links">
        <div className="social">
          <a
            rel="noreferrer"
            href="https://twitter.com/Danibholie"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            href="https://www.instagram.com/lbd_codes/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/lambe-boluwatife-870b6136"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            href="https://github.com/lambeboluwatife"
            target="_"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="btn">
        <button className={navStyle} onClick={toggleSideNav}>
          Close
        </button>
      </div>
    </animated.div>
  );
};

export default SideNav;
