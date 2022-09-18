import "./about-product.css";
import checkbox from "../../assets/checkbox-circle-fill.svg";
import aboutProduct from "../../assets/about product.svg";

const AboutProduct = () => {
  return (
    <div className="about-product">
      <div className="title">About Product</div>
      <div className="text about-product__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </div>
      <div className="about-product-img">
        <img src={aboutProduct} alt="about product" />
      </div>
      <div className="about-product-box">
        <div className="about-product__checkbox">
          <img src={checkbox} alt="checkbox" />
        </div>
        <div className="about-product__info">
          <div className="about-product__info__title title">
            Web Application
          </div>
          <div className="text about-product__sub-text">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="about-product-box">
        <div className="about-product__checkbox">
          <img src={checkbox} alt="checkbox" />
        </div>
        <div className="about-product__info">
          <div className="about-product__info__title title">Mobile App</div>
          <div className="text about-product__sub-text">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="about-product-box">
        <div className="about-product__checkbox">
          <img src={checkbox} alt="checkbox" />
        </div>
        <div className="about-product__info">
          <div className="about-product__info__title title">Support System</div>
          <div className="text about-product__sub-text">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="about-product-box">
        <div className="about-product__checkbox">
          <img src={checkbox} alt="checkbox" />
        </div>
        <div className="about-product__info">
          <div className="about-product__info__title title">
            Complete System
          </div>
          <div className="text about-product__sub-text">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="about-product-box">
        <div className="about-product__checkbox">
          <img src={checkbox} alt="checkbox" />
        </div>
        <div className="about-product__info">
          <div className="about-product__info__title title">
            Regular New Features
          </div>
          <div className="text about-product__sub-text">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
