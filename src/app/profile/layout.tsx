import React from "react";

import { Metadata } from "next";
import { ProfileBottomNav } from "./ProfileBottomNav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <ProfileBottomNav />
    </div>
  );
};

export default Layout;
