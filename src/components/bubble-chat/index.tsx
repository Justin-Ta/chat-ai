import { IMessageProp, RESPONSE_TYPE } from "@/constant/common";
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import styles from "./bubble-chat.module.scss";
interface IProp {
  dataChat: IMessageProp;
}
export default function BubbleChat({ dataChat }: IProp) {
  const [originUrl, setOriginUrl] = useState<string>("");

  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);

  return (
    <Row
      className={styles.bubbleWrapper}
      justify={dataChat.type === RESPONSE_TYPE.ANSWER ? "start" : "end"}
    >
      <Col span={13}>
        <Row>
          {dataChat.type === RESPONSE_TYPE.ANSWER && (
            <Col span={2} className={styles.avatarBubbleChat}>
              <Avatar src={`${originUrl}/favicon.png`} />
            </Col>
          )}
          <Col span={22}>
            <div
              className={`${
                dataChat.type === RESPONSE_TYPE.ANSWER
                  ? styles.answerBubble
                  : styles.questionBubble
              } ${styles.bubbleChat}`}
            >
              {dataChat.data}
            </div>
          </Col>
          {dataChat.type === RESPONSE_TYPE.QUESTION && (
            <Col span={2} className={styles.avatarBubbleChat}>
              <div className={styles.avatarRight}>
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
