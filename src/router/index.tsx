import { Routes, Route } from "react-router-dom";
import { SITE_MAP } from "../constants/index";
import DefaultLayout from "../layout/default.layout";
import HomePage from "../pages/HomePage/Home.page";
import AboutPage from "../pages/AboutPage/About.page";
import AdminLayout from "../layout/admin.layout";
import LoginPage from "../pages/Login/Login.page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<DefaultLayout />}>
        <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
        <Route path={SITE_MAP.ABOUT.url} element={<AboutPage />} />
       
        <Route path={SITE_MAP.LOGIN.url} element={<LoginPage />} />
      </Route>
   
      {/* <-------------layout admin--------------------> */}
      <Route path={SITE_MAP.ADMIN.url} element={<AdminLayout />}></Route>

      <Route path="*" element={<h1>404 Not Found !</h1>} />
    </Routes>
  );
};

export default AppRouter;
