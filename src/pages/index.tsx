import { CustomBreadcrumb } from "@/components/layout/custom-breadcrumb";
import { Avatar, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Title } = Typography;

interface IMessageProp {
  data: string;
  type: number;
}
const enum RESPONSE_TYPE {
  QUESTION = 1,
  ANSWER = 2,
}
export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const onSearch = (value: string) => {
    setSearchTerm(""),
      setMessageData([
        ...messageData,
        {
          data: value,
          type: RESPONSE_TYPE.QUESTION,
        },
      ]);
  };
  const onChange = (value: any) => setSearchTerm(value.target.value);

  const [messageData, setMessageData] = useState<IMessageProp[]>([
    { data: "Hello, May I help you?", type: RESPONSE_TYPE.ANSWER },
  ]);
  return (
    <>
      <CustomBreadcrumb breadItems={["BnK AI"]} />
      <div className="site-layout-content" style={{ background: "white" }}>
        <Row align="middle">
          <img className="chat-bot-icon" src="./favicon.png" />
          <Title level={4}>BnK AI</Title>
        </Row>
        <div className="content-chat">
          {messageData?.map((item: IMessageProp) => {
            return (
              <Row
                className="bubble-wrapper"
                justify={item.type === RESPONSE_TYPE.ANSWER ? "start" : "end"}
              >
                <Col span={12}>
                  <Row justify="space-between" gutter={12}>
                    {item.type === RESPONSE_TYPE.ANSWER && (
                      <Col span={2}>
                        <Avatar
                          src={<img src="./favicon.png" alt="avatar" />}
                        />
                      </Col>
                    )}
                    <Col
                      span={22}
                      className={`${
                        item.type === RESPONSE_TYPE.ANSWER
                          ? "answer-bubble"
                          : "question-bubble"
                      } bubble-chat`}
                    >
                      {item.data}
                    </Col>
                    {item.type === RESPONSE_TYPE.QUESTION && (
                      <Col span={2}>
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
            );
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
