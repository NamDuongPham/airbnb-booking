import { DatePicker, Space } from "antd";
import ModalContainer from "../../../../../components/ModalCustom/ModalContainer";
interface IProps {
  isOpen: boolean;
  setIsOpen: (_is: boolean) => void;
}

const { RangePicker } = DatePicker;
function ModalChangeDate({ isOpen, setIsOpen }: IProps) {
  return (
    <ModalContainer
      title="THAY ĐỔI THỜI GIAN"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      footer={<></>}
    >
      <div className="">
        <Space direction="vertical" size={40}>
          <RangePicker />
        </Space>
        <div className="flex items-center justify-center mt-5">
          <button className="bg-black text-white">Lưu</button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalChangeDate;
