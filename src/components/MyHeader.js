import React from 'react'
import styled from "styled-components";
import { useState } from "react";
 

const Wrapper = styled.section`
  position: absolute;
  width: 100%;

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 0% 3% 3%;

    a {
      width: 20%;
      z-index: 1;

      img {
        width: 100%;
      }
    }

    .toggle-menu {
      background: red;
      position: absolute;
      right: 10%;
      width: 40px;
      height: 100%;
      z-index: 4;
      cursor: pointer;
      opacity: 0;
      margin: 18px -10px 0 0;
    }

    #menu {
      position: absolute;
      max-height: 0;
      overflow: hidden;
      background: red;
      width: 100%;
      top: 100%;
      right: 0;
      line-height: 30px;
      transition: 0.7s;
      z-index: 4;
      list-style: none;

      li {
        width: 100%;

        a {
          font-family: ${(props) => props.theme.fam.medium};
          color: #fff;
          text-decoration: none;
          padding: 20px;
          display: block;
          font-size: 20px;
          transition: all 0.7s ease;
          width: 100%;
        }

        a:hover {
          background: rgba(7, 7, 7, 0.704);
          color: #7e7e7e;
        }
      }
    }

    #hamburger {
      position: relative;
      right: 5%;
      width: 30px;
      height: 4px;
      background: #ffffffbc;
      border-radius: 10px;
      cursor: pointer;
      z-index: 2;
      transition: 0.3s;
    }

    #hamburger:before,
    #hamburger:after {
      content: "";
      position: absolute;
      height: 4px;
      right: 0;
      background: #ffffffbc;
      transition: 0.3s;
      border-radius: 10px;
    }

    #hamburger:before {
      top: -10px;
      width: 40px;
    }

    #hamburger:after {
      width: 20px;
      top: 10px;
    }

    .opened {
      background-color: transparent !important;

      &:before {
        top: 0 !important;
        transform: rotate(45deg);
        width: 100% !important;
      }

      &:after {
        top: 0 !important;
        transform: rotate(-45deg);
        width: 100% !important;
      }
    }

    #menu.dropped {
      max-height: 800px !important;
      padding: 5% 0;
    }
  }

  @media (min-width: 568px) {
    .header-inner {
      /* padding: 0; */

      a {
        width: 10%;
      }

      #menu {
        width: 100%;
        top: 70%;

        li {
          a {
            padding: 7px 30px;

            &:hover {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .header-inner {
      #menu {
        position: relative;
        max-height: unset;
        background: none;
        width: 80%;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        line-height: 100%;
        padding: 0;
        margin: 0;
        li {
          width: unset;

          a {
            width: 100%;
            padding: 0;

            &:hover {
              width: 100%;
            }
          }
        }
      }

      #hamburger {
        display: none;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 90%;
    .header-inner {
      gap: 12%;

      a {
        width: 7%;
        margin-left: 9%;

        img {
          width: 100%;
        }
      }

      #menu {
        gap: 6%;

        li {
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
function Header() {

  const [open, setOpen] = useState(false);
  const [drop] = useState(false);
  
  return (
    <Wrapper>
      <div className="header-inner">
        <a href="#">
          <img src="./images/logo.png" alt="logo" />
        </a>
        <div onClick={() => setOpen(!open)}  className={open ? "opened" : "" } id="hamburger"></div>
        <ul className={drop} id="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog & News</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header