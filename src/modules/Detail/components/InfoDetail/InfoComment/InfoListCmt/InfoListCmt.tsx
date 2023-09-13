import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCommentByIdQuery,
  useGetCommentsQuery,
} from "../../../../../../services/commentService";
import { useGetTypeRoomByIdQuery } from "../../../../../../services/roomService";
import { Comment } from "../../../../../../types/comment";

function InfoListCmt() {
  const { id } = useParams();
  const { data: room } = useGetTypeRoomByIdQuery(id);
  const { data: comments, isFetching } = useGetCommentsQuery();
  console.log(comments);
  const parsedId = id ? parseInt(id) : undefined;
  const filteredComments = comments?.filter(
    (comment: Comment) => comment.typeRoomId === parsedId
  );
  console.log(filteredComments);
  const formatDate = (date: any) => {
    if (typeof date === "number") {
      const formattedDate = new Date(date).toLocaleDateString();
      return formattedDate;
    }
    return date;
  };

  
  useEffect(() => {
    if (room.hostId) {
      if (!comments && !isFetching) {
        useGetCommentByIdQuery(room.hostId);
      }
    }
  }, [room.hostId, comments]);
  return (
    <div className="flex flex-wrap justify-between gap-10">
      {filteredComments ? (
        filteredComments.map((comment: any) => (
          <div key={comment.id} className="flex flex-col w-[calc(50%-20px)]">
            <div className="flex flex-row items-center">
              <div className="w-[40px] h-[40px]">
                <img
                  className="w-full h-full rounded-full"
                  src={comment.image}
                  alt=""
                />
              </div>
              <p className="ml-3 font-semibold">
                Jenifer <br />
                <p className="mt-2 font-normal">{formatDate(comment.createdAt)}</p>
              </p>
            </div>
            <div className="mt-5">
              <p className="text-[17px] leading-6">{comment.review}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
}

export default InfoListCmt;
