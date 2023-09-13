import { useParams } from "react-router-dom";
import Booking from "../../modules/Booking/Booking";
import { useGetTypeRoomByIdQuery } from "../../services/roomService";

function BookingPage() {
    const { id } = useParams();
    const { data: room } = useGetTypeRoomByIdQuery(id);
  
  return <div className="container mx-auto">
    <Booking room={room}/>
  </div>;
}

export default BookingPage;
