import { Rate } from "antd";
import { Room } from "../../../../../../types/room";

interface IProps{
  room:Room
}
function InfoStart({room}:IProps) {

    return (
        <div>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center justify-between mb-4">
            <span>Dịch vụ</span>
            <div className="flex flex-row items-center ">
              <Rate value={Math.ceil(room.stars.service)}/>
              <span>{Math.ceil(room.stars.service)}</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mb-4">
            <span>Phòng ốc</span>
            <div className="flex flex-row items-center ">
              <Rate value={Math.ceil(room.stars.room)}/>
              <span>{Math.ceil(room.stars.room)}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center justify-between mb-4">
            <span>Đồ ăn</span>
            <div className="flex flex-row items-center ">
              <Rate value={Math.ceil(room.stars.food)}/>
              <span>{Math.ceil(room.stars.food)}</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mb-4">
            <span>Vệ sinh</span>
            <div className="flex flex-row items-center ">
              <Rate value={Math.ceil(room.stars.cleanness)}/>
              <span>{Math.ceil(room.stars.cleanness)}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default InfoStart;