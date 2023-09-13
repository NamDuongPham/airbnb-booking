import { AiOutlineFundView, AiOutlineWifi } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { GiShower } from "react-icons/gi";
import { MdSmokingRooms } from "react-icons/md";
import { Room } from "../../../../../types/room";

interface IProps {
  room: Room;
}
interface UtilityService {
  [key: string]: {
    icon: JSX.Element;
  };
}
function InfoUtiDefault(props: IProps) {
  const { room } = props;

  const service: UtilityService = {
    wifi: {
      icon: <AiOutlineWifi />,
    },

    bed: {
      icon: <BiBed />,
    },
    roomSize: {
      icon: <BsHouseDoor />,
    },
    view: {
      icon: <AiOutlineFundView />,
    },
    smoking: {
      icon: <MdSmokingRooms />,
    },
    shower: {
      icon: <GiShower />,
    },
  };
  return (
    <div className="my-5">
      <div>
        <h2
          className="text-[25px] 
        mb-5"
        >
          Nơi này có những gì cho bạn
        </h2>
      </div>
      <div className="flex flex-col items-start   w-full my-5 text-lg">
        <div className="leading-10">
          {room.utilities.map((utility) => {
            const keys = Object.keys(utility);
            if (keys.length) {
              const key = keys[0];
              const value = utility[key];
              return (
                <div key={key} className="flex flex-row items-center w-full justify-start basis-1/2">
                  <div>{service[key].icon}</div>
                  <p className="ml-3"> {value}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoUtiDefault;
