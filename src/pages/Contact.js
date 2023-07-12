
import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import styles from "../styles/contact.module.css"

const TITLE = "Contact Me | " + Config.SITE_TITLE;
const DESC = "Contact Cheryl Miller.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      // Submit the form data
      console.log("Form submitted successfully!");
      // Reset the form fields
      this.setState({
        name: "",
        email: "",
        message: "",
        errors: {
          name: "",
          email: "",
          message: "",
        },
      });
    }
  };

  validateForm = () => {
    let { name, email, message } = this.state;
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!this.validateEmail(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  render() {
    const { name, email, message, errors } = this.state;

    return (
      <main>
         <div className={styles['content-container']}>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
          <meta name="description" content={DESC} />
        </Helmet>
        <div className={styles["title-container"]}>
        <h2>Contact Me</h2>
        <p>If you would like to learn more about me and what I can do for your company feel free do contact me and arrange a meeting. </p>
        </div>
        <form onSubmit={this.handleSubmit} className={styles["form-container"]}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleInputChange}
            ></textarea>
            {errors.message && <span>{errors.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
        </div>
      </main>
    );
  }
}

export default Contact;
