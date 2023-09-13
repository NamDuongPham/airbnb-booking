import { Route, Routes } from "react-router-dom";
import { SITE_MAP } from "../constants/site-map";
import { HomePage } from "../pages/Home/HomePage";

import DefaultLayout from "../layouts/default.layout";
import AdminLayout from "../layouts/admin.layout";
import DetailPage from "../pages/Detail/DetailPage";
import BookingPage from "../pages/Booking/BookingPage";
import AccountPage from "../pages/Account/AccountPage";
import PrivateLayout from "../layouts/private.layout";
import HistoryBookPage from "../pages/HistoryBook/HistoryBookPage";

export const Router = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<DefaultLayout />}>
        <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
        <Route path={SITE_MAP.TYPEROOM.url} element={<DetailPage />} />
       
      </Route>
      <Route
        path={SITE_MAP.HOME.url}
        element={<PrivateLayout children={<DefaultLayout />} />}
      >
        <Route path={SITE_MAP.ACCOUNT.url} element={<AccountPage />} />
        <Route path={SITE_MAP.BOOKING.url} element={<BookingPage />} />
        <Route path={SITE_MAP.HISTORY.url} element={<HistoryBookPage />} />
      </Route>
      {/* <-------------layout admin--------------------> */}
      <Route path={SITE_MAP.ADMIN.url} element={<AdminLayout />}></Route>

      <Route path="*" element={<h1>404 Not Found !</h1>} />
    </Routes>
  );
};
