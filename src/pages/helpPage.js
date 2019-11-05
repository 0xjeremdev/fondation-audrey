import React, { Component } from "react";
import styled from "styled-components";
import { Segment, Container } from "components";
import HeaderImage from "assets/images/help/header.jpg";

const card_data = [
  {
    image: require("assets/images/help/1.jpg"),
    header: "Donate",
    text: [
      "Donations are always welcome. We are part of the Transnational Giving Europe (TGE) network, which allows tax deductible cross border donations in most european countries.",
      "If you want to support a specific project please mention it in your donation or contact us directly"
    ],
    link: "Donate now"
  },
  {
    image: require("assets/images/help/2.jpg"),
    header: "Other ways to help",
    text: [
      "Talk about us, come to our sales, share our events on Facebook, organize your own events, think of us on special occasions, volunteer …"
    ],
    link: "Read more…"
  },
  {
    image: require("assets/images/help/3.jpg"),
    header: "Where does your money go",
    text: [
      "Your donations are used entirely to run our projects in Nepal.",
      "Being a small structure allows us to be flexible and to have minimal administrative costs in Europe which are totally covered by our family.",
      "All travel costs are beared personnally."
    ],
    link: "Read more…"
  }
];

const Header = styled.div`
  & {
    background: url(${HeaderImage});
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
  }
`;

const ContentContainer = styled(Container)`
  & h3 {
    padding-top: 20px;
    padding-bottom: 30px;
  }
  & .text-center {
    text-align: center;
  }
  &.card-container {
    display: flex;
    text-align: center;
  }
  & .card {
    width: 29.667%;
    margin-right: 5.5%;
    max-width: 550px;
    text-align: center;
  }
  & .card:last-child {
    margin-right: 0px;
  }
  & .card img {
    height: 240px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 30px;
  }
  & .card p {
    line-height: 1.7em;
  }
  @media (max-width: 980px) {
    & .card,
    & .card:last-child {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    & .card:last-child {
      margin-bottom: 0px;
    }
    &.card-container {
      display: block;
    }
  }
`;

class HelpPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Segment className="light-back">
          <ContentContainer className="inner-container">
            <h3 className="text-center">
              <em>
                « What you keep is lost forever, what you give is yours for good
                »
              </em>
            </h3>
          </ContentContainer>
          <ContentContainer className="inner-container card-container">
            {card_data.map((card, i) => (
              <div className="card" key={i}>
                <img src={card.image} />
                <h4>{card.header}</h4>
                <p>
                  {card.text.map((text, j) => (
                    <React.Fragment key={j}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <a>{card.link}</a>
              </div>
            ))}
          </ContentContainer>
        </Segment>
        <Segment className="dark-back">
          <Container></Container>
        </Segment>
        <Segment className="light-back">
          <ContentContainer className="inner-container">
            <h1>Help differently</h1>
            <p>&nbsp;</p>
            <h3>Talk about us</h3>
            <p>
              Talk about our projects to help us find new people who would like
              to support us.
            </p>
            <h3>Sales & Events</h3>
            <p>
              Come to our sales and events to support us. Invite your friends
              and family to participate. Share our events on social networks.
            </p>
            <h3>Organize your own events</h3>
            <p>
              Organize your own private sale, a sports event, a concert etc.
            </p>
            <p>Think of us for a birthday, special anniversary, wedding etc.</p>
            <h3>Volunteer</h3>
            <p>
              {"Contact us at "}
              <a>info@fondationaudreyjacobs.org</a>
            </p>
          </ContentContainer>
        </Segment>
        <Segment className="dark-back">
          <ContentContainer className="inner-container">
            <h1>Where does your money go ?</h1>
            <p />
            <p>
              Your donations are used entirely to run our projects in Nepal.
            </p>
            <p>
              Being a small structure allows us to be flexible and to have
              minimal administrative costs in Europe which are totally covered
              by our family.
            </p>
            <p>All travel costs are beared personnally.</p>
          </ContentContainer>
        </Segment>
      </React.Fragment>
    );
  }
}

export default HelpPage;
