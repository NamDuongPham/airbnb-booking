import { Skeleton } from "antd";
import { Room } from "../../types/room";
import BookingConfirm from "./Components/BookingConfirm/BookingConfirm";
import PriceConfirm from "./Components/PriceConfirm/PriceConfirm";

interface IProps{
  room:Room
}
function Booking({room}:IProps) {
  console.log(room);
  
  return (
    <div className="mt-5 flex flex-row justify-between">
      <div className="basis-2/3">
        <BookingConfirm  room={room}/>
      </div>
      {/*  */}

      <div className="basis-1/3 pl-[40px] mt-[55px]">
       {room ?  <PriceConfirm room={room}/> : <Skeleton loading={true}></Skeleton>}
      </div>
    </div>
  );
}

export default Booking;
