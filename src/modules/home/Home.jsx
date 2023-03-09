import React from "react";
import "./Home.scss";
import { HdImg, Pcrd1, Pcrd2, Pcrd3 } from "../../assets";

const Home = () => {
  return (
    <>
      <div className="subhead-container">
        <div className="subhead-container-content">
          <div className="subhead-container-content-left">
            <span>Hi !</span>
            <h1>I’m Imran Ahmad.</h1>
            <h1>a Front-End Developer</h1>
            <p>
              Front-End devel oper based in Bekasi, Indonesian I’am coding with
              a clean and beautiful problem solving in mind.
            </p>
          </div>
          <div className="subhead-container-content-right">
            <img src={HdImg} alt="HeaderImg" />
          </div>
        </div>
      </div>
      <div className="passion-container">
        <div className="passion-container-content">
          <div className="passion-container-content-1">
            <h1>
              Additional <b>Passions </b>
            </h1>
          </div>
          <div className="passion-container-content-2">
            <PassionsCards
              Images={Pcrd3}
              h1data="Front-End"
              spdata="Developer"
              ptext="(Sass, Bootstrap, Tailwind)"
            />
            <PassionsCards
              Images={Pcrd1}
              h1data="Back-End"
              spdata="Developer"
              ptext="(NodeJS, Laravel, Codeigniter)"
            />
            <PassionsCards
              Images={Pcrd2}
              h1data="UI/UX"
              spdata="Designer"
              ptext="(Figma, Zeplin, Adobe XD)"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const PassionsCards = ({ Images, h1data, spdata, ptext }) => {
  return (
    <div className="pcards">
      <div className="pcards-content">
        <div className="pcards-content-one">
          <img src={Images} alt="Pc1" />
        </div>
        <div className="pcards-content-two">
          <h1>
            {h1data} <span> {spdata} </span>
          </h1>
          <p> {ptext} </p>
        </div>
      </div>
    </div>
  );
};
