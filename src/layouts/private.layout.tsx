import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { SITE_MAP } from "../constants/site-map";
import { notification } from "antd";

interface IProps {
  children: React.ReactNode;
}
function PrivateLayout({ children }: IProps) {
  const { user } = useSelector((state: any) => state.userSetting);

  if (user) return <>{children}</>;
  else {
    notification.info({
      //@ts-ignore
      message: "vui lòng đăng nhập!"
    });
    return <Navigate to={SITE_MAP.HOME.url} />;
  }
}

export default PrivateLayout;
