import Content from "@/components/layout/content";
import { CustomBreadcrumb } from "@/components/layout/custom-breadcrumb";
import FileUploadPage from "@/components/modal";
import { Button } from "antd";
import React, { useState } from "react";

export default function UploadFile() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = (isShow: boolean) => {
    setIsShowModal(isShow);
  };
  const view = () => {
    return (
      <div>
        <Button type="primary" onClick={() => handleShowModal(true)}>
          Upload
        </Button>
        <FileUploadPage
          isShowModal={isShowModal}
          onCancel={() => handleShowModal(false)}
        />
      </div>
    );
  };
  return (
    <>
      <CustomBreadcrumb breadItems={["Upload File"]} />
      <Content view={view()} />
    </>
  );
}
