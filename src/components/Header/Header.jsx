import logo from "../../assets/Logo-Var-1.webp";
import readit from "../../assets/readIt.png";
import apply from "../../assets/Apply.png";
import multiply from "../../assets/Multiply.png";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <div className="wrapper-navs">
          <a href="#">How it Works</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Blog</a>
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
        </div>
      </nav>
      <div className="title-text">
        <h1>Listen To The Beat Of The Web</h1>
        <p>
          First template from series templates to design web pages, using
          components system
        </p>
        <button>Let’s Go</button>
      </div>
      <div className="how2-works">
        <h2>How it works</h2>
        <div className="wrapper-works">
          <div className="works-card">
            <img src={readit} alt="readIt" />
            <h3>Read it</h3>
            <p>
              Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="works-card">
            <img src={apply} alt="Apply" />
            <h3>Apply</h3>
            <p>
              Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et magna dolore.
            </p>
          </div>
          <div className="works-card">
            <img src={multiply} alt="multiply" />
            <h3>Multiply</h3>
            <p>
              Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore orem.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
