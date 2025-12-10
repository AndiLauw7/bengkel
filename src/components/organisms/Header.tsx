import React, { FC } from "react";
import NavigationBar from "../molecules/NavigationBar";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-xl border-b border-gray-700/50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
