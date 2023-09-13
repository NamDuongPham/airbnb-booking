import { BsBagCheck, BsStarFill } from "react-icons/bs";
import { TbMessageLanguage } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { useGetHostByIdQuery } from "../../../../../services/hostService";
import { Room } from "../../../../../types/room";
import { useEffect } from "react";

// import { useGetHostByIdTyperoomQuery } from "../../../../../services/roomService";

interface IProps {
  room: Room;
}

function InfoHost({ room }: IProps) {
  // cách 1
  const { data: hostData, isFetching } = useGetHostByIdQuery(room.hostId);

  console.log(hostData);
  useEffect(() => {
    if (room.hostId) {
      if (!hostData && !isFetching) {
        useGetHostByIdQuery(room.hostId);
      }
    }
  }, [room.hostId]);

  // cách 2
  // const {data:hostData} = useGetHostByIdTyperoomQuery(room.id)
  // console.log(hostData);

  return (
    <>
      <h1 className="text-[25px] font-semibold my-4">Gặp gỡ chủ nhà</h1>
      <div
        className="my-5 flex flex-col justify-center items-center bg-[#f0efe9]"
        style={{ borderRadius: "24px" }}
      >
        <div className="w-[500px]">
          <div
            className="w-full flex justify-center p-5 bg-white mt-5"
            style={{ borderRadius: "24px" }}
          >
            <div className="flex flex-col p-5" style={{ borderRadius: "24px" }}>
              {/*  */}
              <div>
                <div className="flex w-full justify-center items-center font-semibold min-h-[230px] ">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-[100px] rounded-full">
                      <img
                        className="rounded-full"
                        src={hostData?.image}
                        alt=""
                      />
                    </div>
                    <div className="mt-4">
                      <p>{hostData?.name}</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col items-center justify-center font-semibold ">
                    <div
                      className="my-2"
                      style={{ borderBottom: "1px solid #ddd" }}
                    >
                      <p className="ml-4">{hostData?.reviews}</p>
                      <p className="my-3 ml-4 font-normal">Reviews</p>
                    </div>

                    <div
                      style={{ borderBottom: "1px solid #ddd" }}
                      className="my-2"
                    >
                      <div className="flex flex-row items-center justify-start">
                        <BsStarFill />
                        <p className="ml-2">{hostData?.rating}</p>
                      </div>
                      <p className="my-3 font-normal">Rank</p>
                    </div>
                    <div className="my-2">
                      <div className="ml-[60px]">
                        <p className="font-semibold">{hostData?.phone}</p>
                        <p className="mt-2 pr-7 font-normal">Phone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col justify-center my-5 p-5 text-[20px]">
            <div className="flex items-center gap-4">
              <BsBagCheck />
              <span className="ml-2">Job: {hostData?.work}</span>
            </div>
            <div className="flex items-center gap-4 my-5">
              <TbMessageLanguage />
              <span className="ml-2">Language: Speak English</span>
            </div>
            <div className="flex items-center gap-4">
              <GoLocation />
              <span className="ml-2">Address: {hostData?.location}</span>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col justify-center p-5  text-[20px]">
            <p className="leading-7 text-justify">{hostData?.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoHost;
