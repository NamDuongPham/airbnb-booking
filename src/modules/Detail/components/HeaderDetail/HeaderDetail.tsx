import { AiOutlineHeart } from "react-icons/ai";
import { BsStarFill, BsTranslate } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { Room } from "../../../../types/room";

interface IProps{
  room:Room
}
function HeaderDetail(props:IProps) {
  const {room} =props
  return (
    <div>
      <div className="pt-3 text-3xl">
        <div className="flex">
          <span className="mr-3">
            <BsTranslate />
          </span>
          <span>{room.name}</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between items-center">
            {/*  */}
            <div className="flex flex-row">
              <div className="flex flex-row">
                <BsStarFill color="#eded32" />
                <p className="text-lg text-black ml-2">{room.rating}</p>
              </div>
              <div>
                <p
                  className="text-lg ml-5  border-b-4 border-slate-900 cursor-pointer"
                  style={{ borderBottom: "1px solid" }}
                >
                  {room.reviewsCount} đánh giá
                </p>
              </div>
            </div>
            <span className="ml-5 font-light mb-3">.</span>
            <div className="flex flex-row ml-4">
              <div className="flex flex-row ">
                <FaUserAlt />
                <p className="text-lg ml-5 ">Chủ nhà siêu cấp</p>
              </div>
            </div>
            <span className="ml-5 font-light mb-3">.</span>
            <div className="flex flex-row ml-4">
              <MdLocationPin color="#DE3151" />
              <p
                className="ml-2 text-lg border-b-4 border-slate-900 cursor-pointer"
                style={{ borderBottom: "1px solid" }}
              >
                {room.location}
              </p>
            </div>
          </div>
          {/* <--------------------------------------> */}
          <div className="flex flex-row">
            <div className="flex flex-row text-lg">
              <div>
                <button className="bg-transparent flex flex-row hover:border-none">
                  <span className="mt-1 mr-2">
                    <FiShare />
                  </span>
                  <span style={{ borderBottom: "1px solid" }}>Chia sẻ</span>
                </button>
              </div>

              <div>
                <button className="bg-transparent flex flex-row hover:border-none">
                  <span className="mt-1 mr-2">
                    <AiOutlineHeart />
                  </span>
                  <span style={{ borderBottom: "1px solid" }}>Yêu thích</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDetail;
