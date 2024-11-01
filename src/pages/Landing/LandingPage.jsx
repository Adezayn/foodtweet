import { Link } from "react-router-dom";
import logo from "/assets/main-logo-no-bg.png";
import Button from "../../components/Button";
import "./styles.css";

const LandingPage = () => {
  const year = new Date().getFullYear();
  return (
    <div className="landing-page">
      <header>
        <nav>
          <div className="header-logo">
            <img src={logo} alt="foodtweet logo" />
          </div>
          <ul>
            {/* <li>Home</li> */}
            <Link to="/home">Home</Link>
            <li>About</li>
            <li>Vendors</li>
          </ul>
          <Button>Login/Register</Button>
        </nav>
        <div className="hero-section">
          <h1>Discover and Review Amazing Meals</h1>
        </div>
      </header>
      <main>
        <div className="about-section"></div>
        <div className="vendor-section">
          {/* top rated meals infinite horizontal scrolling */}
          {/* cta to vendors */}
        </div>
      </main>
      <footer>
        <img src={logo} alt="foodtweet logo" className="footer-logo"/>
        <div>
          <span>&copy; {year} FoodTweet</span>
          <span>All rights reserved.</span>
        </div>
        <div>
          <a href="/facebook"></a>
          <a href="/twitter"></a>
          <a href="/instagram"></a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
