import { Modal } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

interface IProps {
  isOpen: boolean;
  title: string;
  children: React.ReactElement;
  footer?: React.ReactElement;
  setIsOpen: (open: boolean) => void;
}
function ModalCustom(props: IProps) {
  return (
    <ModalStyle
      title={props.title}
      footer={props.footer}
      open={props.isOpen}
      onCancel={() => props.setIsOpen(false)}>
      {props.children}
    </ModalStyle>
  );
}

export default ModalCustom;
const ModalStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 15px;
    padding: 0;
    overflow: hidden;
  }
  .ant-modal-header {
    padding: 15px 0;
    border-bottom: 1px solid #e1e1e1;
  }

  .ant-modal-body {
    height: 50vh;
    overflow-y: auto;
  }
  .ant-modal-close {
    left: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .ant-modal-close-x {
    padding: 6px;
  }
  .ant-modal-title {
    text-align: center;
  }
`;
