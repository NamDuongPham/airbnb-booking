import { useState } from "react";

const useEditState = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return { isEditing, handleEditClick, handleSaveClick };
};

export default useEditState;