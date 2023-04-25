import { CustomBreadcrumb } from "@/components/layout/custom-breadcrumb";
import { Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import Content from "@/components/layout/content";
import styles from "../pages/channel/channel.module.scss";
import { useRouter } from "next/router";
import { ROUTE } from "@/constant/common";
const { Title } = Typography;
const { Search } = Input;

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const onChange = (value: any) => setSearchTerm(value.target.value);

  const onSearch = (value: string) => {
    router.push(ROUTE.CHANNEL + "/" + value);
  };

  return (
    <>
      <CustomBreadcrumb breadItems={["BnK AI"]} />
      <Row justify="center" align="middle">
        <Col span={10} className={styles.inputChannelWrapper}>
          <Row align="middle">
            <img className={styles.chatBotIcon} src="./favicon.png" />
            <Title level={4}>Welcome to BnK AI</Title>
          </Row>
          <Search
            value={searchTerm}
            className={styles.inputChat}
            placeholder="Input your room name..."
            onChange={(e) => onChange(e)}
            onSearch={onSearch}
            autoComplete="none"
            enterButton={<SendOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}
