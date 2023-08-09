import { Button } from 'antd';
import ModalCustom from '../../../../components/ModalCustom/ModalCustom';
import { FooterStyle } from './style';

interface IProps {
  isOpen: boolean;
  setIsOpen: (_is: boolean) => void;
}
function ModalFilter({ isOpen, setIsOpen }: IProps) {
  return (
    <ModalCustom title='Filters' isOpen={isOpen} setIsOpen={setIsOpen} footer={<FilterFooter />}>
      <div style={{ height: 600 }}></div>
    </ModalCustom>
  );
}

export default ModalFilter;

const FilterFooter = () => {
  return (
    <FooterStyle>
      <Button type='text'>Clear all</Button>
      <Button type='default'>Show 672 places</Button>
    </FooterStyle>
  );
};
