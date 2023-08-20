import { Modal, Button, Form, Row, Col, FormInstance } from "antd";
import React from "react";
import styles from "./modal.module.scss";

interface IProp {
  isOpen: boolean;
  title: string;
  content: React.ReactElement;
  actionOnClickOk?: () => void;
  actionOnClickCancel: () => void;
  textOk?: string;
  textCancel?: string;
  isDisableOk?: boolean;
  customForm?: FormInstance<any>;
  initialValues?: any;
  customWidth?: number;
  isLoading?: boolean;
}

interface IPropButton {
  actionOnClickCancel: any;
  actionOnClickOk?: any;
  textCancel?: string;
  isDisableOk?: boolean;
  textOk?: string;
  isForm: boolean;
  isLoading?: boolean;
}

const ButtonRow = ({
  actionOnClickCancel,
  actionOnClickOk,
  textOk,
  textCancel,
  isDisableOk,
  isForm,
  isLoading = false,
}: IPropButton) => {
  return (
    <Row
      className={styles.footerModal}
      justify="end"
      align="bottom"
      gutter={12}
    >
      {isForm ? (
        <>
          <Col>
            <Form.Item>
              <Button
                className={styles.cancelBtn}
                onClick={() => actionOnClickCancel()}
              >
                {textCancel || "Back"}
              </Button>
            </Form.Item>
          </Col>
          {actionOnClickOk && (
            <Col>
              <Form.Item>
                <Button
                  className={styles.submitBtn}
                  htmlType="submit"
                  type="primary"
                  disabled={isDisableOk}
                  loading={isLoading}
                >
                  {textOk}
                </Button>
              </Form.Item>
            </Col>
          )}
        </>
      ) : (
        <>
          <Col>
            <Button
              className={styles.cancelBtn}
              onClick={() => actionOnClickCancel()}
            >
              {textCancel || "Back"}
            </Button>
          </Col>
          {actionOnClickOk && (
            <Col>
              <Button
                className={styles.submitBtn}
                htmlType="submit"
                type="primary"
                disabled={isDisableOk}
                onClick={() => actionOnClickOk()}
                loading={isLoading}
              >
                {textOk}
              </Button>
            </Col>
          )}
        </>
      )}
    </Row>
  );
};
export default function CustomModal({
  isOpen,
  title,
  content,
  actionOnClickOk,
  actionOnClickCancel,
  textOk,
  textCancel,
  isDisableOk,
  customForm,
  initialValues,
  customWidth,
  isLoading,
}: IProp) {
  return isOpen ? (
    <Modal
      open={isOpen}
      title={title}
      className={styles.customModal}
      style={{ top: 20 }}
      onCancel={actionOnClickCancel}
      footer={null}
      width={customWidth && customWidth}
    >
      {customForm ? (
        <Form
          onFinish={actionOnClickOk}
          form={customForm}
          layout="vertical"
          initialValues={initialValues}
        >
          {content}
          <ButtonRow
            actionOnClickCancel={actionOnClickCancel}
            actionOnClickOk={actionOnClickOk}
            textCancel={textCancel}
            isDisableOk={isDisableOk}
            textOk={textOk}
            isForm={true}
            isLoading={isLoading}
          />
        </Form>
      ) : (
        <>
          {content}
          <ButtonRow
            actionOnClickCancel={actionOnClickCancel}
            actionOnClickOk={actionOnClickOk}
            textCancel={textCancel}
            isDisableOk={isDisableOk}
            textOk={textOk}
            isForm={false}
            isLoading={isLoading}
          />
        </>
      )}
    </Modal>
  ) : (
    <></>
  );
}
