import { Breadcrumb, Typography } from "antd";
import React, { useEffect, useState } from "react";
const { Link } = Typography;
interface IProp {
  breadItems: string[];
}
export function CustomBreadcrumb({ breadItems }: IProp) {
  const [originUrl, setOriginUrl] = useState<string>("");

  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {breadItems?.map((item: string, index: number) => {
        return (
          <Breadcrumb.Item key={index}>
            {index === 0 ? <Link href={originUrl}>{item}</Link> : item}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
