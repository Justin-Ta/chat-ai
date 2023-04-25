import { Avatar, Col, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./bubble-chat.module.scss";

export function LoadingTyping() {
  return <div className={styles.typedOut}>Waiting for response...</div>;
}

export function LoadingBubble() {
  const [originUrl, setOriginUrl] = useState<string>("");

  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);

  return (
    <Row className={styles.bubbleWrapper} justify="start">
      <Col span={13}>
        <Row>
          <Col span={2} className={styles.avatarBubbleChat}>
            <Avatar src={`${originUrl}/favicon.png`} />
          </Col>
          <Col span={22}>
            <Tooltip title="Waiting for response" placement="rightTop">
              <div className={`${styles.answerBubble} ${styles.bubbleChat}`}>
                <div className={styles.waveTextAnimated}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
            </Tooltip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
