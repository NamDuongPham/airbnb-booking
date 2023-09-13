import { Room } from "../../../../../types/room";

interface IProps {
  room: Room;
}
function InfoBio(props: IProps) {
  const { room } = props;
  return (
    <div className="my-5 text-lg">
      <p>{room.description}</p>
    </div>
  );
}

export default InfoBio;
