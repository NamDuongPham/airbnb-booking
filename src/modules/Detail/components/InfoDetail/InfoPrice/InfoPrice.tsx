import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BsStarFill } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useGetTypeRoomByIdQuery } from "../../../../../services/roomService";
import { useSelector } from "react-redux";
function InfoPrice() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  const [checkInDate, setCheckInDate] = useState<Date | undefined | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined | null>(
    null
  );
  const { user } = useSelector((state: any) => state.userSetting);

  const onCheckInDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date, dateString);
    setCheckInDate(date?.toDate());
  };
  const onCheckOutDateChange: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date, dateString);
    setCheckOutDate(date?.toDate());
  };

  const getNumberOfNights = (): number => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // số milli giây trong 1 ngày
    if (checkInDate && checkOutDate) {
      const timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const numberOfNights = Math.floor(timeDiff / millisecondsPerDay);
      sessionStorage.setItem(
        "numberOfNights",
        JSON.stringify(numberOfNights.toString())
      );

      return numberOfNights;
    }
    return 0;
  };
  const isDatesSelected = checkInDate && checkOutDate;
  const handleBooking = () => {
    if (user) {
      if (isDatesSelected) {
        sessionStorage.setItem(
          "checkInDate",
          JSON.stringify(checkInDate.toString())
        );
        sessionStorage.setItem(
          "checkOutDate",
          JSON.stringify(checkOutDate.toString())
        );
        getNumberOfNights();
      }
    }
  };
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
          <div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="font-semibold">{room.price}$ / night</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <BsStarFill color="#eded32" />
                  <span className="ml-2">{room.rating}</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="mt-4 flex flex-row p-2"
            style={{ border: "1px solid #000", borderRadius: "7px" }}
          >
            <div className="w-full">
              <div>Nhận phòng</div>
              <div className="mt-1 w-full">
                <SpaceContainer direction="vertical">
                  <DatePicker onChange={onCheckInDateChange} />
                </SpaceContainer>
              </div>
            </div>
            <div className="w-full">
              <div>Trả phòng</div>
              <div className="mt-1 w-full">
                <SpaceContainer direction="vertical">
                  <DatePicker onChange={onCheckOutDateChange} />
                </SpaceContainer>
              </div>
            </div>
          </div>
          {/*  */}
          <Link to={`/booking/typeroom/${room.id}`}>
            <div className="flex flex-row justify-center items-center mt-4">
              <button
                className="bg-[#ff385c] text-white"
                onClick={handleBooking}
                disabled={!isDatesSelected}
              >
                Đặt phòng
              </button>
            </div>
          </Link>
          {/*  */}

          <div style={{ borderBottom: "1px solid #ddd" }}>
            <div className="my-[20px]">
              <div className="flex flex-row justify-between">
                <span style={{ borderBottom: "1px solid black" }}>
                  ${room.price} x 5 đêm
                </span>
                <span className="cost-5-night">${room.price * 5}</span>
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
            </div>
          </div>
          {/*  */}
          <div className="totalCost mt-4">
            <div className="flex flex-row justify-between font-semibold">
              <span>Tổng trước thuế</span>
              <span>${room.price * 5 + 103 * 2}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: " #0000001f 0px 6px 16px",
          marginTop: "15px",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex flex-row justify-between">
          <div className="pr-4">
            <span className="font-semibold">Giá tốt :</span>
            <span>
              Những ngày bạn chọn có giá thấp hơn $55 so với mức giá trung bình
              theo đêm trong 3 tháng qua.
            </span>
          </div>
          <div>
            <IconContext.Provider value={{ color: "#e31c5f" }}>
              <IoTicketOutline />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPrice;

const SpaceContainer = styled(Space)`
  width: 100%;
  .ant-space-item {
    .ant-picker {
      width: 100%;
    }
  }
`;
