import { Route, Routes } from 'react-router-dom';
import { SITE_MAP } from '../constants/site-map';
import { HomePage } from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import DefaultLayout from '../layouts/default.layout';
import AdminLayout from '../layouts/admin.layout';

export const Router = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<DefaultLayout />}>
        <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
   
       
        <Route path={SITE_MAP.LOGIN.url} element={<LoginPage />} />
      </Route>
   
      {/* <-------------layout admin--------------------> */}
      <Route path={SITE_MAP.ADMIN.url} element={<AdminLayout />}></Route>

      <Route path="*" element={<h1>404 Not Found !</h1>} />
    </Routes>
  );
};
