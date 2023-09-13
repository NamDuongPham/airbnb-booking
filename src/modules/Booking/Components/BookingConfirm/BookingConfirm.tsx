import { IconContext } from "react-icons";
import { IoTicketOutline } from "react-icons/io5";
import Payment from "../Payment/Payment";
import RuleStandards from "../RuleStandards/RuleStandards";
import { Button } from "antd";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import ModalChangeDate from "./ModalChangeDate/ModalChangeDate";
import ModalChangeGuest from "./ModalChangeGuest/ModalChangeGuest";
import moment from "moment";
import { useCreateBookingMutation, useGetBookingsQuery } from "../../../../services/bookingService";
import { Booking } from "../../../../types/booking";
import { Room } from "../../../../types/room";
import { useSelector } from "react-redux";
interface GuestData {
  adults: number;
  children: number;
  babies: number;
  pets: number;
}
interface IProps {
  room: Room;
}
function BookingConfirm({ room }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfNight, setNumberNight] = useState(1);
  const [bookingPrice, setBookingPrice] = useState(1);
  const onChangeDate = () => {
    setIsOpen(true);
  };
  const onChangeGuest = () => {
    setIsOpenGuest(true);
  };
  const { user } = useSelector((state: any) => state.userSetting);
  useEffect(() => {
    const storedCheckInDateStr = sessionStorage.getItem("checkInDate");
    const storedCheckOutDateStr = sessionStorage.getItem("checkOutDate");
    const numberOfNightsStr = sessionStorage.getItem("numberOfNights");
    const price = sessionStorage.getItem("price");
    if (price) {
      const parsedPrice = parseFloat(price);
      setBookingPrice(parsedPrice);
    }
    const parsedNumberOfNights = JSON.parse(numberOfNightsStr || "1");
    setNumberNight(parsedNumberOfNights);

    const storedGuestData = JSON.parse(
      sessionStorage.getItem("guestData") || "1"
    );
    if (storedGuestData) {
      setGuestData(storedGuestData);
    }

    const storedCheckInDate = moment(
      storedCheckInDateStr ? JSON.parse(storedCheckInDateStr) : null
    );
    const storedCheckOutDate = moment(
      storedCheckOutDateStr ? JSON.parse(storedCheckOutDateStr) : null
    );

    if (storedCheckInDate && storedCheckOutDate) {
      const checkInDateFormatted = storedCheckInDate.format("L"); // Format check-in date
      const checkOutDateFormatted = storedCheckOutDate.format("L"); // Format check-out date
      setCheckIn(checkInDateFormatted);
      setCheckOut(checkOutDateFormatted);
    }
  }, []);
  const handleGuestDataChange = (newGuestData: GuestData) => {
    setGuestData(newGuestData);
  };
  const formatGuestData = (guestData: GuestData): string => {
    let formattedGuests: string[] = [];

    // Người lớn
    if (guestData.adults > 0) {
      formattedGuests.push(`${guestData.adults} người lớn`);
    }

    // Trẻ em
    if (guestData.children > 0) {
      formattedGuests.push(`${guestData.children} trẻ em`);
    }

    // Em bé
    if (guestData.babies > 0) {
      formattedGuests.push(`${guestData.babies} em bé`);
    }

    // Thú cưng
    if (guestData.pets > 0) {
      formattedGuests.push(`${guestData.pets} vật nuôi`);
    }

    return formattedGuests.join(", ");
  };
  //check trùng lịch
  const checkDateOverlap = (checkIn: string, checkOut: string): boolean => {
  const { data: bookings } = useGetBookingsQuery()
  console.log(bookings);
  const existingBookings = bookings || [];
  const newCheckIn = moment(checkIn);
  const newCheckOut = moment(checkOut);
  for (const booking of existingBookings) {
    const bookingCheckIn = moment(booking.checkIn);
    const bookingCheckOut = moment(booking.checkOut);
    if (
      (newCheckIn >= bookingCheckIn && newCheckIn < bookingCheckOut) ||
      (newCheckOut > bookingCheckIn && newCheckOut <= bookingCheckOut) ||
      (newCheckIn <= bookingCheckIn && newCheckOut >= bookingCheckOut)
    ) {
      // Dates overlap with an existing booking
      return true;
    }
  }
  return false;
}
  const [addBooking, { isSuccess, isError }] = useCreateBookingMutation();
  const handleBooking = () => {
    const isDateOverlap = checkDateOverlap(checkIn, checkOut)
    const bookingData: Omit<Booking, "id"> = {
      typeRoomId: room.id,
      userId: user.id,
      checkIn: `${checkIn}`,
      checkOut: `${checkOut}`,
      numberNight: numberOfNight,
      status: "pending",
      price: bookingPrice,
    };
    console.log(bookingData);
    if (isDateOverlap) {
      console.log("Selected dates overlap with an existing booking.");
    } else {
      if (bookingData) {
        addBooking(bookingData);
      }
    }
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("success");
      sessionStorage.removeItem("guestData");
      sessionStorage.removeItem("guestPayment");
      sessionStorage.removeItem("checkOutDate");
      sessionStorage.removeItem("checkInDate");
      sessionStorage.removeItem("numberOfNights");
    }
    if (isError) {
      console.log("error");
    }
  }, [isSuccess, isError]);
  return (
    <div>
      <div>
        <h1>Xác nhận và thanh toán</h1>
      </div>
      <div
        style={{ border: "1px solid #ddd", borderRadius: "12px" }}
        className="flex flex-row justify-between items-center p-3 my-5"
      >
        <div>
          <p className="font-semibold text-lg mb-4">Giá tốt</p>
          <p>
            Những ngày bạn chọn có giá thấp hơn $107 so với mức giá trung bình
            theo đêm trong 3 tháng qua.
          </p>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#e31c5f", size: "25px" }}>
            <IoTicketOutline />
          </IconContext.Provider>
        </div>
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <div>
          <h2 className="text-[25px]">Chuyến đi của bạn</h2>
        </div>
        <div className="my-5">
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Ngày</p>
              <p>
                {checkIn} - {checkOut}{" "}
              </p>
            </div>
            <div>
              <p
                style={{
                  borderBottom: "2px solid black",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={() => {
                  onChangeDate();
                }}
              >
                Chỉnh sửa
              </p>
              <ModalChangeDate isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5 items-center">
            <div>
              <p className="text-lg font-semibold">Khách</p>
              <p>{guestData && formatGuestData(guestData)}</p>
            </div>
            <div>
              <p
                style={{
                  borderBottom: "2px solid black",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={() => {
                  onChangeGuest();
                }}
              >
                Chỉnh sửa
              </p>
              <ModalChangeGuest
                isOpen={isOpenGuest}
                setIsOpen={setIsOpenGuest}
                onGuestDataChange={handleGuestDataChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <Payment />
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <RuleStandards />
      </div>
      <div className="mt-5">
        <ButtonCustom
          type="primary"
          htmlType="submit"
          onClick={() => {
            handleBooking();
          }}
        >
          Booking
        </ButtonCustom>
      </div>
    </div>
  );
}

export default BookingConfirm;
const ButtonCustom = styled(Button)`
  width: 60%;
  height: 50px;
  background-color: #ff385c;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;
