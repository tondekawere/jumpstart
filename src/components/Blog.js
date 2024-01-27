import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  padding: 5%;
  margin-top: 40%;
  @media (min-width: 568px) {
    margin-top: 10%;
  }
  text-align: center;
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  h2 {
    margin-top: 5%;
    padding-bottom: 10%;
    font-family: ${(props) => props.theme.fam.medium};
  }
  .images {
    /* display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column; */
    gap: 3%;
    .col1,
    .col2,
    .col3,
    .col4,
    .imgs {
      display: none;
    }
    .display,
    .imgs {
      gap: 3%;
      display: grid;
    }
    .display {
      @media (min-width: 568px) {
        display: flex;
        margin: 0;
        .imgs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        }
      }
    }
    .first {
      display: grid;
      gap: 3%;
    }
    .second,
    .first {
      .image-h {
        position: relative;
        .text {
          position: absolute;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0%;
          left: 0;
          width: 100%;
          height: 100%;
          right: 0%;
          font-size: 13px;
          p {
            display: none;
          }
          .t {
            line-height: 30px;
          }
          &:hover {
            padding: 5%;
            width: 90%;
            height: 90%;
            background: #4d86c9d7;
            color: #fff;
            content: "";
            p {
              display: block;
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 3%;
    h2 {
      padding-bottom: 1%;
    }
    .images {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2%;
      .first {
        margin-top: 5%;
        display: flex;
        justify-content: flex-start;
        .display {
          width: 100%;
          flex-direction: column;
          .image-h {
            width: 100%;
            .img-t {
              height: 100%;
              width: 100%;
              img {
                width: 100%;
              }
            }
          }
          .imgs {
            flex-direction: row;
            width: 100%;
            .image-h {
              width: 100%;
              img {
                width: 100%;
              }
            }
          }
        }
        .c2 {
          display: grid;
          gap: 2%;
          width: 48.5%;
        }
        .col3 {
          display: grid;
          gap: 2%;
          width: 100%;
          .image-h {
            width: 100%;
            .img-t {
              width: 100%;
              img {
                width: 100%;
              }
            }
          }
          .imgs {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 3%;
            width: 100%;
            .image {
              width: unset;
              img {
                width: 100%;
              }
            }
          }
        }
      }
      .second {
        width: 53%;
      }
    }
  }

  @media (min-width: 992px) {
    margin-top: 5%;
    h2 {
      font-size: 45px;
      margin-top: 0%;
      padding-bottom: 0;
    }

    .images {
      .first {
        width: 100%;

        .col1,
        .col3 {
          width: 80.6%;
        }
        .col2,
        .col4 {
          display: grid;
          width: 39%;
          gap: 2%;
        }
      }
      .second {
        width: 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 0 10%;
    margin-top: 15%;
    .blog-inner {
      h2 {
        font-size: 40px;
        margin-top: 2%;
      }
      .images {
        .first {
          width: 100%;

          .col1,
          .col3 {
            width: 80.6%;
          }
          .col2,
          .col4 {
            display: grid;
            width: 39%;
            gap: 2%;
          }
        }
        .second {
          width: 100%;
        }
      }
    }
  }
`;

function Blog() {
  return (
    <Wrapper>
      <div className="blog-inner">
        <p>Follow us on instagram</p>
        <h2>@jumpstart</h2>
        <div className="images">
          <div className="first">
            <div className="col1 display">
              <div className="image-h">
                <div className="img-t">
                  <img src="./images/img1.png" alt="image1" />
                </div>
                <div className="text">
                  <p className="t">
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>

              <div className="imgs">
                <div className="image-h">
                  <img src="./images/img6.png" alt="image6" />
                </div>
                <div className="image-h">
                  <img src="./images/img7.png" alt="image7" />
                </div>
              </div>
            </div>
            <div className="col2 none c2">
              <div className="image-h">
                <img src="./images/img2.png" alt="image2" />
              </div>
              <div className="image-h">
                <img src="./images/img8.png" alt="image8" />
              </div>
              <div className="image-h">
                <img src="./images/img9.png" alt="image9" />
              </div>
            </div>
          </div>
          <div className="first second">
            <div className="col3 none">
              <div className="imgs las">
                <div className="image">
                  <img src="./images/img3.png" alt="image3" />
                </div>
                <div className="image">
                  <img src="./images/img4.png" alt="image4" />
                </div>
              </div>
              <div className="image-h">
                <div className="img-t">
                  <img src="./images/a.png" alt="image1" />
                </div>
                <div className="text">
                  <p className="t">
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
            </div>
            <div className="col4 none">
              <div className="image-h">
                <img src="./images/img5.png" alt="image5" />
              </div>
              <div className="image-h">
                <img src="./images/img10.png" alt="image10" />
              </div>
              <div className="image-h">
                <img src="./images/img11.png" alt="image11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Blog;
