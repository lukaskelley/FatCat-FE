import React from "react";
import {Link} from "react-router-dom"
import { Col, Row } from "antd";
import 'antd/dist/antd.min.css';
import "./Faq.css";

export const Faq = () => {
  return (
    <section id="faq">
      <Row>
        <Col lg={6}></Col>
        <Col lg={12} style={{marginTop:"12%"}}>
          <h1 className="title">1. HOW MUCH DOES EACH NFT COST?</h1>
          <p className="content">The price for each drop is set at $150. The exact SGB price will be announced just before each mint.</p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">2. IS THERE A LIMIT ON HOW MANY NFTS AN INDIVIDUAL CAN MINT?</h1>
          <p className="content">
            We do not cap the total number of NFTs a single wallet can own. However, to encourage fair distribution, we have placed a limit of 10 NFTs per mint transaction.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">3. Are any NFTs withheld from sale?</h1>
          <p className="content">
          Yes, however, we will not be withholding more than 3% of the entire series for the team, marketing and giveaways.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">4. Is there a White List?</h1>
          <p className="content">
            Yes - we will be giving out limited White List spots through competitions, partnerships and giveaways. White List members will get early access to mint prior to public mint.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">5. Do these NFTs have utility?</h1>
          <p className="content">
            Yes. Holders will receive membership the The Fat Cats club which grants a number of unique benefits such as early and exclusive access to artwork by established artists through ‘The Catalyst’. The Catalyst is the first NFT gallery on Flare, acting as a launchpad for established artists entering the world of NFTs. See <Link to={"/membership"} className="membershipLink">membership benefits</Link> for more info.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">6. Do these NFTs have utility?</h1>
          <p className="content">
            Minting will be done via our <Link to={"/mint"} className="membershipLink">mint page</Link>
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">7. What will I need in order to mint?</h1>
          <p className="content">
            To mint, you will need to set up a MetaMask wallet or a Bifrost wallet. You will then need to connect the wallet to the Songbird network and ensure you have enough SGB to cover the cost of mint. Please make sure you are connected to the right network (Songbird Mainnet) and the correct address. See intructions further down this page for setup.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">8. What about gas fees?</h1>
          <p className="content">
            Gas fees on the Songbird Network are usually less than $0.10 per transaction.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">9. Will you offer refunds?</h1>
          <p className="content">
            No, since transactions executed on the blockchain are irreversible, we cannot offer refunds.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">How can I mint using my Metamask wallet?</h1>
          <p className="content">
            You need to add the Songbird network to your Metamask wallet first. If you have already done this, you can skip this step, if not, please follow the below:
            <br />
            <br />
            1. Login to your Metamask account
            <br />
            <br />
            2. Navigate to settings, Network, Add Network
            <br />
            <br />
            3. Enter the following:
            <br />
            <br />
            <span style={{ fontWeight: "700" }}>Network name:</span> Songbird
            <br />
            <span style={{ fontWeight: "700" }}>NEW RPC URL:</span>
            <br />
            https://songbird-api.flare.network/ext/C/rpc
            <br />
            <span style={{ fontWeight: "700" }}>Chain ID:</span> 19
            <br />
            <span style={{ fontWeight: "700" }}>Symbol:</span> SGB
            <br />
            <span style={{fontWeight:"700"}}>Block explorer URL:</span> https://songbird.explorer.flare.network
            <br />
            <br />
            4. Click “Save”
            <br />
            <br />
            5. The SGB token symbol should now be showing in your Metamask wallet. Once you have connected your Metamask wallet to the Songbird network, you need to have the correct amount of SGB in your Metamask wallet per NFT, plus a small amount of SGB to cover gas fees which should be less than 10 cents. SGB can be purchased at www.bitrue.com
            <br />
            <br />
            At this point you are ready to purchase. Click “buy” on the mint page and approve the transaction within your Metamask wallet.
          </p>
        </Col>
        
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">How can I mint using my Metamask mobile wallet app?</h1>
          <p className="content">
            Similar to the desktop Metamask, you need to add the Songbird network to your Metamask wallet first (see steps above). If you have already done this, you can proceed with the following steps:
            <br />
            <br />
            1. Open your Metamask mobile wallet
            <br />
            <br />
            2. Ensure you are on the Ethereum Main Network. Please note, this is a temporary measure and is only required to reach our minting page. This is because of a slight technical glitch within the Metamask mobile wallet
            <br />
            <br />
            3. Click the three blue horizontal lines in the top left
            <br />
            <br />
            4. Click on the browser
            <br />
            <br />
            5. Navigate to the <Link to={"/mint"} className="membershipLink">mint page</Link> when it's live
            <br />
            <br />
            6. Click on the word “Wallet” at the top of the page and change over to the Songbird Network
            <br />
            <br />
            7. Return to the browser
            <br />
            <br />
            8. Connect your wallet
            <br />
            <br />
            9. Click “buy” on the mint page and approve the transaction within your Metamask wallet.
          </p>
        </Col>
        
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">How can I mint using my Bifrost wallet?</h1>
          <p className="content">
            1. Open your Bifrost Wallet
            <br/>
            <br/>
            2. Click on the 4-panel square icon and navigate to the <Link to={"/mint"} className="membershipLink">mint page when</Link> it’s live.
            <br/>
            <br />
            3. Ensure you are on the Songbird network and not Ethereum Connect your wallet
            <br/>
            <br />
            4. Ensure you have the correct amount of SGB in your wallet per NFT that you plan to purchase, plus a small amount of SGB to cover gas fees which should be less than 10 cents
            <br/>
            <br />
            5. Click “buy” on the mint page and approve the transaction within your Bifrost Wallet.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">Ledger Hardware Wallet and Blind Signing - possible bugs</h1>
          <p className="content">
            Some users reported that it was not possible to mint due to a bug, where they were told to enable blind signing even though they already had. To make sure this doesn't happen to you, make sure your ledger firmware is updated and blind signing is definitely enabled. Inabling debug data after enabling blind signing is a potential workaround.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col lg={6}></Col>
        <Col lg={12}>
          <h1 className="title">Any other questions?</h1>
          <p className="content">
            If you have any other questions, feel free to message us on Discord or Twitter, where one of the team will be more than willing to help you.
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>
      
    </section>
  );
};
