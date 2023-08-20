import { Col, message, Row, Typography } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DeleteOutlined, InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/lib/upload/Dragger";
import type { UploadProps } from "antd/es/upload";
import CustomModal from "../modal/custom-modal";
const { Text } = Typography;

interface IProps {
  isShowModal: boolean;
  isMultiple?: boolean;
  onCancel: Function;
  appointmentId?: number;
}

enum DASHBOARD {
  FILE = "file",
  PATIENT_ID = "pid",
  SERVICE_TYPE = "service",
  SERVICE_ID = "service-id",
}

export enum FILE_TYPE {
  PDF = "application/pdf",
  IMA = "image/*",
  FILE = "file",
}

export enum UPLOAD_STATUS {
  DONE = "done",
  ERROR = "error",
}

enum METHOD {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

enum COOKIE {
  TOKEN = "",
}

export default function FileUploadPage({
  isShowModal,
  isMultiple = false,
  onCancel,
  appointmentId,
}: IProps) {
  const router = useRouter();
  const slug = router.asPath.replace(/^\D+/g, "");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any[]>([]);
  const [removeRecord, setRemoveRecord] = useState<string[]>([]);

  const handleSubmission = () => {
    setIsLoading(true);
    const formData = new FormData();
    selectedFile.forEach((item) =>
      formData.append(DASHBOARD.FILE, item.originFileObj)
    );
    formData.append(DASHBOARD.PATIENT_ID, slug);
    formData.append(DASHBOARD.SERVICE_TYPE, "0"); //1: Appointment
    formData.append(
      DASHBOARD.SERVICE_ID,
      appointmentId ? appointmentId?.toString() : ""
    );

    const request = new XMLHttpRequest();
    request.open(
      METHOD.POST,
      `http://noibo.vinfamedi.vn:5000/api/v1/cmdata/upload_file?${DASHBOARD.PATIENT_ID}=${slug}`
    );
    request.setRequestHeader("access-token", COOKIE.TOKEN || "");
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status == 200) {
          message.success("Success");
          onCancel();
        } else {
          message.error(this.statusText);
        }
        setIsLoading(false);
      }
    };
    request.send(formData);
  };
  const props: UploadProps = {
    name: FILE_TYPE.FILE,
    multiple: isMultiple,
    showUploadList: true,
    accept: `${FILE_TYPE.PDF}, ${FILE_TYPE.IMA}`,
    onChange(info) {
      if (info.file.status === UPLOAD_STATUS.DONE) {
        setSelectedFile(
          info.fileList.filter((item: any) => !removeRecord.includes(item.uid))
        );

        message.success(`${info.file.name}  uploaded`);
      } else if (info.file.status === UPLOAD_STATUS.ERROR) {
        message.error(`${info.file.name} upload failed`);
      }
    },
  };

  const ModalUpload = () => {
    return (
      <>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Drag or Drop file to upload</p>
        </Dragger>
        {selectedFile ? (
          <div>
            {selectedFile.map((item, index) => {
              return (
                <Row
                  justify="space-between"
                  align="middle"
                  className="mt-3"
                  key={index}
                >
                  <Col span={16}>
                    <Text ellipsis={true}>
                      <i>{index + 1}/</i> <b>{item?.name}</b>
                    </Text>
                  </Col>
                  <Col span={2} className="text-center">
                    <DeleteOutlined
                      style={{ color: "red" }}
                      onClick={() => {
                        setRemoveRecord([...removeRecord, item.uid]);
                        setSelectedFile(
                          selectedFile.filter(
                            (itemData) => itemData.uid !== item.uid
                          )
                        );
                      }}
                      title={"Xoá"}
                    />
                  </Col>
                </Row>
              );
            })}
          </div>
        ) : null}
      </>
    );
  };

  return (
    <CustomModal
      isOpen={isShowModal}
      title={"Upload file"}
      content={<ModalUpload />}
      actionOnClickOk={() => handleSubmission()}
      actionOnClickCancel={() => onCancel()}
      textOk={"Upload"}
      isLoading={isLoading}
    />
  );
}
