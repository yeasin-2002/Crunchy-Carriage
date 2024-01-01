import { HomeIcon, Settings, ShoppingCart, User } from "lucide-react";

export const navItem = [
  {
    name: "Home",
    path: "/",
    Icon: <HomeIcon />,
  },
  {
    name: "Menu",
    path: "/menu",
    Icon: <HomeIcon />,
  },
  {
    name: "Contact us",
    path: "/contact-us",
    Icon: <HomeIcon />,
  },
  {
    name: "Shop",
    path: "/shop",
    Icon: <HomeIcon />,
  },
];

export const profileMenu = [
  {
    name: "Profile",
    path: "/profile",
    Icon: <User className="size-4" />,
  },

  {
    name: "wishlist",
    path: "profile/wishlist",
    Icon: <ShoppingCart className="size-4" />,
  },
  {
    name: "Settings",
    path: "profile/settings",
    Icon: <Settings className="size-4 " />,
  },
];
