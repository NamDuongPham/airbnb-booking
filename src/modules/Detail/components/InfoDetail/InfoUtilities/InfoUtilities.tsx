import { AiOutlineCalendar } from "react-icons/ai";
import { BsDoorOpen, BsHouseDoor } from "react-icons/bs";
import { FaPeopleRoof } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { PiShowerLight } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useGetHostByIdQuery } from "../../../../../services/hostService";
import { useGetTypeRoomByIdQuery } from "../../../../../services/roomService";
import InfoBio from "../InfoBio/InfoBio";
import InfoComment from "../InfoComment/InfoComment";
import InfoHost from "../InfoHost/InfoHost";
import InfoUtiDefault from "../InfoUtiDefault/InfoUtiDefault";

function InfoUtilities() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  const { data: hostData } = useGetHostByIdQuery(room.hostId);

  return (
    <>
      {
        hostData &&  <div
        className="mt-5 mb-5 pb-3 "
        style={{ borderBottom: "1px solid #ddd" }}
      >
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="font-semibold text-[25px]">Phòng của chủ nhà {hostData.name}</h2>
          </div>
          <div className="w-[40px] h-[40px] rounded-full cursor-pointer">
            <img
              className="w-full h-full rounded-full"
              src={hostData.image}
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 gap-2 h-[100px] mt-4">
          <div
            className="h-full flex flex-row justify-center items-center"
            style={{ border: "1px solid #dddddd", borderRadius: "12px" }}
          >
            <div className="flex flex-row justify-center items-center ">
              <LiaBedSolid />
              <span className="ml-2">Giường King</span>
            </div>
          </div>
          <div
            className="h-full flex flex-row justify-center items-center"
            style={{ border: "1px solid #dddddd", borderRadius: "12px" }}
          >
            <div className="flex flex-row justify-center items-center">
              <PiShowerLight />
              <span className="ml-2">Phòng vệ sinh</span>
            </div>
          </div>
          <div
            className="h-full flex flex-row justify-center items-center"
            style={{ border: "1px solid #dddddd", borderRadius: "12px" }}
          >
            <div className="h-full flex flex-row justify-center items-center">
              <span className="px-3">
                <BsHouseDoor />
              </span>
              <span className="ml-2">
                Những khách khác có thể hiện diện tại đây
              </span>
            </div>
          </div>
        </div>
      </div>
      }
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <div className="flex flex-col justify-start  gap-y-5 my-5">
          <div className="flex flex-row justify-start text-lg ">
            <BsDoorOpen />
            <span className="font-semibold ml-4">
              Tự nhận phòng
              <br />
              <p className="font-normal">Tự nhận phòng bằng cách nhập mã</p>
            </span>
          </div>
          <div className="flex flex-row justify-start ">
            <AiOutlineCalendar />
            <span className="font-semibold ml-4">Nhận Phòng : <span className="font-normal">{room.checkInTime}</span></span>
          </div>
          <div className="flex flex-row justify-start ">
            <AiOutlineCalendar />
            <span className="font-semibold ml-4">Trả Phòng :<span className="font-normal">{room.checkOutTime}</span></span>
          </div>
          <div className="flex flex-row justify-start ">
            <FaPeopleRoof />
            <span className="font-semibold ml-4">Khách tối đa : <span className="font-normal">{room.maxGuest}</span></span>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <InfoBio room={room}/>
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <InfoUtiDefault room={room}/>
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <InfoComment />
      </div>
      {/*  */}
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <InfoHost room={room}/>
      </div>
    </>
  );
}

export default InfoUtilities;
