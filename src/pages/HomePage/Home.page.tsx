import { Navigate, useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../constants";
const HomePage = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const logout = ()=>{
    navigate(SITE_MAP.LOGIN.url)
  }
  if(token){
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
       <button onClick={logout}>logout</button>
       
      </div>
    );
  }else {
  return   <Navigate to={SITE_MAP.LOGIN.url} replace={true}></Navigate>
  }
  
};

export default HomePage;
