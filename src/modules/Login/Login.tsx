import { Button, Checkbox, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../constants/site-map";
import { setUser } from "../../redux/slice/userSlice";
import { useLoginMutation } from "../../services/authService";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import ModalRegister from "../Home/components/ModalRegister/ModalRegister";
interface IProps {
  setIsOpen?: (open: boolean) => void;
}
function Login(props: IProps) {
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [triggerLogin, { data, error }] = useLoginMutation();
  const openModalRegister = () => {
    setIsOpenModalRegister(true);
  };

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
      notification.success({
        message: "Login success!",
      });
      dispatch(setUser(data));
      navigate(SITE_MAP.HOME.url);
      props.setIsOpen && props.setIsOpen(false);
    }
  }, [data]);
  const login = (values: any) => {
    triggerLogin({ email: values.email, password: values.password });
  };

  return (
    <div>
      <FormContainer
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={login}
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
            Submit
          </Button>
        </Form.Item>
        <div className="flex  items-center max-w-full w-ful footer-login">
          hoặc
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <Button icon={<FcGoogle />}>Đăng nhập với Google</Button>
          <Button icon={<AiFillGithub />}>Đăng nhập với Github</Button>
          <div
            className="
      text-neutral-500 text-center mt-4 font-light"
          >
            <p>
              First time using Airbnb?
              <span
                className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
                onClick={openModalRegister}
              >
                {" "}
                Create an account
              </span>
            </p>
          </div>
          <ModalRegister
            isOpenRegister={isOpenModalRegister} // Step 4
            setIsOpenRegister={setIsOpenModalRegister} // Step 4
          />
        </div>
      </FormContainer>
    </div>
  );
}

export default Login;

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
