import Image from 'next/image';
import React, { useCallback } from 'react';
import Button from '../../components/fragments/Common/Button';
import { HoverList } from '../../components/fragments/Common/HoverList';
import { dashboardOptions, orderTypeHoverListOptions } from '../../constants';
import { useBoolean } from '../../hooks/useBoolean';

const Dashboard = () => {
  const [modalIsOpen, { off: closeModal, on: openModal }] = useBoolean();
  const handleOptionClick = useCallback((idx: number) => {
    switch (idx) {
      case 0:
        openModal();
        break;
    }
    return;
  }, []);
  return (
    <div>
      <div className="grid grid-cols-dashboard-mobile sm:grid-cols-dashboard gap-x-5 gap-y-12 center max-w-[650px] w-full justify-center sm:mt-0 mt-8">
        {dashboardOptions.map((option, i) => (
          <Button
            prefix={<Image src={option.icon} alt={option.name} width={25} height={25} color={'white'} />}
            variant={'primary'}
            className={'flex-col bg-white shadow-card text-black h-[100px] hover:bg-primary'}
            onClick={handleOptionClick.bind(this, i)}
          >
            {option.name}
          </Button>
        ))}
      </div>
      <HoverList
        isOpen={modalIsOpen}
        onClose={closeModal}
        choices={orderTypeHoverListOptions}
        title={'Select Order Type'}
      />
    </div>
  );
};

export default Dashboard;
