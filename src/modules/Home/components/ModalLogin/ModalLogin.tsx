
import ModalCustom from '../../../../components/ModalCustom/ModalCustom';
import Login from '../../../Login/Login';
interface IProps {
  isOpen: boolean;
  setIsOpen: (_is: boolean) => void;
}
function ModalLogin({ isOpen, setIsOpen }: IProps) {
  return (
    <ModalCustom title='Log in or sign up' isOpen={isOpen} setIsOpen={setIsOpen} footer={<></>}>
      <>
        <Login setIsOpen={setIsOpen} />
        <div style={{ height: 600 }}></div>
      </>
    </ModalCustom>
  );
}

export default ModalLogin;
