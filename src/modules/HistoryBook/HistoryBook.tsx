import { useSelector } from "react-redux";
import { useGetBookingByUserQuery } from "../../services/bookingService";
import { useTitle } from "../../hooks/useTitle";
import { useGetTypeRoomsQuery } from "../../services/roomService";

function HistoryBook() {
  useTitle("Booking");
  const { user } = useSelector((state: any) => state.userSetting);
  const { data } = useGetBookingByUserQuery(user.id);
  const { data: typeRoom } = useGetTypeRoomsQuery();
  console.log(data);
  const formatDate = (date:any) => {
    if (typeof date === "number") {
      const formattedDate = new Date(date).toLocaleDateString();
      return formattedDate;
    }
    return date;
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1>Booking History</h1>
      </div>
      <div>
        {data &&
          data.map((booking: any) => {
            const checkIn = formatDate(booking.checkIn);
            const checkOut = formatDate(booking.checkOut);
            const roomType = typeRoom?.find(
              (type: any) => type.id === booking.typeRoomId
            );
            return roomType ? (
              <div
                className="flex flex-row items-center gap-10 py-10"
                style={{ borderBottom: "1px solid gray" }}
                key={booking.id}
              >
                <div>
                  <img
                  width={240}
                  //@ts-ignore
                    src={roomType?.images[0]}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mb-5 font-bold text-lg ">
                    Room type:{" "}
                    <span
                      style={{ borderBottom: "1px solid black" }}
                      className="font-normal"
                    >
                      {" "}
                      {roomType.name}
                    </span>
                  </p>
                  <p className="font-extrabold">
                    Price:{" "}
                    <span className="text-rose-600">${booking.price}</span>
                  </p>
                  <p className="mt-5 font-semibold">
                    Status: 
                    <span
                     className={`text-${
                        booking.status === "canceled"
                          ? "rose-900"
                          : booking.status === "pending"
                          ? "lime-600"
                          : ""
                      }`}
                    >
                       {booking.status}
                    </span>
                  </p>
                  <div className="flex items-center justify-between gap-10">
                    <p className="mt-5 font-semibold">
                      Check in:{" "}
                      <span className="text-zinc-950">{checkIn}</span>
                    </p>
                    <p className="mt-5 font-semibold">
                      Check out:{" "}
                      <span className="text-zinc-950">{checkOut}</span>
                    </p>
                  </div>
                  <p className="mt-5 font-semibold">
                    Days: <span>{booking.numberNight}</span>
                  </p>
                </div>
              </div>
            ) : null;
          })}
        {!data && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default HistoryBook;
