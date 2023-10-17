import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  padding: 5%;
  margin-top: 40%;
  text-align: center;
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  h2 {
    margin: 0;
    padding-bottom: 10%;
    font-family: ${(props) => props.theme.fam.medium};
  }
  .images {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 3%;
    .col1,
    .col2,
    .col3,
    .col4,
    .imgs {
      display: grid;
      gap: 2%;
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
            background: skyblue;
            content: "";
            p {
              display: block;
            }
          }
        }
      }
    }
  }
  @media (min-width: 568px) {
    margin-top: 10%;
    .images {
      .col1,
      .col3 {
        .imgs {
          display: flex;
          align-items: center;
          justify-content: center;
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
        }
      }
      .first {
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        .col1 {
          width: 80%;
        }
        .col2 {
          margin-top: -3%;
          width: 39%;
        }
        .col3 {
          width: 73%;
        }
        .col4 {
          margin-top: -23%;
          width: 37%;
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin-top: 3%;
    h2 {
      padding-bottom: 1%;
    }

    .first {
      margin-top: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      .col1 {
        margin-left: -5%;
      }
      .col2 {
        margin-top: -8%;
        margin-right: -5%;
        width: 44%;
      }
      .col3 {
        margin-left: -5%;
      }
      .col4 {
        margin-right: -5%;
        margin-top: -8%;
        width: 44%;
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
        .col1 {
          margin-left: -84%;
          width: 95%;
        }
        .col2 {
          width: 45%;
          margin-top: -4%;
          margin-right: -85%;
        }
        .col3 {
          width: 100%;
          margin-left: -21%;
        }
        .col4 {
          width: 50%;
          margin-top: -5%;
          margin-right: -22%;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 0 10%;
    margin-top: 15%;
    .blog-inner {
      h2 {
        font-size: 62px;
        margin-top: 0%;
      }
      .images {
        margin-top: 5%;
        flex-direction: row;
        gap: 1%;
        .first {
          gap: 2%;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
          .col1 {
            width: 100%;
            margin: 0;
          }
          .col2 {
            margin: 0;
            margin-top: -10px;
            width: 49%;
          }
          .col3 {
            margin: 0;
            width: 100%;
          }
          .col4 {
            margin: 0;
            margin-top: -3%;
            width: 49%;
          }
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
            <div className="col1">
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
                  <div className="img-t">
                    <img src="./images/img6.png" alt="image6" />
                  </div>
                  <div className="text">
                    <p>
                      For schools which do not have a regular counsellor, we
                      offer counselling services within your school based on
                      your needs within your student, staff or parent community.
                    </p>
                    {/* <SocialIcon url="www.instagram.com" /> */}
                  </div>
                </div>
                <div className="image-h">
                  <div className="img-t">
                    <img src="./images/img7.png" alt="image7" />
                  </div>
                  <div className="text">
                    <p>
                      For schools which do not have a regular counsellor, we
                      offer counselling services within your school based on
                      your needs within your student, staff or parent community.
                    </p>
                    {/* <SocialIcon url="www.instagram.com" /> */}
                  </div>
                </div>
              
              </div>
            </div>
            <div className="col2">
              <div className="image-h">
                <div className="img-t">
                  <img src="./images/img2.png" alt="image2" />
                </div>
                <div className="text">
                  <p>
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
              <div className="image-h">
                <div className="img-t">
                  <img src="./images/img8.png" alt="image8" />
                </div>
                <div className="text">
                  <p>
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
              <div className="image-h">
                <div className="img-t">
                  <img src="./images/img9.png" alt="image9" />
                </div>
                <div className="text">
                  <p>
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="first second">
            <div className="col3">
              <div className="imgs">
                <div className="image-h">
                  <div className="imgs-t">
                    <img src="./images/img3.png" alt="image3" />
                  </div>
                  <div className="text">
                    <p>
                      For schools which do not have a regular counsellor, we
                      offer counselling services within your school based on
                      your needs within your student, staff or parent community.
                    </p>
                    {/* <SocialIcon url="www.instagram.com" /> */}
                  </div>
                </div>
                <div className="image-h">
                  <div className="imgs-t">
                    <img src="./images/img4.png" alt="image4" />
                  </div>
                  <div className="text">
                    <p>
                      For schools which do not have a regular counsellor, we
                      offer counselling services within your school based on
                      your needs within your student, staff or parent community.
                    </p>
                    {/* <SocialIcon url="www.instagram.com" /> */}
                  </div>
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
            <div className="col4">
              <div className="image-h">
                <div className="imgs-t">
                  <img src="./images/img5.png" alt="image5" />
                </div>
                <div className="text">
                  <p>
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
              <div className="image-h">
                <div className="imgs-t">
                  <img src="./images/img10.png" alt="image10" />
                </div>
                <div className="text">
                  <p >
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
              <div className="image-h">
                <div className="imgs-t">
                  <img src="./images/img11.png" alt="image11" />
                </div>
                <div className="text">
                  <p>
                    For schools which do not have a regular counsellor, we offer
                    counselling services within your school based on your needs
                    within your student, staff or parent community.
                  </p>
                  {/* <SocialIcon url="www.instagram.com" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Blog;
