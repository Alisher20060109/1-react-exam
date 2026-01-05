import React, { memo } from "react";
import { CiPizza } from "react-icons/ci";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext"; // Context'ni chaqiramiz

const Footer = () => {
  // Global tarjima obyektini olamiz
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col justify-between">
            <div className="flex items-center text-2xl font-bold text-orange-500 cursor-pointer mb-16">
              <span className="mr-3 text-3xl">
                <CiPizza />
              </span>
              <span className="text-gray-800">{t.logoText}</span>
            </div>
            <p className="hidden md:block text-sm text-gray-500">
              {t.copyright}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">{t.logoText}</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">{t.about}</li>
              <li className="hover:text-orange-500 cursor-pointer">{t.terms}</li>
              <li className="hover:text-orange-500 cursor-pointer">{t.guarantee}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">{t.support}</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">{t.restaurant}</li>
              <li className="hover:text-orange-500 cursor-pointer">{t.contacts}</li>
              <li className="hover:text-orange-500 cursor-pointer">{t.support}</li>
              <li className="hover:text-orange-500 cursor-pointer">{t.trackOrder}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">{t.contacts}</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-gray-600 hover:text-orange-500 cursor-pointer">
                <FiPhone className="text-orange-500 mr-2 text-lg" />
                <span>+7 (926) 223-10-11</span>
              </li>
              <li className="flex items-start text-sm text-gray-600 hover:text-orange-500 cursor-pointer">
                <FiMapPin className="text-orange-500 mr-2 text-xl" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center space-x-6 pt-2">
                <div className="flex items-center text-gray-600 hover:text-orange-500 cursor-pointer">
                  <AiOutlineFacebook className="text-orange-500 mr-1 text-xl" />
                  <span className="text-sm font-medium">Facebook</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-orange-500 cursor-pointer">
                  <AiOutlineInstagram className="text-orange-500 mr-1 text-xl" />
                  <span className="text-sm font-medium">Instagram</span>
                </div>
              </li>
            </ul>
          </div>

          <p className="md:hidden text-center text-sm text-gray-500 mt-4">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);