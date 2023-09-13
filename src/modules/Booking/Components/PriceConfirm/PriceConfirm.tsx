import { Input } from "antd";
import { useState, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { useLazyGetDiscountByCodeQuery } from "../../../../services/discountService";
import { Room } from "../../../../types/room";
interface IProps {
  room: Room;
}
function PriceConfirm({ room }: IProps) {
  console.log(room);
  const [discountValue, setDiscountValue] = useState("");
  const [appliedDiscountValue, setAppliedDiscountValue] = useState(0);
  const [numberNight, setNumberNight] = useState(0);
  const [getDiscountByCode, { data }] = useLazyGetDiscountByCodeQuery();
  // lấy dữ liệu từu api
  console.log(data);
  // lấy dữ liệu từ thẻ input
  console.log(discountValue);
  useEffect(() => {
    // setNumberNight(parseInt(sessionStorage.getItem("numberOfNights")||"0"))
    const numberOfNightsStr = sessionStorage.getItem("numberOfNights");
    console.log("numberOfNightsStr:", numberOfNightsStr);
    const parsedNumberOfNights = JSON.parse(numberOfNightsStr || "0");
    console.log("parsedNumberOfNights:", parsedNumberOfNights);
    setNumberNight(parsedNumberOfNights);
  }, []);
  const handleAplly = () => {
    getDiscountByCode(discountValue);
    if (data && data.length > 0) {
      setAppliedDiscountValue(data[0].value);
    }
  };
  const totalPrice =
    room.price * numberNight * (1 - appliedDiscountValue / 100) + 103 * 2;
  useEffect(() => {
    sessionStorage.setItem("price", String(totalPrice));
  }, [totalPrice]);

  return (
    <div className="sticky top-5">
      <div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: " #0000001f 0px 6px 16px",
            marginTop: "15px",
          }}
        >
          {/*  */}
          <div
            style={{
              borderBottom: "1px solid #ddd",
            }}
            className="flex justify-between"
          >
            <div>
              {room && room.images && room.images.length && (
                <img
                  className="mb-4 rounded-md w-[200px]"
                  // @ts-ignore
                  src={room.images[0]}
                />
              )}
            </div>
            <div className="flex flex-col justify-between items-start mb-4">
              <div className="flex justify-end">
                <p>{room.name}</p>
              </div>
              <div className="flex flex-row  items-center">
                <BsStarFill color="#eded32" />
                <span className="ml-2">{room.rating}</span>
              </div>
              <div className="flex justify-end">
                <p>
                  <span className="font-semibold">{room.reviewsCount}</span>{" "}
                  đánh giá
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mt-3">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="font-semibold text-[20px]">Chi tiết giá</p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

          <div style={{ borderBottom: "1px solid #ddd" }}>
            <div className="my-[20px]">
              <div className="flex flex-row justify-between">
                <span style={{ borderBottom: "1px solid black" }}>
                  ${room.price} x {numberNight} đêm
                </span>
                <span className="cost-5-night">
                  ${room.price * numberNight}
                </span>
              </div>
              <div className="flex flex-row justify-between mt-2 ">
                <span style={{ borderBottom: "1px solid black" }}>
                  Phí vệ sinh
                </span>
                <span className="cost-wc">$103</span>
              </div>
              <div className="flex flex-row justify-between mt-2">
                <span style={{ borderBottom: "1px solid black" }}>
                  Phí dịch vụ Airbnb
                </span>
                <span className="cost-service">$103</span>
              </div>
              <div className="flex flex-row justify-between mt-2">
                <span>
                  <Input
                    placeholder="Nhập mã giảm giá"
                    value={discountValue}
                    onChange={(e) => setDiscountValue(e.target.value)}
                  />
                </span>
                <span>{appliedDiscountValue}%</span>
              </div>
              <div className="mt-2">
                <span>
                  <button
                    onClick={() => {
                      handleAplly();
                    }}
                  >
                    Áp dụng
                  </button>
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="totalCost mt-4">
            <div className="flex flex-row justify-between font-semibold">
              <span>Tổng (USD)</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceConfirm;
