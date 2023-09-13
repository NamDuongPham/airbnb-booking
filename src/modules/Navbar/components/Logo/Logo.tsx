import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../../../constants/site-map";

function Logo() {
  const navigate = useNavigate();
  const handleClickToHome = () => {
    navigate(SITE_MAP.HOME.url);
  };
  return (
    <img
      alt="logo"
      onClick={() => {
        handleClickToHome();
      }}
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    ></img>
  );
}

export default Logo;
