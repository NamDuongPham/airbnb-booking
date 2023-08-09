import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import ModalLogin from "../../../Home/components/ModalLogin/ModalLogin";
import {  useNavigate } from 'react-router-dom';
import { SITE_MAP } from "../../../../constants/site-map";

function UserMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpenMenu((value) => !value);
  }, []);
  const navigate = useNavigate();
  const logout = () => {
    navigate(SITE_MAP.LOGIN.url);
  };
  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb yor home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transiton"
        >
          <AiOutlineMenu />
          <div className="hidden md:block ">
            <img
              src="/images/placeholder.jpg"
              alt=""
              className="rounded-full"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpenMenu && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-poiter">
            <MenuItem onClick={() => setIsOpen(true)} label="login" />
            <ModalLogin isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuItem onClick={() => {}} label="sign up" />
            <MenuItem onClick={() => {}} label="sign in" />
            <MenuItem onClick={() => {logout}} label="log out" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
