import ModalCustom from "../../../../components/ModalCustom/ModalCustom";
import Register from "../../../Register/Register";

interface IProps {
  isOpen: boolean;
  setIsOpen: (_is: boolean) => void;
}
function ModalRegister({ isOpen, setIsOpen }: IProps) {
  return (
    <ModalCustom
      title="Log in or sign up"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      footer={<></>}
    >
      <>
        <Register setIsOpen={setIsOpen} />
        <div style={{ height: 600 }}></div>
      </>
    </ModalCustom>
  );
}

export default ModalRegister;
