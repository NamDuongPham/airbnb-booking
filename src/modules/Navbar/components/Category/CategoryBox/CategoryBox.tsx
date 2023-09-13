// import { useState } from "react";
import { IconType } from "react-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface ICategoryProps {
  icon: IconType;
  label: string;
  description: string;
  selected?: boolean;
}

function CategoryBox(props: ICategoryProps) {
  const { selected, icon: Icon, label } = props;
  const { category: currentCategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickHandler = () => {
    const updatedCategory: string | undefined =
      currentCategory === label ? undefined : label;

    const searchParams = new URLSearchParams(location.search);
    if (updatedCategory !== undefined) {
      searchParams.set("category", updatedCategory);
    } else {
      searchParams.delete("category");
    }

    // setSelectd(true);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  return (
    <>
     
        <div
          onClick={handleClickHandler}
          className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      hover:text-neutral-800
      transition
      cursor-pointer
      
      ${selected ? "text-[#de3151]" : "text-neutral-500"}
      
    `}
        >
          <Icon size={26} />
          <div className="font-medium text-sm ">{label}</div>
        </div>
      
    </>
  );
}

export default CategoryBox;
