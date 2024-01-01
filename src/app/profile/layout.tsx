import React from "react";
import { ProfileBottomNav } from "./ProfileBottomNav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen  ">
      {children}
      <ProfileBottomNav />
    </div>
  );
};

export default Layout;
