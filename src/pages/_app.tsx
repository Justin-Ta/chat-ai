import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "antd";
const { Content, Footer } = Layout;
import { HomeOutlined } from "@ant-design/icons";
export default function App({ Component, pageProps }: AppProps) {
  const items = [{ key: "1", icon: <HomeOutlined />, label: "Home" }];

  return (
    <div>
      <Head>
        <title>BnK AI Lab</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        {/* <Header
          style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Header> */}
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <Component {...pageProps} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Product of AI Lab- BnK Solution
        </Footer>
      </Layout>
    </div>
  );
}
