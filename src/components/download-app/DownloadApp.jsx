import "./download-app.css";
import playStore from "../../assets/Download Icon.svg";
import downloadIcon from "../../assets/download icon mini.svg";
import likeIcon from "../../assets/like icon.svg";
import starIcon from "../../assets/star icon.svg";

import downloadAppScreens from "../../assets/download-app-screen.png";

const DownloadApp = () => {
  return (
    <div className="download-app">
      <div className="title">Download App Now</div>
      <div className="download-playStore">
        <img src={playStore} alt="download now" />
      </div>
      <div className="download-app__features">
        <div className="download-app__box">
          <img src={downloadIcon} alt="downloads" />
          <div className="download_count texts">500</div>
          <div className="download-app__text text">Download</div>
        </div>
        <div className="download-app__box">
          <img src={starIcon} alt="downloads" />
          <div className="download_count texts">50</div>
          <div className="download-app__text text">Ratings</div>
        </div>
        <div className="download-app__box">
          <img src={likeIcon} alt="downloads" />
          <div className="download_count texts">100</div>
          <div className="download-app__text text">Likes</div>
        </div>
      </div>
      <div className="download-app__screens">
        <img src={downloadAppScreens} alt="screens" />
      </div>
    </div>
  );
};

export default DownloadApp;
