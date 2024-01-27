import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .about-inner {
    padding: 5%;
    h2 {
      font-family: ${(props) => props.theme.fam.medium};
    }
    h5 {
      font-family: ${(props) => props.theme.fam.medium};
      font-size: 25px;
      margin: 0;
    }
    p {
      line-height: 26px;
      font-size: 16px;
      color: #230871;
      font-family: ${(props) => props.theme.fam.regular};
    }
    .top {
      .left {
        line-height: 26px;
        display: grid;
        padding-top: 5%;
      }
      h2 {
        font-size: 29px;
      }
      .p-top {
        padding-top: 10%;
      }
    }
    .blue {
      background: #2a7de1;
      color: #fff;

      p {
        color: #fff;
      }
    }
    .yellow {
      background: #ffdf2b;
      color: #230871;
      position: relative;
      img {
        display: none;
      }
    }
    .right {
      .red {
        background: #ff5c4c;
        color: #fff;

        p {
          color: #fff;
        }
        img {
          display: none;
        }
      }
      .tucos {
        background: #2a7de1;
        color: #fff;

        p {
          color: #fff;
        }
      }
      .faded {
        background: #87d8d8;
        color: #230871;
      }
    }
  }
  .bottom {
    h5 {
      color: #230871;
      line-height: 28px;
    }
    .right {
      background: url(../images/about.png);
      background-position: center center;
      background-size: cover;
      height: 250px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .img {
        width: 30%;
        margin-bottom: -5%;
      }
    }
  }
  @media (min-width: 768px) {
    .top {
      .left {
        padding-bottom: 0%;
        .cards {
          margin: 3% 0;
        }
        .yellow {
          margin-bottom: 0;
        }
      }
    }
    .bottom {
      .right {
        margin-top: 5%;
        height: 400px;
      }
    }
  }
  @media (min-width: 992px) {
    .top {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 5%;
      .left {
        padding-top: 0%;
        h2 {
          font-size: 35px;
          width: 45%;
          margin-top: -5%;
          line-height: 47px;
        }
        .p-top {
          padding-bottom: 5%;
        }
      }
    }
    .right {
      .red {
        margin-top: 0;
      }

    }
    .bottom {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 5%;
      gap: 3%;
      .left {
        width: 60%;
      }
      .right {
        margin: 1% 0;
        width: 60%;
        height: 380px;
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 0 5%;
    .top,
    .bottom {
      margin: 0;
      gap: 2%;
    }

    .cards {
      padding: 5% 10% 10% 10%;
      h5 {
        padding: 0 0 3% 0;
      }
      p {
        margin: 0;
        width: 98%;
      }
      .blue-h5 {
        width: 50%;
        line-height: 35px;
      }
      .red-h5 {
        padding-top: 13%;
      }
      .red-p {
        padding-bottom: 4%;
      }
    }
    .top {
      .left {
        padding-top: 0 !important;
        width: 50%;
        gap: 0%;
        h2 {
          font-size: 60px;
          width: 50%;
          line-height: 70px;
          margin: 0;
          padding: 0;
        }
        .p-top {
          padding-top: 2%;
          width: 82%;
        }
        .blue {
          margin: 3% 0;
          padding-right: 7%;
          p {
            width: 99%;
          }
        }
        p {
          font-size: 14px;
          width: 90%;
          font-weight: 100;
        }
        .yellow {
          margin: 0;
          padding-right: 7%;
          h5 {
            width: 50px;
            line-height: 35px;
          }
          p {
            width: 99%;
          }
          padding-bottom: 15%;
          img {
            display: block;
            width: 23%;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
      .right {
        margin-top: 5%;
        width: 50%;
        /* padding-top: 5%; */
        p {
          line-height: 26px;
          font-size: 14px;
        }
        .cards{
          margin: 3% 0 0 0;
        }
        .red {
          position: relative;
          img {
            display: block;
            width: 22%;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .faded{
          padding-top: 10%;
          margin-bottom: 0;
        }
      }
    }
    .bottom {
      padding-top: 8%;
      .left {
        width: 60%;
        h5 {
          font-size: 28px;
          line-height: 37px;
          width: 94%;
        }
        p {
          font-size: 14px;
          line-height: 26px;
          width: 96%;
        }
      }
      .right {
        height: 400px;
      }
    }
  }
`;

function About() {
  return (
    <Wrapper>
      <div className="about-inner">
        <div className="top">
          <div className="left">
            <h2>Our Programs</h2>
            <p className="p-top">
              Our programs are designed to be appealing to anybody seeking
              greater knowledge, understanding, and comfort with mental health
              as well as knowledge, understanding, and ideas aimed at supporting
              mental health in schools.
            </p>
            <div className="blue cards">
              <h5 className="blue-h5">Counsellor workshorps</h5>
              <p>
                The Jump Start School Counsellor Training and Support Programme
                provides relevant monthly training during the school term. These
                trainings provide ongoing professional development as well as a
                much needed professional debrief session for the counsellors. We
                are proud to provide workshops with professionals from around
                the globe, in a broad range of relevant topics such as trauma
                counselling, occupational therapy and careers support
              </p>
            </div>
            <div className="yellow cards">
              <h5 className="yellow-h5">Parent workshorps</h5>
              <p>
                In order to inform and empower parents we run regular parents
                workshops. These are a fantastic opportunity for parents to come
                together to share experiences with professional trainers, and
                walk away with hands on tools and strategies to help support
                them on their parenting journey
              </p>
              <img
                src="../images/white.png"
                className="yellow-img"
                alt="image"
              />
            </div>
          </div>
          <div className="right">
            <div className="red cards">
              <img src="../images/about-top.png" alt="image" />
              <h5 className="red-h5">For Kids</h5>
              <p className="red-p">
                Our 6- session in-school programme for 9-18 year olds is a fun,
                engaging yet deeply transformative course. It includes training
                for teachers, as well as a parents education and feedback
                session. This whole-school approach enables a common and
                accessible language around mental health for all in the school
                community. Contact us if you would like your school to become a
                Jump Start School today!
              </p>
            </div>
            <div className="tucos cards">
              <h5>
                In-school counselling <br /> services
              </h5>
              <p>
                For schools which do not have a regular counsellor, we offer
                counselling services within your school based on your needs
                within your student, staff or parent community.
              </p>
            </div>
            <div className="faded cards">
              <h5>Rural program</h5>
              <p>
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
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h5>
              Jump Start is a Zimbabwean- desianed programme delivering
              emotional intelligence and mental neatn resilience training,
              resources and support to children. parents and educators.
            </h5>
            <p>
              Jump Start was founded in 2022 as a result of the clear needs of
              the community for mental health support, exacerbated by COVID19.
              Parents, teachers and students were struggling with resuming to
              'normality', which is why we chose a community approach to provide
              awareness and tools for collective healing.
            </p>
          </div>

          <div className="right">
            <div className="img">
              <img src="../images/about-bottom.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
