import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

import HeaderImage from "assets/images/events/header.jpg";
import DarkImage from "assets/images/events/dark.jpg";

const card_data = [
  [
    {
      image: require("assets/images/events/1.png"),
      text: "“Ce soir, Chéri!”",
      date: "17 Apr 2018"
    },
    {
      image: require("assets/images/events/2.jpg"),
      text: "Ventes de Noël 2016",
      date: "25 Oct 2016"
    },
    {
      image: require("assets/images/events/3.jpg"),
      text: "Dynamite Night (Cercle Dynamique)",
      date: "13 Nov 2015"
    },
    {
      image: require("assets/images/events/4.jpg"),
      text: "Ventes de Noël  2014",
      date: "25 Oct 2014"
    },
    {
      image: require("assets/images/events/5.jpg"),
      text: "Brunch caritatif à Paris",
      date: "9 Jan 2013"
    }
  ],
  [
    {
      image: require("assets/images/events/6.png"),
      text: "Christmas sale 2017",
      date: "28 Aug 2017"
    },
    {
      image: require("assets/images/events/7.png"),
      text: "Silva Golf Charity Trophy – Royal Golf Club des Fagnes",
      date: "2 Oct 2016"
    },
    {
      image: require("assets/images/events/8.jpg"),
      text: "Ventes de Noël  2015",
      date: "26 Oct 2015"
    },
    {
      image: require("assets/images/events/9.jpg"),
      text: "Ventes de Noël  2013",
      date: "30 Oct 2013"
    },
    {
      image: require("assets/images/events/10.jpg"),
      text: "Ventes de Noël  2012",
      date: "13 Dec 2012"
    }
  ],
  [
    {
      image: require("assets/images/events/11.png"),
      text: "Silva Golf Charity Trophy – Royal Golf Club des Fagnes",
      date: "20 Aug 2017"
    },
    {
      image: require("assets/images/events/12.jpg"),
      text: "30 ans du CAVE S.A.",
      date: "4 Dec 2015"
    },
    {
      image: require("assets/images/events/13.png"),
      text: "Vente & Cocktail Caritatif pour le Népal",
      date: "28 May 2015"
    },
    {
      image: require("assets/images/events/14.jpg"),
      text: "Messe de proclamation",
      date: "31 Jul 2013"
    },
    {
      image: require("assets/images/events/15.jpg"),
      text: "Vente de Noël 2011",
      date: "26 Nov 2011"
    }
  ]
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
const FirstSection = styled.div`
  & {
    background-color: #fce1bc;
    padding: 0 6%;
  }
  & .container {
    padding: 50px 0;
    display: flex;
    align-items: center;
  }
  & img {
    width: 100%;
    padding-right: 20px;
    max-height: 346.4px;
  }
  & h2 {
    margin: 0px;
    font-size: 28px;
    font-weight: 300;
    padding-bottom: 10px;
    color: #333;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
  }
  & p {
    margin: 0px;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
    color: #333;
    line-height: 1.7em;
    font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif;
  }
  @media (max-width: 981px) {
    & p {
      font-size: 13px;
    }
  }
  & .column {
    width: 45%;
    padding-left: 20px;
  }
  & .button {
    color: #c01700;
    margin-top: 20px;
    text-shadow: none;
    text-decoration: none;
    position: relative;
    padding: 10px 20px;
    border: 2px solid;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.7em !important;
    transition: all 0.2s;
    border-radius: 3px;
    display: block;
    width: fit-content;
  }
  & .button:after {
    content: "5";
    font-family: ETmodules !important;
    font-size: 32px;
    margin-left: -1em;
    opacity: 0;
    transition: all 0.2s;
    position: absolute;
  }
  & .button:hover:after {
    margin-left: -0.2em;
    opacity: 1;
  }
  & .button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border: 2px solid transparent;
    padding: 10px 30px 10px 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & p,
    & .button,
    & img {
      display: none;
    }
    & h2 {
      font-size: 20px;
      text-align: center;
    }
    & .column {
      width: 100%;
      padding-left: 0px;
    }
    & .container {
      display: block;
    }
  }
`;

const CardSection = styled.div`
  & {
    padding: 4% 0;
    background-color: #fef1df;
  }
  & .container {
    padding: 2% 0;
    width: 89%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  & .column {
    width: 29.667%;
    margin-right: 5.5%;
  }
  & .column:nth-child(3) {
    margin-right: 0px;
  }
  @media (max-width: 981px) {
    & .column {
      width: 100%;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    & .container {
      display: block;
    }
  }
  & .card {
    margin-bottom: 18.539%;
    border: 1px solid #d8d8d8;
    background-color: #fff;
    word-wrap: break-word;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  & .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  & .card:hover {
    cursor: pointer;
  }
  & .card:hover span {
    z-index: 3;
  }
  & .card span {
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    width: 100%;
    height: 180px;
    border: 1px solid #e5e5e5;
    transition: all 0.3s;
    color: #b72411 !important;
    top: 0;
    left: 0;
    z-index: -1;
  }
  & .card span:hover:before {
    top: 50%;
  }
  & .card span:before {
    position: absolute;
    top: 55%;
    left: 50%;
    margin: -16px 0 0 -16px;
    font-size: 32px;
    content: "";
    font-family: ETmodules !important;
    transition: all 0.4s;
  }
  & .card .content {
    padding: 19px;
  }
  & .card h2 {
    margin: 0px;
    min-height: 80px;
    line-height: 1.5em;
    font-size: 20px;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    padding-bottom: 10px;
    color: #333;
    font-weight: 500;
  }
  & .card p {
    color: #666;
    margin-bottom: 6px;
    font-size: 14px;
  }
  & .card .read-more {
    color: #c01700;
    font-weight: 500;
  }
`;

class EventPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FirstSection>
          <Container>
            <div className="column fadeLeft">
              <img src={DarkImage} />
            </div>
            <div className="column">
              <h2>SAVE THE DATE : CHRISTMAS SALES 2018</h2>
              <p>
                Brussels :
                <br />
                Friday 16, Saturday 17 and Sunday 18 November 2018
                <br />
                la Ferme Rose, avenue De Fré 44, Uccle
              </p>
              <p>
                Epalinges (Lausanne) :
                <br />
                Friday 30 November, Saturday 1, Sunday 2 and Monday 3 December
                2018
              </p>
              <p>More information and other sales will be posted soon</p>
              <a className="button">En savoir plus</a>
            </div>
          </Container>
        </FirstSection>
        <CardSection>
          <div className="container">
            {card_data.map((column, i) => (
              <div key={i} className="column">
                {column.map((card, i) => (
                  <div className="card" key={i}>
                    <img src={card.image} />
                    <span></span>
                    <div className="content">
                      <h2>{card.text}</h2>
                      <p>{card.date}</p>
                      <p className="read-more">read more</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardSection>
      </React.Fragment>
    );
  }
}

export default EventPage;
