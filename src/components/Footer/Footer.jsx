import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="future">
        <div className="wrapper-future">
          <h1>Download the future</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim.
          </p>
          <div className="wrapper-sign">
            <input type="text" placeholder="Input text placeholder" />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
      <div className="footer-nav">
        <div className="wrapper-navs">
          <div className="wrap-navsinfo">
            <h2 href="#">Product</h2>
            <a href="#">How it works</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
          </div>
          <div className="wrap-navsinfo">
            <h2 href="#">About form</h2>
            <a href="#">Our team</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Stores</a>
          </div>
          <div className="wrap-navsinfo">
            <h2 href="#">Connect</h2>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
          </div>
          <div className="wrap-navsinfo">
            <h2 href="#">Contact</h2>
            <a href="#">info@gmail.com</a>
            <a href="#">000-000-0000</a>
            <a href="#">0000 Willa River Suite 000</a>
          </div>
          <div className="wrap-navsinfo">
            <h2 href="#">Newsletter</h2>
            <p>Join our weekly maiiling list</p>
            <p>Name *</p>{" "}
            <div className="wrapper-sign">
              <input type="text" placeholder="Input text placeholder" />
              <a href="#">SIGN UP</a>
            </div>
          </div>
        </div>
        <div className="wrap-info">
          <div className="wrap-teams">
            <a href="#">Terms and conditions</a>
            <a href="#">Legal</a>
            <a href="#">Pattents</a>
          </div>
          <a href="#">Designed to be loved © 2008-2021</a>
        </div>
      </div>
    </footer>
  );
}
