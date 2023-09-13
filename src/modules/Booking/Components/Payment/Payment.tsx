import { Form, Input, Select } from "antd";
import { useState } from "react";
import { styled } from "styled-components";
function Payment() {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    sessionStorage.setItem("guestPayment", JSON.stringify(values));
  };
  type FieldType = {
    numberCard?: number;
    date?: number;
    CVV?: number;
  };
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <div>
      <div>
        <h1>Chọn cách thanh toán</h1>
      </div>
      <div>
        <div
          className="flex flex-row items-center justify-between text-lg mt-4 p-3"
          style={{ border: "1px solid black", borderRadius: "12px" }}
        >
          <div className="my-5">
            <p className="font-semibold">Trả sau bằng tiền mặt</p>
            <p className="mt-4">
              Thanh toán toàn bộ số tiền sau khi hoàn tất chuyến đi và
              thế là xong.
            </p>
          </div>
          <div className="w-[40px] h-[30px]">
            <input
              className="bg-white w-full h-full"
              style={{ borderWidth: "7px", borderColor: "black" }}
              type="radio"
              onChange={() => setPaymentMethod("cash")} // Khi chọn "Tiền mặt"
              checked={paymentMethod === "cash"}
            />
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-between text-lg mt-4 p-3"
          style={{ border: "1px solid black", borderRadius: "12px" }}
        >
          <div className="my-5">
            <p className="font-semibold">Trả sau bằng thẻ ngân hàng</p>
            <p className="mt-4">
              Thanh toán toàn bộ số tiền bằng thẻ ngân hàng.
            </p>
          </div>
          <div className="w-[40px] h-[30px]">
            <input
              className="bg-white w-full h-full"
              style={{ borderWidth: "7px", borderColor: "black" }}
              type="radio"
              onChange={() => setPaymentMethod("bank")} // Khi chọn "Thẻ ngân hàng"
              checked={paymentMethod === "bank"}
            />
          </div>
        </div>
        {/* da chon vào mục thẻ ngân hàng hay chưa */}
        {paymentMethod === "bank" && (
          <div className="mt-4">
            <h2 className="mb-4">Chọn Ngân hàng hoặc thẻ visa</h2>
            <Form.Item>
              <Select placeholder="Thẻ tín dụng hoặc thẻ ghi nợ">
                <Select.Option value="TPBANK">TP Bank</Select.Option>
                <Select.Option value="PAYPAL">PayPal</Select.Option>
                <Select.Option value="APPLEPAY">Apple Pay</Select.Option>
              </Select>
            </Form.Item>
          </div>
        )}
        {/*  */}
        {paymentMethod === "bank" && (
          <div>
            <FormCustom
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="w-[680px]">
                <Form.Item<FieldType>
                  name={"numberCard"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your number Card!",
                    },
                  ]}
                >
                  <Input placeholder="Số thẻ" />
                </Form.Item>
              </div>
              <div className="flex flex-row w-[680px]">
                <div className="basis-1/2">
                  <Form.Item<FieldType>
                    name={"date"}
                    rules={[
                      { required: true, message: "Please input your date!" },
                    ]}
                  >
                    <Input placeholder="Ngày hết hạn" />
                  </Form.Item>
                </div>
                <div className="basis-1/2">
                  <Form.Item<FieldType>
                    name={"CVV"}
                    rules={[
                      { required: true, message: "Please input your CVV!" },
                    ]}
                  >
                    <Input placeholder="CVV" />
                  </Form.Item>
                </div>
              </div>
            </FormCustom>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
const FormCustom = styled(Form)`
  width: 100%;
  #nest-messages_numberCard::placeholder {
    font-weight: 700;
  }
  #nest-messages_date::placeholder {
    font-weight: 700;
  }
  #nest-messages_CVV::placeholder {
    font-weight: 700;
  }
`;
