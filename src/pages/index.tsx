import { CustomBreadcrumb } from "@/components/layout/custom-breadcrumb";
import { Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { IMessageProp, RESPONSE_TYPE } from "@/constant/common";
import BubbleChat from "@/components/bubble-chat";
import { getCurrentDate } from "@/util/common";
const { Search } = Input;
const { Title } = Typography;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const onChange = (value: any) => setSearchTerm(value.target.value);
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

  return (
    <>
      <CustomBreadcrumb breadItems={["BnK AI"]} />
      <div className="site-layout-content" style={{ background: "white" }}>
        <Row align="middle">
          <img className="chat-bot-icon" src="./favicon.png" />
          <Title level={4}>BnK AI</Title>
        </Row>
        <div className="content-chat">
          {messageData?.map((item: IMessageProp, index: number) => {
            return <BubbleChat dataChat={item} key={index} />;
          })}
        </div>
        <Search
          value={searchTerm}
          className="input-chat"
          placeholder="Aa"
          onChange={(e) => onChange(e)}
          onSearch={onSearch}
          enterButton={<SendOutlined />}
        />
      </div>
    </>
  );
}
