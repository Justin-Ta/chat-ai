import { Breadcrumb } from "antd";
import React from "react";

interface IProp {
  breadItems: string[];
}
export function CustomBreadcrumb({ breadItems }: IProp) {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        {breadItems?.map((item: string, index: number) => {
          return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    </>
  );
}
