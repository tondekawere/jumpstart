import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Wrapper = styled.section`
  color: #230871;
  margin-top: 19%;
  @media (min-width: 568px) {
    margin-top: 5%;
  }
  button {
    margin-top: 3%;
    width: 100%;
    padding: 2%;
    border: none;
    background: #230871;
  }
  .contact {
    padding: 10% 5% 0 5%;
    @media (min-width: 568px) {
      padding-top: 0%;
    }
    @media (min-width: 1200px) {
      padding: 5% 10% 5% 10%;
      h2 {
        font-size: 62px;
        line-height: 90px;
        margin-bottom: 0;
      }
    }
    .contact-inner {
      @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 3%;
      }
      form {
        display: grid;
        gap: 5%;
        padding-top: 5%;
        @media (min-width: 768px) {
          width: 48%;
        }
        input {
          background: #f0f0f0;
          color: #230871;
          border: none;
          padding: 5% 0% 0% 5%;
          @media (min-width: 768px) {
            padding: 5% 0% 4% 5%;
          }
        }
      }
      .bottom {
        margin-top: 0%;
        @media (min-width: 992px) {
          padding-top: 3%;
        }
        .MuiInputBase-input {
          @media (min-width: 768px) {
            height: 140px !important;
          }
          @media (min-width: 992px) {
            height: 185px !important;
          }
          @media (min-width: 1200px) {
            height: 225px !important;
          }
        }
      }
      .info {
        background: #f0f0f0;
        padding: 8% 5%;
        margin-top: 5%;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 568px) {
          height: 50vh;
          margin-top: 3%;
        }
        @media (min-width: 768px) {
          height: 12vh;
          width: 100%;
          padding-left: 0;
          margin-top: 3%;
        }
        @media (min-width: 1200px) {
          height: 28.5vh;
          width: 100%;
          padding-left: 0;
          margin-top: 3%;
        }
        div {
          display: grid;
          gap: 8%;

          margin-top: -8%;
        }
        h5 {
          font-weight: 800;
          font-size: 25px;
          margin: 0;
        }
        span {
          font-weight: 700;
        }
      }

      @media (min-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3%;

        form {
          width: 29%;
          padding: 1% 0 0 0;
          input {
            padding: 7% 0% 9% 0%;
          }
        }

        .bottom {
          width: 32%;
          input {
          }
        }
        .info {
          background: #f0f0f0;
          padding: 3% 5%;

          h5 {
            font-weight: 800;
            font-size: 25px;
            margin: 0;
          }
          span {
            font-weight: 700;
          }
        }
        .info {
          width: 23%;
        }
      }
      @media (min-width: 1200px) {
        gap: 1.5%;
        form {
          width: 24%;
          padding: 1% 0 0 0;
          input {
            padding: 10% 0% 11.2% 0%;
          }
        }

        .bottom {
          width: 38%;
        }
        .info {
          background: #f0f0f0;
          padding: 3% 5%;

          h5 {
            font-weight: 800;
            font-size: 25px;
            margin: 0;
          }
          span {
            font-weight: 700;
          }
        }
        .info {
          width: 25%;
        }
      }
    }
  }

  .line {
    border: none;
    background: #230871;
    width: 100%;
    margin-top: 7%;
    height: 1px;
    @media (min-width: 768px) {
      margin-top: 3%;
    }
  }
  .footer-inner {
    padding: 5%;
    display: grid;
    gap: 20%;
    .top {
      .logo {
        display: flex;
        justify-content: flex-start;
        align-self: center;
        gap: 5%;

        h5 {
          /* margin: 3%; */
          font-size: 18px;
        }
        p {
          margin: 0;
          font-size: 13px;
        }
      }
      ul {
        display: grid;
        padding: 0;
        gap: 8%;
        list-style: none;
        li {
          a {
            text-decoration: none;
            color: #230871;
            font-size: 14px;
          }
        }
      }
    }
    .bottom {
      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        width: 20%;
      }
    }
    @media (min-width: 568px) {
      padding: 5% 0;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 30%;
          a {
            width: 80%;
          }
          h5 {
            padding-top: 10%;
          }
          p {
            font-size: 11px;
          }
        }
        ul {
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1%;
        .icons {
          width: 10%;
        }
      }
    }
    @media (min-width: 768px) {
      padding: 8% 0;

      .top {
        .logo {
          width: 28%;
          gap: 3%;
          a {
            width: 60%;
          }
          h5 {
            padding-top: 10%;
          }
        }
        ul {
          width: 90%;
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          align-self: center;
          gap: 5%;
        }
      }
    }
    @media (min-width: 992px) {
      padding: 2% 0 0 0;
      .top {
        .logo {
          width: 20%;
        }
      }
      .bottom {
        padding: 0;
        p {
          padding: 0;
        }
        .icons {
          width: 7%;
        }
      }
    }
    @media (min-width: 1200px) {
      .top {
        gap: 20%;
        .logo {
          width: 35%;
          gap: 9%;
          a {
            width: 33%;
          }
          h5 {
            font-size: 30px;
            padding-top: 15%;
            font-weight: 900;
          }
        }
        ul {
          width: 70%;
          display: flex;
          justify-content: flex-end;
          align-self: center;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0% 0;
        p {
          padding: 0;
        }
      }
    }
  }
`;
function Footer() {
  return (
    <Wrapper>
      <div className="contact">
        <h2>
          Hello; <br />
          Let's Work Together
        </h2>
        <div className="contact-inner">
          <form action="#">
            <TextField id="filled-basic" label="NAME" variant="filled" />
            <TextField id="filled-basic" label="PHONE" variant="filled" />
            <TextField id="filled-basic" label="EMAIL" variant="filled" />
          </form>
          <form className="bottom" action="#">
            <TextField
              id="standard-multiline-static message"
              label="MESSAGE"
              multiline
              rows={4}
              variant="filled"
              className="messages"
            />
          </form>
          <div className="info">
            <div>
              <p>LET'S CHAT</p>
              <h5>CONTACT DETAILS</h5>
              <p className="bottom-p">
                Feel free to contact us anytime. We will get back to you as soon
                as we can!
              </p>
              <span>info@jumpstartcommunity.org</span>
            </div>
          </div>
        </div>
        <form action="#">
          <Button variant="contained">SEND MESSAGE</Button>
        </form>

        <hr className="line"/>
        <div className="footer-inner">
          <div className="top">
            <div className="logo">
              <a href="/">
                <img src="./images/logo.png" alt="logo" />
              </a>
              <div className="text">
                <h5>Jump Start</h5>
                <p>The mental health movement</p>
              </div>
            </div>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Blog & News</a>
              </li>
              <li>
                <a href="/">For Kids</a>
              </li>
              <li>
                <a href="/">For Parents</a>
              </li>
              <li>
                <a href="/">For Schools</a>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <p> jump Start All Right Reserved.</p>
            <div className="icons">
              <SocialIcon url="www.instagram.com" />
              <SocialIcon url="www.linkedin.com" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
