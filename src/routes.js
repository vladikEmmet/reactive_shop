import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  DEVICE_ROUTE,
  CONTACTS_ROUTE,
  ABOUT_US_ROUTE,
} from "./utils/consts";
import AdminPanel from "./pages/AdminPanel";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts/Contacts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <AdminPanel />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    element: <DevicePage />,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
  },
  {
    path: ABOUT_US_ROUTE,
    element: <AboutUs />,
  },
];
