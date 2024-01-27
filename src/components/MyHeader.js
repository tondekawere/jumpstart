/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Wrapper = styled.header`
  position: absolute;
  display: flex;
  transition: all 300ms ease;
  width: 100%;
  padding: 3% 0;
  z-index: 999;
  transition: all 300ms ease;
  justify-content: space-between;
  align-items: center;
  transform: translate3d(0, 0, 0);
  background: #2b7de1f0;
  @media (min-width: 568px) {
    padding: 1% 0;
  }
  @media (min-width: 992px) {
    background: transparent;
    padding-top: 30px;
  }
  @media (min-width: 1200px) {
    width: 95%;
  }
  .logo {
    text-decoration: none;
    margin-left: 5%;
    width: 20%;
    cursor: pointer;
    &:hover {
      background: #66e0fb;
    }
    @media (min-width: 568px) {
      margin-left: 5%;
      width: 10%;
    }
    @media (min-width: 768px) {
      margin-left: 5%;
      font-size: 20px;
    }
    @media (min-width: 992px) {
      width: 5%;
      font-size: 20px;
    }
    @media (min-width: 1200px) {
      width: 7%;
      margin-left: 10%;
    }
  }
  .menu {
    @media (min-width: 992px) {
      width: 70%;
      margin-right: 5%;
    }
  }
  .hamburger {
    padding: 20px 37px 20px 6px;
    position: relative;
    margin-right: 30px;
    transition: all 0.7s ease;
    z-index: 3;
    @media (min-width: 992px) {
      display: none;
    }
    span {
      width: 30px;
      height: 2px;
      background: #fff;
      position: absolute;
      transition: all 0.7s ease;
      &:before {
        position: absolute;
        content: "";
        background: #fff;
        top: -7px;
        height: 100%;
        width: 100%;
        transition: all 0.7s ease;
      }
      &:after {
        position: absolute;
        content: "";
        background: #fff;
        top: 7px;
        height: 100%;
        width: 100%;
        transition: all 0.7s ease;
      }
    }
  }
  .open {
    outline-color: #000;
    span {
      background: transparent;
      &:after {
        top: 0;
        transform: rotate(-585deg);
        background: #66e0fb;
      }
      &:before {
        top: 0;
        transform: rotate(-495deg);
        background: #66e0fb;
      }
    }
  }
  ul {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 100%;
    right: 0;
    display: flex;
    transition: all 0.7s ease;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    max-height: 0;
    overflow: hidden;
    list-style: none;
    font-size: 18px;
    @media (min-width: 568px) {
      top: 100%;
      height: 80vh;
    }
    @media (min-width: 768px) {
      height: 720px;
    }
    @media (min-width: 992px) {
      max-height: none;
      background: transparent;
      flex-direction: row;
      width: 100%;
      height: unset;
      justify-content: flex-end;
      position: relative;
      padding: 0 3%;
      gap: 3%;
    }
    @media (min-width: 1200px) {
      justify-content: center;

    }
     li {
      width: 100%;
      &:hover {
        border: 1px solid #181818;
        a {
          font-size: 20px;
          text-decoration: underline;
          color: #66e0fb;
        }
      }
      @media (min-width: 992px) {
        margin: 0 0 0 2%;
        width: unset;
        &:hover {
          a {
            color: #66e0fb;
          }
        }
      }
      @media (min-width: 1200px) {
        margin: 0;
      }
      a {
        font-family: green;
        display: block;
        padding: 20px;
        cursor: pointer !important; 
        transition: all 0.7s ease;

        @media (min-width: 992px) {
          width: unset;
          padding: 0;
          margin: 0;
          color: #ffffff;
        }
        @media (min-width: 1200px) {
          color: #ffffff;
        }
      }
    }
  }
  .change {
    max-height: 500px;
    @media (min-width: 568px) {
      max-height: 80vh;
      a {
        padding: 8px 20px;
      }
    }
    @media (min-width: 768px) {
      max-height: 420px;
      a {
        font-size: 20px;
        padding: 8px 5%;
        &:hover {
          font-size: 24px;
        }
      }
    }
  }
`;

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () => {
    setClick(false);
  };

  return (
    <Wrapper>
      <a href="/" className="logo">
       <img src="./images/logo.png" alt="logo"/>
      </a>
      <div className="menu">
        <div
          className={click ? "hamburger open" : "hamburger"}
          onClick={() => setClick(!click)}
        >
          <span></span>
        </div>
        <ul className={click ? "change" : ""}>
          <li>
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="/"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              Blog & News
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
