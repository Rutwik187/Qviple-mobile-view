import "./about-us.css";
import video from "../../assets/Video.png";
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="title about-us__title">About Us</div>
      <div className="text about-us__text">
        Qviple is part of Mithkal Minds Private Limited company based in Nashik,
        providing SaaS services.
      </div>
      <div className="text about-us__text">
        We believe in embracing everyone, that’s why we provide services at
        price you want to pay.
      </div>
      <div className="text about-us__text">
        Our enthusiastic team will always be there for you to help you out.
      </div>
      <div className="about-us__video">
        <img src={video} alt="about-us video" />
      </div>
    </div>
  );
};

export default AboutUs;
