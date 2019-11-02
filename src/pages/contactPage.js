import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import HeaderImage from "assets/images/contact/header.jpg";

const Header = styled.div`
  & {
    background: url(${HeaderImage});
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
  }
`;

const ContactSection = styled.div`
  & {
    padding: 50px 0;
    background-color: #fef1df;
  }
  & .container {
    padding: 30px 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  & .form-container h1 {
    font-size: 26px;
    padding-bottom: 16px;
  }
  & .form-container input,
  & .form-container textarea {
    background-color: #fce1bc;
    width: 100%;
    padding: 16px;
    border-width: 0;
    border-radius: 0;
    color: #999;
    font-size: 14px;
  }

  & .form-container textarea {
    min-height: 150px;
  }
  & textarea:focus,
  input:focus {
    outline: none;
    border-color: #2d3940;
    color: #3e3e3e;
  }
  & .form-container form {
    margin-left: -3%;
  }
  & .input-div {
    width: 50%;
    float: left;
    padding: 0 0 0 3%;
    margin-bottom: 3%;
  }
  & .message-div {
    padding: 0 0 0 3%;
    margin-bottom: 3%;
  }
  & .captcha-container {
    margin-top: -1.5%;
    text-align: right;
  }
  & .captcha-container p {
    display: inline-block;
    margin: 0px;
  }
  & .captcha-container input {
    height: 50px;
  }
  & .captcha-container input {
    max-width: 50px;
    padding: 16px;
  }
  @media (max-width: 767px) {
    & .input-div {
      width: 100%;
    }
  }
  @media (min-width: 981px) {
    & .contact-info {
      width: 29.667%;
    }
    & .form-container {
      width: 64.833%;
      margin-right: 5.5%;
    }
  }
  @media (max-width: 980px) {
    & .container {
      display: block;
    }
    & .contact-info {
      width: 100%;
    }
    & .form-container {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  & .border-red {
    border: 1px solid red !important;
  }
  & .button {
    color: #c01700;
    background: transparent;
    margin-top: 20px;
    text-shadow: none;
    text-decoration: none;
    position: relative;
    padding: 0.3em 1em;
    border: 2px solid;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.7em !important;
    transition: all 0.2s;
    border-radius: 3px;
    display: inline-block;
    width: fit-content;
    margin: 0 0 0 15px;
  }
  & .button:focus {
    outline: none;
  }
  & .button:after {
    content: "5";
    font-family: ETmodules !important;
    font-size: 32px;
    margin-left: -1em;
    opacity: 0;
    transition: all 0.2s;
    position: absolute;
  }
  & .button:hover:after {
    margin-left: -0.2em;
    opacity: 1;
  }
  & .button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border: 2px solid transparent;
    padding: 0.3em 2em 0.3em 0.7em;
    cursor: pointer;
  }
`;

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: 0,
      valueB: 0
    };
  }
  componentDidMount() {
    this.setState({ valueA: getRandomInt(15), valueB: getRandomInt(15) });
  }
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { valueA, valueB } = this.state;
    return (
      <React.Fragment>
        <Header />
        <ContactSection>
          <div className="container">
            <div className="form-container">
              <h1>Send us a message</h1>
              <div className="contact-message" />
              <form>
                <div className="input-div">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={input => (this.inputName = input)}
                  />
                </div>
                <div className="input-div">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    ref={input => (this.inputEmail = input)}
                  />
                </div>
                <div className="message-div">
                  <textarea
                    placeholder="Message"
                    ref={input => (this.inputMessage = input)}
                  />
                </div>
                <div className="captcha-container">
                  <p>
                    <span className="captcha-question">
                      {valueA} + {valueB}
                    </span>
                    {" = "}
                    <input
                      type="text"
                      name="captcha"
                      ref={input => (this.inputCaptcha = input)}
                    />
                  </p>
                  <button className="button" onClick={this.onSubmit}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-info">
              <p>
                <strong>Address:</strong>
                <br />
                Audrey Jacobs Foundation
                <br />
                Chemin Du Bois-de-Menton 12
                <br />
                CH 1066 Epalinges
              </p>
              <p>
                <strong>Phone:</strong>
              </p>
              <p>
                + 41 78 920 68 20
                <br />+ 32 478 21 49 75
              </p>
              <p>
                <strong>Email:</strong>
              </p>
              <p>info@fondationaudreyjacobs.org</p>
            </div>
          </div>
        </ContactSection>
      </React.Fragment>
    );
  }
}

export default ContactPage;
