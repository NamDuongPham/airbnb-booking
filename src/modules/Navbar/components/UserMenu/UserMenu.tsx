import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import ModalLogin from "../../../Home/components/ModalLogin/ModalLogin";
import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../../../constants/site-map";
import ModalRegister from "../../../Home/components/ModalRegister/ModalRegister";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../redux/slice/userSlice";
import { notification } from "antd";

function UserMenu() {
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpenMenu((value) => !value);
  }, []);

  const { user } = useSelector((state: any) => state.userSetting);
  console.log(user);

  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    notification.success({
      message: "Logout success",
    });
    navigate(SITE_MAP.HOME.url);
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
            {user ? (
              <img
                src="/images/user.png"
                alt=""
                className="rounded-full"
                height="30"
                width="30"
              />
            ) : (
              <img
                src="/images/placeholder.jpg"
                alt=""
                className="rounded-full"
                height="30"
                width="30"
              />
            )}
          </div>
        </div>
      </div>
      {isOpenMenu && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm cursor-pointer">
          <div className="flex flex-col cursor-poiter">
            {user ? (
              <>
                <MenuItem
                  onClick={() => {
                    logout();
                  }}
                  label="log out"
                />
                <MenuItem
                  onClick={() => {
                    navigate(SITE_MAP.ACCOUNT.url)
                  }}
                  label="account"
                />
                <MenuItem
                  onClick={() => {
                    navigate(SITE_MAP.HISTORY.url)
                  }}
                  label="booking history"
                />
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    setIsOpen(true);
                    setIsOpenMenu(false);
                  }}
                  label="login"
                />

                <MenuItem
                  onClick={() => {
                    setIsOpenRegister(true);
                    setIsOpenMenu(false);
                  }}
                  label="register"
                />
              </>
            )}
          </div>
        </div>
      )}
      <ModalLogin isOpen={isOpen} setIsOpen={setIsOpen} />
      <ModalRegister
        isOpenRegister={isOpenRegister}
        setIsOpenRegister={setIsOpenRegister}
      />
    </div>
  );
}

export default UserMenu;
