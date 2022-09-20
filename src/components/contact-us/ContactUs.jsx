import "./contact-us.css";

const ContactUs = () => {
  return (
    <div className="contact-us__container">
      <div className="title">Get In Touch</div>
      <form className="Contact-Us">
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Let us know how to contact you back.."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell us.."></input>
        </p>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
