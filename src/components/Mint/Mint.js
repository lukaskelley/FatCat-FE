import React, {useState} from "react";
import { Col, Row, Button } from "antd";
import "./Mint.css";
import 'antd/dist/antd.min.css';

export const Mint = () => {
  const [isConnected, setIsConnected] = useState(false)
  
  const connect = () => {
    setIsConnected(true)
  }

  return (
    <section id="Contact">
      <Row>
        <Col lg={6} md={6} xs={2}></Col>
        <Col lg={12} md={12} xs={20} className="mintContainer">
          {
            !isConnected ? (
              <>
                <h1 className="mintTitle">The Fat Tigers</h1>
                <h1 className="connectTitle">Connect your wallet</h1>
                <h1 className="ratioTitle">- / -</h1>
                <a  className="connectTitle" href="https://songbird-explorer.flare.network/address/0xFdD87A263ba929E14Dd0A2D879D9C66d5c8fF3ae/transactions" target="_blank" rel="noreferrer"><div><p class="Home_contractAddress__ukfNl">0xFdD87A263ba929E14Dd0A2D879D9C66d5c8fF3ae</p></div></a>
                <div className="connectBtnContainer">
                  <Button className="connectBtn" onClick={connect}>CONNECT</Button>
                </div>
              </> 
            ) : (
                <>
                  <h1 className="mintTitle">The Fat Tigers</h1>
                  <h1 className="connectTitle">Public mint = 7500.0 SGB</h1>
                  <h1 className="connectTitle">Whitelist mint = 6750.0 SGB</h1>
                  <h1 className="connectTitle">Excluding gas fees.</h1>
                  <h1 className="ratioTitle">5611 / 6000</h1>
                  <a  className="connectTitle" href="https://songbird-explorer.flare.network/address/0xFdD87A263ba929E14Dd0A2D879D9C66d5c8fF3ae/transactions" target="_blank" rel="noreferrer"><div><p class="Home_contractAddress__ukfNl">0xFdD87A263ba929E14Dd0A2D879D9C66d5c8fF3ae</p></div></a>
                  <div className="functionContainer">
                    <Button className="connectBtn" onClick={connect}>BUY</Button>
                  </div>
                  <div className="functionContainer">
                    <Button className="connectBtn" onClick={connect} disabled>BUY - WL (PAUSED)</Button>
                  </div>
                </>
            )
          }
         
        
        </Col>
        <Col lg={3} xs={2}></Col>
      </Row>
    </section>
  );
};
