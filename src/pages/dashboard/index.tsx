import Image from 'next/image';
import React from 'react';
import Button from '../../components/fragments/Common/Button';
import { dashboardOptions } from '../../constants';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-dashboard-mobile sm:grid-cols-dashboard gap-x-5 gap-y-12 center max-w-[650px] w-full justify-center sm:mt-0 mt-8">
      {dashboardOptions.map((option, i) => (
        <Button
          prefix={<Image src={option.icon} alt={option.name} width={25} height={25} color={'white'} />}
          variant={'primary'}
          className={'flex-col bg-white shadow-card text-black h-[100px] hover:bg-primary'}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};

export default Dashboard;
