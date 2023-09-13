interface Route {
  url: string;
  title: string;
  roles?: string[];
}

interface SiteMap {
  [key: string]: Route;
}

export const SITE_MAP: SiteMap = {
  HOME: {
    url: "/",
    title: "Home",
  },
  ABOUT: {
    url: "/about",
    title: "About",
  },
  CART: {
    url: "/cart",
    title: "Cart",
    roles: ["user"],
  },
  LOGIN: {
    url: "/login",
    title: "Login",
  },
  CATEGORY: {
    url: "/category",
    title: "Category",
  },
  TYPEROOM:{
    url: "/detail/typeroom/:id",
    title: "Typeroom",
  },
  BOOKING: {
    url: "/booking/typeroom/:id",
    title: "booking",
  },
  HISTORY: {
    url: "/history",
    title: "history",
  },
  ACCOUNT: {
    url: "/account",
    title: "account",
  },
  ADMIN: {
    url: "/admin",
    title: "Admin",
    roles: ["admin"],
  },
};

