import BubbleChat from "@/components/bubble-chat";
import { CustomBreadcrumb } from "@/components/layout/custom-breadcrumb";
import { LoadingBubble } from "@/components/bubble-chat/loading";
import { IMessageProp, RESPONSE_TYPE } from "@/constant/common";
import { getCurrentDate } from "@/util/common";
import { Row, Typography, Input, Col } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./channel.module.scss";
import { SendOutlined } from "@ant-design/icons";
import Content from "@/components/layout/content";
const { Title } = Typography;
const { Search } = Input;

export default function Channel() {
  const router = useRouter();
  const { slug } = router.query;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading] = useState(true);
  const onChange = (value: any) => setSearchTerm(value.target.value);
  const [originUrl, setOriginUrl] = useState<string>("");
  const [messageData, setMessageData] = useState<IMessageProp[]>([
    {
      data: "Hello, May I help you?",
      type: RESPONSE_TYPE.ANSWER,
      createdTime: getCurrentDate(),
    },
  ]);

  const onSearch = (value: string) => {
    setSearchTerm(""),
      setMessageData([
        ...messageData,
        {
          data: value,
          type: RESPONSE_TYPE.QUESTION,
          createdTime: getCurrentDate(),
        },
      ]);
  };

  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);

  const view = () => {
    return (
      <>
        <Row align="middle">
          <Col>
            <img
              className={styles.chatBotIcon}
              src={`${originUrl}/favicon.png`}
            />
            <Title level={4}>BnK AI</Title>
          </Col>
        </Row>

        <div className={styles.contentChat}>
          {messageData?.map((item: IMessageProp, index: number) => {
            return <BubbleChat dataChat={item} key={index} />;
          })}
          {isLoading && <LoadingBubble />}
        </div>
        <Search
          value={searchTerm}
          className={styles.inputChat}
          placeholder="Aa"
          onChange={(e) => onChange(e)}
          onSearch={onSearch}
          autoComplete="none"
          enterButton={<SendOutlined />}
        />
      </>
    );
  };
  return (
    <>
      <CustomBreadcrumb breadItems={["BnK AI", `${slug}`]} />
      <Content view={view()} />
    </>
  );
}
