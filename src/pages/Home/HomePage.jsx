import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [categories, setCategories] = useState([]); // Nomni to'g'irladik
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null); // Boshida null

  async function fetchData() {
    try {
      const resCat = await axios.get(
        "https://693d1ae6f55f1be79301e90f.mockapi.io/categories"
      );
      const resProd = await axios.get(
        "https://693d1ae6f55f1be79301e90f.mockapi.io/products"
      );

      setCategories(resCat.data);
      setProducts(resProd.data);

      // Birinchi kategoriyani avtomatik tanlash (agar mavjud bo'lsa)
      if (resCat.data.length > 0) {
        setSelectCategory(resCat.data[0].id);
      }
    } catch (err) {
      console.error("Xatolik yuz berdi:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container mx-auto py-5   pt-35 px-5 ">
      {/* Kategoriyalar qismi */}
     <div className="flex items-center justify-between gap-5 mb-10 overflow-x-auto whitespace-nowrap px-4 pb-4">
        {categories.map((el) => (
          <div
            key={el.id}
            onClick={() => setSelectCategory(el.id)}
            // 'shrink-0' klassi kartalarni kichrayib ketishiga yo'l qo'ymaydi, bu gorizontal skroll uchun muhim
            className={`shrink-0 flex items-center flex-col gap-3 rounded-2xl shadow-lg cursor-pointer p-5 transition-all ${
              selectCategory === el.id
                ? "border-2 border-amber-600 scale-105"
                : "bg-white"
            }`}
          >
            <img
              className="w-20 h-20 object-contain"
              src={el.icon}
              alt={el.title}
            />
            <p className="text-center text-amber-600 text-xl font-bold">
              {el.title}
            </p>
          </div>
        ))}
      </div>


      {/* Mahsulotlar qismi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((prod) => prod.categoryId == selectCategory) // API'dagi nomga e'tibor bering
          .map((el) => (
            <div
              key={el.id}
              className="relative flex flex-col max-w-150 h-100 p-5  rounded-2xl shadow-xl bg-white overflow-hidden"
            >
              {/* Mahsulot rasmi */}
              <img
                className="w-full h-56 object-cover"
                src={el.image}
                alt={el.title}
              />

            
              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-md">
                ХИТ
              </div>
              
              <div className="p-5 flex flex-col grow">
                <p className="text-gray-800 text-xl font-bold mb-2">
                  {el.title}
                </p>
                <p className="text-gray-600 grow">{el.description}</p>

                <div className="mt-auto flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-800">
                    {el.basePrice} ₽
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200">
                    Выбрать
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Mahsulot topilmasa */}
      {products.filter((prod) => prod.categoryId == selectCategory).length ===
        0 && (
        <p className="text-center text-gray-500 mt-10">
          Bu kategoriya bo'yicha mahsulot topilmadi.
        </p>
      )}
    </section>
  );
};

export default HomePage;
