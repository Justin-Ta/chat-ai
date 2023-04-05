import { Avatar, Col, Row, Tooltip } from "antd";
import React from "react";

export function LoadingTyping() {
  return <div className="typed-out">Waiting for response...</div>;
}

export function LoadingBubble() {
  return (
    <Row className="bubble-wrapper" justify="start">
      <Col span={13}>
        <Row>
          <Col span={2} className="avatar-bubble-chat">
            <Avatar src={<img src="./favicon.png" alt="avatar" />} />
          </Col>
          <Col span={22}>
            <Tooltip title="Waiting for response" placement="rightTop">
              <div className="answer-bubble bubble-chat">
                <div className="waveTextAnimated">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </Tooltip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
