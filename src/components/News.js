import React from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
  .news-inner {
    padding: 10% 5% 5% 5%;
    display: grid;
    gap: 5%;
    font-family: ${(props) => props.theme.fam.regular};
    h2 {
      font-family: ${(props) => props.theme.fam.medium};
    }
    .p {
      line-height: 27px;
      padding: 5% 0;
    }
    .inner {
      gap: 5%;
      display: grid;
      .left {
        color: #230871;
        .red-top {
          background: #ff5c4c;
          padding: 5%;
          border: none;
        }
        .last {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5%;
          button {
            background: #ff5c4c;
            padding: 3%;
            border: none;
            border-radius: 5px;
          }
          p {
            color: black;
          }
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        color: #230871;
        .b1 {
          background: #87d8d8;
          padding: 5%;
          border: none;
        }
        .last {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5%;
          button {
            background: #87d8d8;
            padding: 3%;
            border: none;
            border-radius: 5px;
          }
          p {
            color: black;
          }
        }
      }
    }
    @media (min-width: 568px) {
      gap: 10%;
      .inner {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 5%;
        .left,
        .right {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;
          height: 135vh;
        }
      }
    }
    @media (min-width: 768px) {
      gap: 10%;
      .inner {
        .left,
        .right {
          gap: 0;
          height: 460px;
          .p {
            font-size: 16px;
          }
          .red-p {
            font-size: 16.97px;
          }
        }
      }
    }

    @media (min-width: 992px) {
      h2 {
        font-size: 45px;
        margin: 0% 0 1% 0;
      }
      .inner {
        display: flex;
        gap: 5%;
        .left,
        .right {
          gap: 0;
          height: 390px;
        }
      }
    }
    @media (min-width: 1200px) {
      padding: 0 10%;
      h2 {
        font-size: 62px;
        margin-top: 0%;
      }
      .inner {
        display: flex;
        gap: 5%;
        p {
          font-size: 14px;
          line-height: 26px;
        }
        .left {
          height: 330px;

          .red-top {
            padding: 3% 5% 3% 4%;
          }
          .p {
            padding: 3% 0;
            font-size: 15px;
            width: 95%;
          }
          .last {
            width: 95%;
            button {
              border-radius: 10px;
              padding: 3% 20% 3% 3%;
            }
          }
        }
        .right {
          height: 330px;
          .b1 {
            padding: 3% 5% 3% 4%;
          }
          .p {
            padding: 3% 0;
            width: 95%;
            font-size: 15px;
          }
          .last {
            width: 95%;
            button {
              border-radius: 10px;
              padding: 3% 20% 3% 3%;
            }
          }
        }
      }
    }
    .l {
      color: #0000006e !important;
    }
  }
`;
function News() {
  return (
    <Wrapper>
      <div className="news-inner">
        <h2>Latest News & Blog</h2>
        <div className="inner">
          <div className="left">
            <div className="one">
              <button className="red-top">How to deal with Anxiety</button>
              <p className="p red-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div className="last">
              <button>Continue</button>
              <p className="l">Posted 25 November 2022</p>
            </div>
          </div>
          <div className="right">
            <div className="one">
              <button className="b1">How to deal with Anxiety</button>
              <p className="p">
                Jump Start is committed to supporting communities of all
                economic, cultural and social backgrounds. We are currently
                seeking funding to develop and roll out our curriculum into
                Shona and hopefully later Ndebele. We can then support rural
                staff in becoming trained in the Jump Start programme, allowing
                them to go back to their rural schools better equipped and
                empowered to support the mental and emotional welfare of their
                students and community members
              </p>
            </div>
            <div className="last">
              <button>Continue</button>
              <p className="l">Posted 08 October 2022</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default News