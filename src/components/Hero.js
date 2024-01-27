import React from 'react';
import styled from "styled-components";
// import { ThemeProvider } from "styled-components";
// import { theme } from "./theme";
import { FaMouse } from "react-icons/fa";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: url(../images/home.png);
  background-position: center center;
  background-size: cover;
  display: flex;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .hero-inner {
    padding: 5%;
    img {
      display: none;
    }
    h1 {
      font-size: 45px;
      padding: 0;
      margin: 0;
      font-family: ${(props) => props.theme.fam.medium};
    }

    h4 {
      padding: 0;
      margin: 5% 0;
      font-size: 25px;
      font-family: ${(props) => props.theme.fam.medium};
      @media (min-width: 768px) {
        margin: 2% 0 5% 0;
      }
    }
    a {
      color: #fff;
      display: block;
      font-size: 20px;
      @media (min-width: 768px) {
        color: transparent;
        margin-top: -5%;
      }
      &:hover {
        color: transparent;
        p {
          color: #fff;
          display: block;
        }
      }
    }
    p {
      display: none;
      font-size: 16px;
      line-height: 26px;
      font-family: ${(props) => props.theme.fam.regular};
      @media (min-width: 768px) {
        display: block;
        color: #fff;
      }
    }
    .icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 5%;
      right: 5%;
      gap: 3%;
      a {
        padding-top: 10%;
        color: white;
        font-size: 30px;
        .mouse {
          color: white;
        }
      }
      p {
        font-size: 18px;
        padding-top: 4%;
        font-family: ${(props) => props.theme.fam.regular};
      }
    }
  }

  @media (min-width: 768px) {
    height: 50vh;
    .hero-inner {
      h1 {
        font-size: 65px;
      }
      h4 {
        font-size: 32px;
      }
      p {
        width: 55%;
      }
    }
  }
  @media (min-width: 1200px) {
    height: 100vh;
    .hero-inner {
      padding: 5% 10%;
      img {
        display: block;
      }
      .top {
        width: 25%;
        position: absolute;
        top: -10%;
        right: 0;
      }
      .bottom {
        width: 25%;
        position: absolute;
        bottom: 0%;
        left: -2%;
      }
      h1 {
        font-size: 65px;
      }
      h4 {
        font-size: 32px;
      }
      p {
        font-size: 13px;
        width: 42%;
      }
      .icon {
        right: 10%;
        gap: 3%;
        a {
          color: transparent;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div className="hero-inner">
        <h1>Jump Start</h1>
        <h4>The mental health movement</h4>
        <a>
          Learn more
          <p>
            Empowering workshops for pree-teens, teens and young adults to learn
            skills, share expiriences and reflect on their mental health journey
            and create a personal route for their rood ahead.
          </p>
        </a>
        <div className="icon">
          <a href="#">
            <FaMouse className="mouse" />
          </a>
          <p>SCROLL</p>
        </div>
        <img src="./images/yellow.png" alt="image" className="top" />
        <img src="./images/red.png" alt="image" className="bottom" />
      </div>
    </Wrapper>
  );
}
export default Hero