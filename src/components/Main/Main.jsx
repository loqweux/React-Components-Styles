import React from "react";
import ceo from "../../assets/CEO.png";
import webdesigner from "../../assets/webdesigner.png";
import manager from "../../assets/Manager.png";
import codeMan from "../../assets/codeMan.png";
import playMan from "../../assets/playMan.png";
import mac from "../../assets/mac.png";
import woman from "../../assets/woman.png";
import autoLayout from "../../assets/AutoLayout.png";
import variants from "../../assets/Variants.png";
import components from "../../assets/Components.png";
import atomicUX from "../../assets/AtomicUX.png";
import animated from "../../assets/Animated.png";
import responsive from "../../assets/Responsive.png";
import data from "./data.json";
import "./Main.scss";

const images = {
  autoLayout,
  variants,
  components,
  atomicUX,
  animated,
  responsive,
};

export default function Main() {
  return (
    <main>
      <div className="title-why">
        <h4>Why you'll love it</h4>
        <div className="wrapper-why-love">
          <div className="love-card">
            <div className="wrapper-love-icons">
              <img src={ceo} alt="CEO" />
              <div className="wrapp-profile">
                <h5>Sean Farmer</h5>
                <p>CEO</p>
              </div>
            </div>
            <p>
              Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim veniam
              lorem ipsum dolor.
            </p>
          </div>
          <div className="love-card">
            <div className="wrapper-love-icons">
              <img src={webdesigner} alt="webDesigner" />
              <div className="wrapp-profile">
                <h5>Nick Parker</h5>
                <p>Wed-designer</p>
              </div>
            </div>
            <p>
              Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et magna dolore. Orem ipsum.
            </p>
          </div>
          <div className="love-card">
            <div className="wrapper-love-icons">
              <img src={manager} alt="Manager" />
              <div className="wrapp-profile">
                <h5>Mishel Latuale</h5>
                <p>Project Manager</p>
              </div>
            </div>
            <p>
              Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.Ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="graphic">
        <h6>Unsplash graphic</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim.
        </p>
        <div className="wrapper-graphic-img">
          <img src={codeMan} alt="codeMan" />
          <img src={playMan} alt="playMan" />
          <img src={mac} alt="mac" />
          <img src={woman} alt="woman" />
        </div>
      </div>
      <div className="design-process">
        <h1>Speed up your design process</h1>
        <div className="wrapper-design-process">
          {data.processSteps.map((step) => (
            <div className="box-process" key={step.id}>
              <img src={images[step.id]} alt={step.id} />
              <div className="text-box-process">
                <h2 className={step.color}>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="enjoyProject">
        <div className="cardText">
          <h3>Enjoy this product</h3>
          <p>
            This project required a huge amount of hours but sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquat enim ad minim.
          </p>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="teamProject">
        <h4>Project's team</h4>
        <div className="wrapper-join">
          <p>
            Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquat enim ad minim veniam
            lorem ipsum dolor.Sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button>Join our team</button>
        </div>
        <div className="wrapper-mans">
          <div className="mans-card1">
            <div className="pieter">
              <h5>Pieter Omvlee</h5>
              <p>Designer</p>
            </div>
          </div>
          <div className="mans-card2">
            <div className="loyd">
              <h5>Loyd Maywe</h5>
              <p>Php developer</p>
            </div>
          </div>
          <div className="mans-card3">
            <div className="latte">
              <h5>Latte Macchiato</h5>
              <p>CEO Company</p>
            </div>
          </div>
          <div className="mans-card4">
            <div className="cheese">
              <h5>Cheese Cake</h5>
              <p>Art Director</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
