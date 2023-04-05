import { IMessageProp, RESPONSE_TYPE } from "@/constant/common";
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

interface IProp {
  dataChat: IMessageProp;
}
export default function BubbleChat({ dataChat }: IProp) {
  return (
    <Row
      className="bubble-wrapper"
      justify={dataChat.type === RESPONSE_TYPE.ANSWER ? "start" : "end"}
    >
      <Col span={13}>
        <Row>
          {dataChat.type === RESPONSE_TYPE.ANSWER && (
            <Col span={2} className="avatar-bubble-chat">
              <Avatar src={<img src="./favicon.png" alt="avatar" />} />
            </Col>
          )}
          <Col span={22}>
            <div
              className={`${
                dataChat.type === RESPONSE_TYPE.ANSWER
                  ? "answer-bubble"
                  : "question-bubble"
              } bubble-chat`}
            >
              {dataChat.data}
            </div>
          </Col>
          {dataChat.type === RESPONSE_TYPE.QUESTION && (
            <Col span={2} className="avatar-bubble-chat">
              <div className="avatar-right">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </div>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}
