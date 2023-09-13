import { useState } from "react";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../../../../../../services/commentService";
function WriteCmt() {
  const [comment, setComment] = useState("");
  const [addComment] = useAddCommentMutation();
  const commentsQuery = useGetCommentsQuery();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   await  addComment(comment).unwrap();
   console.log(comment);
   
    setComment("");
    commentsQuery.refetch(); 
    
  };
  return (
    <div className=" w-full p-3" style={{ border: "1px solid black" }}>
      <p className="text-lg">write comment</p>
     <form onSubmit={handleSubmit}>
     <input
        className="w-full my-4"
        type="text"
        placeholder="write comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
        <button type="submit" className="bg-[#ff385c] text-white mt-4">
        Up
      </button>
     </form>
    
    </div>
  );
}

export default WriteCmt;
