import Image from 'next/image';
import { BiLogOut } from 'react-icons/bi';
import Button from '../../Common/Button';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between p-6 shadow">
      <Image src="/assets/images/logo.png" alt="Restaurant Logo" width={200} height={46} className="ml-auto" />
      <Button variant="danger" prefix={<BiLogOut />} className="ml-auto bg-danger">
        Logout
      </Button>
    </div>
  );
};

export default DashboardHeader;
