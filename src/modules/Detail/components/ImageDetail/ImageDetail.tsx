import { Image } from "antd";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useGetTypeRoomByIdQuery } from "../../../../services/roomService";

function ImageDetail() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-2 gap-1 h-full cursor-pointer ">
        <div className="col-span-2 row-span-2 ">
          <ImageContainer src={room.images[0]} style={{ height: "100%" }} />
        </div>
        <div className="col-span-1 ">
          <ImageContainer src={room.images[1]} style={{ height: "100%" }} />
        </div>
        <div className="col-span-1">
          <ImageContainer src={room.images[2]} style={{ height: "100%" }} />
        </div>
        <div className="col-span-1 ">
          <ImageContainer src={room.images[3]} style={{ height: "100%" }} />
        </div>
        <div className="col-span-1 ">
          <ImageContainer src={room.images[0]} style={{ height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default ImageDetail;
const ImageContainer = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
