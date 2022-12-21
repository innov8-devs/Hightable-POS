import { Router } from 'next/router';
import { FC, ReactNode } from 'react';
import DashboardHeader from '../fragments/Dashboard/Global/Header';

type Props = {
  children?: ReactNode;
  router?: Router;
};

const BaseLayout: FC<Props> = ({ children, router }) => {
  return (
    <div className="flex flex-col">
      {router?.pathname?.includes('/dashboard') && <DashboardHeader />}
      <div className="main_content">{children}</div>
    </div>
  );
};

export default BaseLayout;
