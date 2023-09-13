import HeaderDetail from "./components/HeaderDetail/HeaderDetail";
import ImageDetail from "./components/ImageDetail/ImageDetail";
import InfoDetail from "./components/InfoDetail/InfoDetail";
import MapDetail from "./components/MapDetail/MapDetail";
import { useParams } from "react-router-dom";
import { useGetTypeRoomByIdQuery } from "../../services/roomService";
function Detail() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  return (
    <div className="container mx-auto">
      {room && (
        <>
          <div>
            <HeaderDetail room={room}/>
          </div>
          <main>
            <ImageDetail />
            <InfoDetail />
            <MapDetail room={room}/>
          </main>
        </>
      )}
    </div>
  );
}

export default Detail;
