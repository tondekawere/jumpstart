import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";

const Wrapper = styled.section`
  color: #230871;
  button {
    margin-top: 5%;
    width: 100%;
    padding: 5%;
    border: none;
  }
  .contact {
    padding: 10% 10% 0 10%;
    @media (min-width: 1200px) {
      h2 {
        font-size: 62px;
        margin-bottom: 0;
      }
      button {
        margin-top: 5%;
        width: 100%;
        padding: 3% 5%;
        border: none;
      }
    }
    .contact-inner {
      form {
        display: grid;
        gap: 5%;
        input {
          background: #f0f0f0;
          color: #230871;
          border: none;
          padding: 5% 45% 5% 5%;
        }
      }
      .bottom {
        margin-top: 8%;
        input {
          padding-bottom: 30%;
        }
      }
      .info {
        background: #f0f0f0;
        padding: 8% 5%;
        margin-top: 5%;
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
          display: grid;
          gap: 10%;
          input {
            padding: 20% 60% 20% 10%;
          }
        }

        .bottom {
          margin-top: 5%;
          width: 35%;
          input {
            padding: 15% 30% 72% 10%;
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
          width: 30%;
        }
      }
      @media (min-width: 1200px) {
        gap: 4%;

        form {
          width: 25%;
          display: grid;
          gap: 10%;
          input {
            padding: 13% 5%;
            width: 100%;
          }
        }

        .bottom {
          margin-top: 4%;
          width: 45%;
          input {
            padding: 12% 0% 50% 5%;
          }
        }
        .info {
          margin-top: 4%;
          width: 30%;
          background: #f0f0f0;
          padding: 5% 5% 10% 3%;
          display: grid;
          gap: 20%;
          h5 {
            font-weight: 800;
            font-size: 25px;
            margin: 0;
            padding: 0;
          }
          p {
            font-size: 14px;
            margin: 0;
          }
          .bottom-p {
            padding: 4% 0;
            font-weight: 200;
          }
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
  .footer-inner {
    padding: 5%;
    .top {
      .logo {
        display: flex;
        justify-content: flex-start;
        align-self: center;
        gap: 2%;
        h5 {
          margin: 0;
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
      padding-top: 6%;
      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        width: 20%;
      }
    }
    @media (min-width: 568px) {
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 50%;
          a {
            width: 80%;
          }
          h5 {
            padding-top: 25%;
          }
          p {
            font-size: 11px;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icons {
          width: unset;
        }
      }
    }
    @media (min-width: 768px) {
      padding: 8% 0;

      .top {
        .logo {
          width: 30%;
          gap: 5%;
          a {
            width: 60%;
          }
          h5 {
            padding-top: 10%;
          }
        }
        ul {
          width: 60%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-self: center;
        }
      }
    }
    @media (min-width: 992px) {
      padding: 2% 0 0 0;
      .top {
        .logo {
          width: 18%;
          gap: 3%;
        }
        ul {
          width: 70%;
          display: flex;
          justify-content: center;
          align-self: center;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2% 0;
        p {
          padding: 0;
        }
      }
    }
    @media (min-width: 1200px) {
      .top {
        gap: 20%;
        .logo {
          width: 30%;
          gap: 3%;
          a {
            width: 30%;
          }
          h5 {
            font-size: 32px;
            padding-top: 5%;
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
        padding: 2% 0;
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
            <input type="name" placeholder="NAME" />
            <input type="phone" placeholder="PHONE" />
            <input type="email" placeholder="EMAIL" />
          </form>
          <form className="bottom" action="#">
            <input type="message" placeholder="MESSAGE" />
          </form>
          <div className="info">
            <p>LET'S CHAT</p>
            <h5>CONTACT DETAILS</h5>
            <p className="bottom-p">
              Feel free to contact us anytime. We will get back to you as soon
              as we can!
            </p>
            <span>info@jumpstartcommunity.org</span>
          </div>
        </div>
        <button>SEND MESSAGE</button>
        <hr />
        <div className="footer-inner">
          <div className="top">
            <div className="logo">
              <a href="#">
                <img src="./images/logo.png" alt="logo" />
              </a>
              <div className="text">
                <h5>Jump Start</h5>
                <p>The mental health movement</p>
              </div>
            </div>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog & News</a>
              </li>
              <li>
                <a href="#">For Kids</a>
              </li>
              <li>
                <a href="#">For Parents</a>
              </li>
              <li>
                <a href="#">For Schools</a>
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
