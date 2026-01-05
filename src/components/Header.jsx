import React, { memo } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { CiPizza } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-between items-center text-sm text-gray-500 gap-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer text-gray-800">
            <span className="text-orange-500 mr-2 text-lg">
              <AiFillEnvironment />
            </span>
            <span className="font-semibold">Москва</span>
            <span className="ml-1">
              <IoIosArrowDropdown />
            </span>
          </div>
          <a href="#" className="hidden md:inline hover:text-orange-500">
            {t.checkAddress}
          </a>
          <span className="hidden md:inline">{t.avgDeliveryTime}</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">{t.workingHours}</span>
          
           <a href="#"
            className="flex items-center hover:text-orange-500 text-gray-800 font-semibold"
          >
          
            <span className="mr-2 text-lg">
              <IoPersonOutline />
            </span>
            <span className="hidden sm:inline">{t.login}</span>
            <span className="sm:hidden">Войти</span>
          </a>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-amber-600 text-[14px] text-white p-1 rounded border-none cursor-pointer focus:outline-none"
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-orange-500 cursor-pointer">
          <span className="mr-3 text-3xl">
            <CiPizza />
          </span>
          <span className="hidden sm:inline">{t.logoText}</span>
          <span className="sm:hidden">Pizza</span>
        </Link>

        <Link 
          to="/cart"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition duration-200 flex items-center text-sm md:text-base"
        >
          <span className="mr-2 text-lg">
            <TiShoppingCart />
          </span>
          0 ₽
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);