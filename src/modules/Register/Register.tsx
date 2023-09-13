import { Button, Checkbox, Form, Input, notification } from "antd";
import { useEffect } from "react";
import { styled } from "styled-components";
import { useRegisterMutation } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import { useCreateAccountMutation } from "../../services/accountService";
interface IProps {
  setIsOpen?: (open: boolean) => void;
}

function Register(props: IProps) {
  const dispatch = useDispatch();
  const [triggerRegister, { data, error }] = useRegisterMutation();
  useEffect(() => {
    if (error) {
      notification.error({
        //@ts-ignore
        message: error?.data,
      });
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      console.log(data);
      notification.success({
        message: "register success!",
      });
      dispatch(setUser(data));
      props.setIsOpen && props.setIsOpen(false);
    }
  }, [data]);
  const [createAccount] = useCreateAccountMutation();
  const register =async (values: any) => {
    if (values.email && values.password) {
      const result = await triggerRegister({ email: values.email, password: values.password }).unwrap()
      const userId = result.id; // Lấy userId từ kết quả trả về

      const newAccount = {
        userId: userId,
        name:"",
        address:"",
        phone:0
      };
      createAccount(newAccount)
      .unwrap()
      .then(() => {
        console.log("register success");
        
      })
    }
  };
  return (
    <div>
      <FormContainer
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={register}
        onFinishFailed={() => {}}
        autoComplete="off"
      >
        <Form.Item
          // label='Email'
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          // label='Password'
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </FormContainer>
    </div>
  );
}

export default Register;
const FormContainer = styled(Form)`
  padding: 10px 20px;
  .ant-row {
    max-width: 100%;
    display: block;
    .ant-col {
      max-width: 100%;
      position: relative;
      display: block;
      margin: 0;
      .ant-form-item-control-input {
        position: relative;
        display: block;
        .ant-btn {
          position: absolute;
          left: 0px;
          width: 100%;
          color: white;
          background-color: #de3151;
        }
        .ant-btn:hover {
          color: black;
          background-color: white;
          border: 1px solid #de3151;
        }
      }
    }
  }
  .footer-login::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
  .footer-login::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
`;
