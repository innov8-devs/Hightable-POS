import React from 'react';
import Division from '../../../components/fragments/Common/Layout/Division';
import Layout from '../../../components/fragments/Common/Layout/Layout';

const Order = () => {
  return (
    <Layout className="gap-[100px] h-screen">
      <Division division={2} className="">
        <div className="w-full bg-white shadow-[0px,1px,13px,rgba(78, 51, 0, 0.11)] text-center p-5">DINE IN</div>
      </Division>
      <Division division={3}>2</Division>
    </Layout>
  );
};

export default Order;
