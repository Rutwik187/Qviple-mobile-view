import "./module-we-provide.css";
import admissionManagement from "../../assets/institute.svg";
import fundManagement from "../../assets/fund management.svg";
import customizedDepartment from "../../assets/customised department.svg";
import heroAsset from "../../assets/modules-we-provide-app-screenshotsvg.png";
import eLearning from "../../assets/e-learning.svg";
import libraryModule from "../../assets/library.svg";
import sports from "../../assets/sports.svg";

const ModulesWeProvide = () => {
  return (
    <div className="modules-we-provide">
      <h2 className="title modules-we-provide__title">Modules We Provide</h2>
      <div className="text modules-we-provide__text">
        SaaS platform that provides premium features at free of cost for
        lifetime
      </div>
      <div className="modules-we-provide__container">
        <div className="modules-we-provide__box">
          <div className="modules-we-provide__img">
            <img src={admissionManagement} alt="admission management" />
          </div>
          <div className="modules-we-provide__subHeading title">
            Admission Management
          </div>
          <div className="text modules-we-provide__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="modules-we-provide__box">
          <div className="modules-we-provide__img">
            <img src={fundManagement} alt="admission management" />
          </div>
          <div className="modules-we-provide__subHeading title">
            Fund Management
          </div>
          <div className="text modules-we-provide__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="modules-we-provide__box">
          <div className="modules-we-provide__img">
            <img src={customizedDepartment} alt="admission management" />
          </div>
          <div className="modules-we-provide__subHeading title">
            customized department
          </div>
          <div className="text modules-we-provide__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="module-we-provide__heroAsset">
        <img src={heroAsset} alt="app screenshot" />
      </div>
      <div className="modules-we-provide__container">
        <div className="modules-we-provide__box">
          <div className="modules-we-provide__img">
            <img src={eLearning} alt="admission management" />
          </div>
          <div className="modules-we-provide__subHeading title">
            E-learning platform
          </div>
          <div className="text modules-we-provide__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="modules-we-provide__box">
          <div className="modules-we-provide__img">
            <img src={libraryModule} alt="admission management" />
          </div>
          <div className="modules-we-provide__subHeading title">
            Library Module
          </div>
          <div className="text modules-we-provide__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="modules-we-provide__box">
          <div className="modules-we-provide__img">
            <img src={sports} alt="admission management" />
          </div>
          <div className="modules-we-provide__subHeading title">
            Sports and Arts
          </div>
          <div className="text modules-we-provide__subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesWeProvide;
