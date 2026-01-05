import axios from "axios";
import React, { useEffect, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 DATA FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [resCat, resProd] = await Promise.all([
          axios.get("https://693d1ae6f55f1be79301e90f.mockapi.io/categories"),
          axios.get("https://693d1ae6f55f1be79301e90f.mockapi.io/products"),
        ]);

        setCategories(resCat.data);
        setProducts(resProd.data);

        if (resCat.data.length > 0) {
          setSelectCategory(String(resCat.data[0].id));
        }
      } catch (err) {
        console.error("Xatolik:", err);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔹 FILTER
  const filteredProducts = products.filter(
    (prod) => String(prod.categoryId) === String(selectCategory)
  );

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-gray-500">Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto py-8 px-4 mt-2">
      {/* ================== CATEGORY SCROLL ================== */}
      <div className="flex gap-4 mb-12 overflow-x-auto flex-nowrap md:flex-wrap md:overflow-visible px-2">
        {categories.map((el) => (
          <div
            key={el.id}
            onClick={() => setSelectCategory(String(el.id))}
            className={`flex flex-col items-center justify-center w-28 p-3 rounded-2xl cursor-pointer transition-all border-2 shrink-0
              ${
                selectCategory === String(el.id)
                  ? "border-orange-500 bg-white shadow-sm"
                  : "border-transparent bg-white hover:bg-gray-50"
              }
            `}
          >
            <img
              className="w-12 h-12 object-contain mb-2"
              src={el.icon}
              alt={el.title}
            />
            <span
              className={`text-sm font-medium text-center ${
                selectCategory === String(el.id)
                  ? "text-orange-600"
                  : "text-gray-600"
              }`}
            >
              {el.title}
            </span>
          </div>
        ))}
      </div>

      {/* ================== PRODUCTS SWIPER ================== */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          speed={300}
          navigation
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4 },
          }}
          className="product-swiper"
        >
          {filteredProducts.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="bg-white rounded-3xl p-4 shadow-md border border-gray-200 h-full flex flex-col relative hover:shadow-lg transition-shadow duration-300">
                
                {/* 🔖 Discount */}
                {el.discount && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    -{el.discount}%
                  </div>
                )}

                {/* 🖼 Image */}
                <div className="h-44 flex items-center justify-center mb-3">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* 📄 Title */}
                <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  {el.title}
                </h3>

                {/* 💰 Price */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-red-600 text-xl font-bold">
                    {el.price} ₽
                  </span>
                  {el.oldPrice && (
                    <span className="text-gray-400 line-through text-base">
                      {el.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================== EMPTY STATE ================== */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          Bu kategoriya bo'yicha mahsulotlar topilmadi.
        </div>
      )}

      {/* ================== SWIPER NAVIGATION STYLE ================== */}
      <style>{`
        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: #ff6600;
        }
        
        .product-swiper .swiper-button-next:after,
        .product-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        
        .product-swiper .swiper-button-next:hover,
        .product-swiper .swiper-button-prev:hover {
          background: #ff6600;
          color: white;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default HomePage;