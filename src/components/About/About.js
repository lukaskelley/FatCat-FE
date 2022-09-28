import React from "react";
import { Col, Row } from "antd";
import 'antd/dist/antd.min.css';
import "./About.css";
import "./animation.css";

import { DownOutlined } from "@ant-design/icons";
import Logo from "../../assets/main-heading.png"

export const About = () => {
  return (
    <section id="about">
      <Row>
        <Col lg={3}></Col>
        <Col lg={18}>
          <img src={Logo} alt="" className="logojpg" />
          <Row style={{marginTop:"7%"}}>
            <Col lg={10}  xs={6} />
            <Col lg={4}  xs={10} >
              <div className="learnMoreTitleIconContain">
                <h1 className="learnMoreTitle">LEARN MORE</h1>
              </div>
              <div className="learnMoreTitleIconContain">
                <DownOutlined className="learnMoreTitleIcon"/>
              </div>
            </Col>
            <Col lg={10} xs={6} />
          </Row>
        </Col>
        <Col lg={3}></Col>
      </Row>
      
      <Row style={{marginTop:"10%"}}>
        <Col lg={7}></Col>
        <Col lg={10}>
          <h1 className="title">WHO ARE THE FAT CATS?</h1>
          <p className="content"><span style={{fontWeight:"700"}}>The Fat Cats </span>is an exclusive members-only club made up of Fat Cats collection owners comprising a series of four NFT drops. Club members will have access to <span style={{fontWeight:"700"}}>The Catalyst</span> which is the first gallery on Flare. Members get early and exclusive access to artwork released by established artists, and the first exhibition will include a historical portrait of Malcolm X - the first ever human rights NFT drop. Conversations are already underway for the second exhibition from a well known music figure.
          <br/>
          <br/>
          The first drop in the series was a huge success selling out instantly with many of the Flare Networks team having changed their PFP on Twitter to their Fat Cat NFTs. This includes the CTO of Flare and the CEO Hugo Philion who bought his on Sparkles for over $17,000. The drop also led to the biggest ever day of sales on Sparkles, with the top three most expensive NFTs ever sold on the marketplace still being Fat Cats.
        </p>
        </Col>
        <Col lg={7}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={7}></Col>
        <Col lg={10}>
          <h1 className="title">WHY JOIN THE FAT CATS?</h1>
          <p className="content">You'll be at the forefront of a new ecosystem built on the Flare blockchain. Our mission is to give <span style={{fontWeight:"700"}}>The Fat Cats</span> members early and exclusive access to artwork by established artists through The Catalyst. The Catalyst is the first digital gallery space built on Flare, acting as a launchpad for established artists entering the world of NFTs.
          <br/>
          <br/>
          Holders also receive a number of membership benefits including discounts, White Lists and direct interactions with the artists. Members will also have the opportunity to purchase fractionalised high-end pieces of artwork with discussions ongoing linked to an established art gallery in Mayfair, London. And if that didn't tickle your tummy, members will receive 10% of all profits made by The Catalyst through contests, raffles and giveaways, because we genuinely want The Fat Cats to be a community-driven and member-centric project.
        </p>
        </Col>
        <Col lg={7}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={7}></Col>
        <Col lg={10}>
          <h1 className="title">HOW DO I BECOME A MEMBER?</h1>
          <p className="content">The Fat Cats club has four tiers - Gold, Silver, Bronze and Standard. To qualify for a given membership you must own one of each collection, up to that membership tier. For example, to qualify for Gold membership you would need one Fat Cat, one Fat Leopard, one Fat Tiger and one Fat Kitten. In contrast, to qualify for Standard membership you only need one Fat Kitten.
          <br/>
          <br/>
          By taking part in the initial drops, you will automatically reserve your membership spot when you mint your Fat Cat, as you will be airdropped one NFT in each of the subsequent drops. This means that if you mint a Fat Cat in the genesis drop, you will be airdropped one Fat Leopard, one Fat Tiger and one Fat Kitten, thereby qualifying you as a Gold member.
        </p>
        </Col>
        <Col lg={7}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={7}></Col>
        <Col lg={10}>
          <h1 className="title">MEMBERSHIP PRICING</h1>
          <p className="content">The mint price for the Fat Leopards upcoming drop on the 27th April at 4pm UTC will be 150 USD. Whitelisted members can mint 2 hours prior (between 2pm - 4pm UTC). This price will stay the same for each subsequent drop in the series. Due to price volatility, we will confirm the exact SGB price one day before mint.
          <br/>
          <br/>
          The Standard membership price (i.e. the price of a Fat Kitten) - which gives you access to The Catalyst - has been set at 150 USD. This is in line with the quality of the project, the collections that members will have access to and the rewards received (such as members receiving 10% of profits from The Catalyst).
          <br/>
          <br/>
          To reduce the barriers to entry in the project and to reward our earliest supporters, we decided not to set the price higher in USD for the upper tiers. This means that the earlier you enter, the more you are rewarded, as you will be paying the same price for a higher and more sought after tier (given you receive the next drops for free if you hold). The true value is already beginning to be reflected in the floor price of the Fat Cats which is 5x mint price and so early on. The aspect we can’t control is the supply, however the demand is growing exponentially which is why we’ve expanded the Whitelist and will continue to focus on targeted whitelists in the upcoming drops.
        </p>
        </Col>
        <Col lg={7}></Col>
      </Row>
      
    </section>
  );
};
