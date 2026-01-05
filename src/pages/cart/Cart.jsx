import React from 'react';

const Cart = () => {
  return (
    <div className=" container mx-auto px-4 mt-20 flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6 ">
          Ваш заказ
        </h1>
      <div className='flex flex-col justify-center max-w-200 bg-gray-400 p-10 rounded-2xl md:flex-row items-stretch md:items-center gap-4 md:gap-6 mb-8'>
        
         <div className="flex-1 flex items-center bg-gray-50 rounded-xl w-full px-4 py-4 border-2 border-gray-200 focus-within:border-orange-400 transition-colors">
              <input
                type="text"
                placeholder="Адрес"
                className="flex-1 bg-transparent outline-none  text-gray-700 placeholder-gray-400 text-base"
              />
            </div>
      </div>
    </div>
  );
};

export default Cart;