import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import logo from "../../assets/logo without tag line.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact-info">
        <div className="footer__mail-icon">
          <FiMail
            color="var(--primary-color)"
            size={50}
            style={{
              borderRadius: "50%",
              borderWidth: "3px",
              borderColor: "var(--primary-color)",
              padding: "10px",
              borderStyle: "solid",
            }}
          />
        </div>
        <div className="title">qviple@gmail.com</div>
        <hr />
        <div className="footer__call-icon">
          <IoCallOutline
            color="var(--primary-color)"
            size={50}
            style={{
              borderRadius: "50%",
              borderColor: "var(--primary-color)",
              padding: "10px",
              borderWidth: "3px",
              borderStyle: "solid",
            }}
          />
        </div>

        <div className="title">+91 89658 1457</div>
      </div>
      <div className="footer__row">
        <div className="footer_col">
          <div>
            <img src={logo} alt="footer logo" />
          </div>
          <div className="footer_col">
            <div className="footer__social_links">
              <Link to="/">
                <FaFacebook size={25} fill="#e0e4fc" />
              </Link>
              <Link to="/">
                <FaInstagram size={25} fill="#e0e4fc" />
              </Link>
              <Link to="/">
                <FaLinkedinIn size={25} fill="#e0e4fc" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_col">
          <div className="title-white footer-quick-links">Quick Links</div>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">About Product and Services</Link>
            </li>
            <li>
              <Link to="/">Modules We Provide</Link>
            </li>
            <li>
              <Link to="/">Download App</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div class="copyright-text text">
          Copyright &copy; 2017 All Rights Reserved by Qviple
        </div>
      </div>
    </footer>
  );
};
