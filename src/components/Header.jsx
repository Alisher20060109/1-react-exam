import React, { memo } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { CiPizza } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
  
    {/* Yuqori qism: Manzil va Profil */}
    {/* Kichik ekranlarda flex-wrap, o'rta ekranlardan boshlab justify-between */}
    <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-between items-center text-sm text-gray-500 gap-2">
        
        {/* Chap qism */}
        <div className="flex items-center space-x-4">
            <div className="flex items-center cursor-pointer text-gray-800">
                <span className="text-orange-500 mr-2 text-lg"><AiFillEnvironment /></span> 
                <span className="font-semibold">Москва</span>
                <span className="ml-1"><IoIosArrowDropdown /></span>
            </div>
            {/* Bu linkni faqat o'rta ekranlardan boshlab ko'rsatamiz */}
            <a href="#" className="hidden md:inline hover:text-orange-500">Проверить адрес</a>
            {/* Bu matnni ham faqat o'rta ekranlardan boshlab ko'rsatamiz */}
            <span className="hidden md:inline">Среднее время доставки: 00:24:19</span>
        </div>

        {/* O'ng qism */}
        <div className="flex items-center space-x-4">
             {/* Bu matnni ham faqat o'rta ekranlardan boshlab ko'rsatamiz */}
            <span className="hidden md:inline">Время работы:  11:00 до 23:00</span>
            <a href="#" className="flex items-center hover:text-orange-500 text-gray-800 font-semibold">
                <span className="mr-2 text-lg"><IoPersonOutline /></span> 
                {/* Mobil ekranda "Войти" deb qisqartirish mumkin */}
                <span className="hidden sm:inline">Войти в аккаунт</span>
                <span className="sm:hidden">Войти</span>
            </a>
        </div>
    </div>

    {/* Pastki qism: Logo va Savat */}
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center text-2xl font-bold text-orange-500 cursor-pointer">
            <span className="mr-3 text-3xl"><CiPizza /></span> 
            {/* Mobil ekranda logotip nomini yashirish yoki qisqartirish mumkin */}
            <span className="hidden sm:inline">Куда пицца</span>
            <span className="sm:hidden">Pizza</span>
        </div>

        {/* Savat tugmasi */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition duration-200 flex items-center text-sm md:text-base">
            <span className="mr-2 text-lg"><TiShoppingCart /></span> 
            0 ₽
        </button>
    </div>
</header>
 
  );
};
const HeaderMemo = memo(Header);
export default HeaderMemo;
