import React, { useState } from 'react';
import Division from '../../../components/fragments/Common/Layout/Division';
import Layout from '../../../components/fragments/Common/Layout/Layout';
import SearchBar from '../../../components/fragments/Common/SearchBar';
import MenuItem from '../../../components/fragments/Dashboard/Menu/MenuItem';

const categories = ['Snacks & Dips', 'Starters', 'FlatBreads', 'Salads', 'Sides', 'Desserts', 'Breakfast', 'Addons'];
const menuItems = [
  {
    title: 'Mushroom Carpaccio',
    img: '/assets/images/menu.png',
  },
  {
    title: 'Smoked Salmon Platter',
    img: '/assets/images/menu.png',
  },
  {
    title: 'Veg Fritto Misto',
    img: '/assets/images/menu.png',
  },
  {
    title: 'Seafood Fritto Misto',
    img: '/assets/images/menu.png',
  },
  {
    title: 'Patatas Bravas',
    img: '/assets/images/menu.png',
  },
  {
    title: 'Bresaola',
    img: '/assets/images/menu.png',
  },
];

const Order = () => {
  const [menuCategory, setMenuCategory] = useState(categories[0]);
  const [menu, setMenu] = useState(menuItems);
  return (
    <Layout className="gap-[100px] h-screen p-[20px]">
      <Division division={5} className="p-2">
        <div className="w-full bg-white shadow-md text-center p-5">DINE IN</div>
        <div className="grid grid-cols-[3fr_1fr_1fr_1fr] mt-4 px-11 font-body font-bold text-[16px] text-grey-200 h-1/2">
          <div>Items</div>
          <div>Qty</div>
          <div>Price</div>
          <div>Amount</div>
        </div>
        <div className="h-[1px] w-full border border-[rgba(102, 102, 112, 0.3)] my-5" />
        <div className="grid grid-cols-2 px-11  text-center gap-y-5">
          <p className="text-grey-200 font-body font-medium text-sm uppercase">SubTotal</p>
          <p className="text-[#0055FF] text-sm font-medium font-body">₦0.00</p>
          <p className="text-grey-200 font-body font-medium text-sm uppercase">VAT</p>
          <p className="text-[#0055FF] text-sm font-medium font-body">₦0.00</p>
          <p className="text-grey-200 font-body font-medium text-sm uppercase">LAG C.TAX</p>
          <p className="text-[#0055FF] text-sm font-medium font-body">₦0.00</p>
          <p className="text-grey-200 font-body font-bold text-lg uppercase">TOTAL</p>
          <p className="text-[#0055FF] text-lg font-bold font-body">₦0.00</p>
        </div>
      </Division>
      <Division division={1} className={'flex flex-col gap-3 h-full'}>
        {categories.map((category, i) => (
          <div
            key={i}
            className={`h-[100px] w-[200px] active:bg-[#FF8F00] ${
              menuCategory == category ? 'bg-[#FF8F00] text-white' : 'text-grey-200'
            } hover:bg-[#ff9100c9] flex 
                        justify-center items-center hover:text-white
                        font-body font-bold text-xl uppercase rounded-lg`}
            style={{ fontVariant: 'small-caps' }}
            onClick={setMenuCategory.bind(this, category)}
          >
            {category}
          </div>
        ))}
      </Division>
      <Division division={4} className="p-[25px]">
        <SearchBar />
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-[40px]">
          {menu.map((item, i) => (
            <MenuItem key={i} img={item.img} title={item.title} className={'w-[300px]'} />
          ))}
        </div>
      </Division>
    </Layout>
  );
};

export default Order;
