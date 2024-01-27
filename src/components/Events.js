import React from "react";
import styled from "styled-components";


const Wrapper = styled.section`
  .events-inner {
    padding: 5%;
    .top {
      img {
        border-radius: 20px;
      }
      .inner {
        padding: 5% 5% 10% 5%;
        h5 {
          font-family: ${(props) => props.theme.fam.medium};
          margin: 0;
          font-size: 22px;
        }
        p {
          font-family: ${(props) => props.theme.fam.regular};
          line-height: 27px;
          margin: 0%;
        }
      }
      .blue {
        padding: 0 10% 5% 5%;
        position: relative;
        background: #2a7de1;
        color: #fff;
        padding: 0%;

        .blue-small {
          text-align: center;
          position: absolute;
          padding: 3% 8%;
          right: 5%;
          top: 2%;
          background: #2a7de1;
          border-radius: 10px;
          h6 {
            margin: 0;
            font-size: 30px;
            font-weight: 800;
          }
          p {
            margin: 0;
          }
          .first {
            font-size: 24px;
          }
        }
        .blue-inner {
          text-align: center;
          position: absolute;
          padding: 2% 10%;
          right: 5%;
          top: 33%;
          background: #2a7de1;
          color: #fff;
          border-radius: 10px;
          p {
            margin: 0;
          }
        }
      }
      .yellow {
        padding: 0 5% 5% 5%;
        position: relative;
        background: #ffdf2b;
        color: #230871;
        padding: 0%;
        .yellow-small {
          text-align: center;
          position: absolute;
          padding: 3% 8%;
          right: 5%;
          top: 2%;
          background: #ffdf2b;
          color: #230871;
          border-radius: 10px;
          h6 {
            margin: 0;
            font-size: 30px;
            font-weight: 800;
          }
          p {
            margin: 0;
          }
          .first {
            font-size: 24px;
          }
        }
        .yellow-inner {
          text-align: center;
          position: absolute;
          padding: 2% 10%;
          right: 5%;
          top: 30%;
          background: #ffdf2b;
          color: #230871;
          border-radius: 10px;
          p {
            margin: 0;
          }
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3%;
      hr {
        width: 20%;
        background: #230871;
        border: none;
        border-radius: 100px;
        height: 4px;
        margin: 0;
      }
      .short {
        width: 10%;
      }
    }

    @media (min-width: 568px) {
      .top {
        .cards {
          .small {
            position: absolute;
            top: 46%;
          }
          .inner {
            h5 {
              font-size: 29px;
            }
          }
        }
      }
      .bottom {
        gap: 2%;
        hr {
          width: 5%;
          height: 4px;
        }
        .short {
          width: 2%;
        }
      }
    }
    @media (min-width: 768px) {
      .top {
        display: flex;
        gap: 4%;
        .cards {
          .small {
            position: absolute;
            top: 33%;
          }
          .inner {
            h5 {
              font-size: 29px;
            }
            .bt {
              margin-top: 10%;
            }
          }
        }
      }
    }
    @media (min-width: 992px) {
      h2 {
        font-size: 45px;
      }
      .top {
        display: flex;
        gap: 5%;
        .cards {
          width: 50%;
          .small {
            position: absolute;
            top: 40%;
          }
          .inner {
            h5 {
              font-size: 25px;
            }
          }
        }
      }
    }
    @media (min-width: 1200px) {
      h2 {
        font-size: 62px;
      }
      padding: 0 10% 10% 10%;
      .top {
        display: flex;
        gap: 2%;
        .cards {
          width: 50%;
          img{
            height: 350px;
            object-fit: cover;
          }
          .big {
            padding: 2% 7%;
            position: absolute;
            top: 5%;
            right: 3%;
            h6 {
              font-size: 44px;
              padding: 0;
            }
            .first {
              padding: 2% 0 5% 0;
            }
          }
          .small {
            position: absolute;
            top: 52%;
            right: 3%;
          }
          .inner {
            padding: 3;
            h5 {
              padding: 0;
              font-size: 18px;
            }
            p {
              line-height: 26px;
              font-size: 15px;
              padding-top: 2%;
            }
            .bt {
              margin-top: 0%;
            }
          }
        }
      }
      .bottom {
        gap: 1%;
        hr {
          width: 5%;
          height: 4px;
          height: 5px;
        }
        .short {
          width: 2%;
        }
      }
    }
  }
`;
function Events() {
  return (
    <Wrapper>
      <div className="events-inner">
        
        <h2>Upcoming Events</h2>
        <div className="top">
          <div className="left blue cards">
            <img src="./images/blue.png" alt="images" />
            <div className="blue-small big">
              <h6>27</h6>
              <p className="first">OCT</p>
              <p className="next">2PM</p>
            </div>
            <div className="blue-inner small">
              <p>Deta</p>
            </div>
            <div className="inner">
              <h5>Counsellors workshops</h5>
              <p className="bt">
                Join us for a focus group discussion, to enable us to support
                counsellors in personal and professional growth. Fee- TBD
              </p>
            </div>
          </div>
          <div className="right yellow cards">
            <img src="./images/img.png" alt="images" />
            <div className="yellow-small big">
              <h6>08</h6>
              <p className="first">FEB</p>
              <p>2PM</p>
            </div>
            <div className="yellow-inner small">
              <p>Deta</p>
            </div>
            <div className="inner">
              <h5>Parents Workshop - Supporting Your Anxious Child</h5>
              <p>
                Join us for a focus group discussion to enable us to support
                counsellors in personal and professional growth. Fee- TBD
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <hr className="long" />
          <hr className="short" />
          <hr className="short" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Events;
