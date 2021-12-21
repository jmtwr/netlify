import React from "react";
import logo from "./logo.svg";

export const Header = () => {
  return (
    <div className="flex p-6 bg-gray-100">
      <a className="flex" href="https://newdiagnostics.ua/">
        <img className="w-[30px] mr-5" alt="logo" src={logo} />
        <div className="text-blue">
          <h1 className="text-2xl font-bold">новая диагностика</h1>
          <h2 className="text-xl">медицинская лаборатория</h2>
        </div>
      </a>
    </div>
  );
};
