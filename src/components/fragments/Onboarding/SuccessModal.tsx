import router from 'next/router';
import { FC } from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import Button from '../Common/Button';
import { Modal } from '../Common/Modal';
import ModalBody from '../Common/Modal/ModalBody';
import ModalHeader from '../Common/Modal/ModalHeader';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="pl-[100px] pr-[20px]">
        <h1 className="font-title text-grey-200 text-[22px] font-semibold">User Clock In</h1>
      </ModalHeader>
      <ModalBody>
        <div className="h-[340px] flex justify-center items-center flex-col">
          <p className="font-title text-grey-200 text-[22px] font-semibold mb-16 w-96 text-center">
            cashier@slow clocked in successfully as at 01/09/2022, 03:00PM
          </p>
          <Button
            variant="primary"
            prefix={<BsFillCheckSquareFill />}
            className={'w-36'}
            onClick={() => {
              onClose();
              router.push('/dashboard');
            }}
          >
            OK
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default SuccessModal;
