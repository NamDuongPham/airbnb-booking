import { BsStarFill } from "react-icons/bs";
import InfoStart from "./InfoStart/InfoStart";
import InfoListCmt from "./InfoListCmt/InfoListCmt";
import WriteCmt from "./WriteCmt/WriteCmt";
import { useGetTypeRoomByIdQuery } from "../../../../../services/roomService";
import { useParams } from "react-router-dom";

function InfoComment() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  return (
    <div className="my-5">
      <div className="flex flex-row items-center  text-[25px] font-semibold">
        <h2 className="flex flex-row  items-center ">
          <BsStarFill />
          <span className="ml-3">4.82</span>
        </h2>
        <span className="mx-3">-</span>
        <h3>30 bình luận</h3>
      </div>
      {/*  */}
      <div className="my-5">
        <InfoStart room={room}/>
      </div>
      {/*  */}
      <div className="my-5">
        <InfoListCmt/>
      </div>
      {/*  */}
      <div className="my-5">
        <WriteCmt/>
      </div>
    </div>
  );
}

export default InfoComment;
