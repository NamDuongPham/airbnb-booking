import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLazyGetAccountByIdQuery } from "../../services/accountService";
import InfoPersonal from "./Components/InfoPersonal/InfoPersonal";
import { useTitle } from "../../hooks/useTitle";

function Account() {
  useTitle("Account") 
  const { user } = useSelector((state: any) => state.userSetting);
  const [triggerGet, { data: account }] = useLazyGetAccountByIdQuery();

  useEffect(() => {
    triggerGet(user.id);
  }, [user.id]);
  const refresh=()=>{
       triggerGet(user.id)
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold">Thông tin cá nhân</h1>
      <div className="flex flex-col justify-center gap-12 mt-10">
        <InfoPersonal label="name" value={account?.name} refresh={refresh} />
        <InfoPersonal label="address" value={account?.address} refresh={refresh}/>
        <InfoPersonal label="phone" value={account?.phone} refresh={refresh}/>
      </div>
    </div>
  );
}

export default Account;
