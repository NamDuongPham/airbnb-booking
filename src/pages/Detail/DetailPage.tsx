import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import Detail from "../../modules/Detail/Detail";
import { useGetTypeRoomByIdQuery } from "../../services/roomService";

function DetailPage() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);

  useTitle(room ? room.name : "Loading...");
  return (
    <div className="container mx-auto">
      <Detail />
    </div>
  );
}

export default DetailPage;
