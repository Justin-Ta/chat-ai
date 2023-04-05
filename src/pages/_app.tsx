import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout, Typography } from "antd";
const { Content, Footer } = Layout;
export default function App({ Component, pageProps }: AppProps) {
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
        <Content className="site-layout">
          <Component {...pageProps} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Product of AI Lab-{" "}
          <Typography.Link target="_blank" href={"https://bnksolution.com/"}>
            BnK Solution
          </Typography.Link>
        </Footer>
      </Layout>
    </div>
  );
}
