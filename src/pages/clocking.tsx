import { BsFillCheckSquareFill } from 'react-icons/bs';
import Button from '../components/fragments/Common/Button';
import { Modal } from '../components/fragments/Common/Modal';
import ModalBody from '../components/fragments/Common/Modal/ModalBody';
import ModalHeader from '../components/fragments/Common/Modal/ModalHeader';
import { useBoolean } from '../hooks/useBoolean';

const ClockIng = () => {
  const [modalIsOpen, { off: closeModal, on: openModal }] = useBoolean();
  return (
    <div className="flex max-w-limit mx-auto items-center h-screen justify-center gap-2 flex-col">
      <img src="/assets/images/logo.png" alt="" />
      <h3 className="text-[40px] font-bold m-0">03:00 PM</h3>
      <h5 className="text-[17px] m-0 mt-1">Monday May 30, 2022</h5>
      <p className="tracking-wider">NOT YET CLOCKED IN</p>
      <div className="flex gap-4 mt-4">
        <button
          className="py-8 px-12 bg-primary hover:bg-[#FF8F00AA] text-white font-bold rounded-md"
          onClick={openModal}
        >
          Clock-In
        </button>
        <button className="py-8 px-12 bg-white text-grey-100 font-bold rounded-md" disabled={true}>
          Clock-Out
        </button>
      </div>
      <Modal size="xl" isOpen={modalIsOpen} onClose={closeModal} closeRedirect={'/activities'}>
        <ModalHeader className="pl-[100px] pr-[20px]">
          <h1 className="font-title text-grey-200 text-[22px] font-semibold">User Clock In</h1>
        </ModalHeader>
        <ModalBody>
          <div className="h-[340px] flex justify-center items-center flex-col">
            <p className="font-title text-grey-200 text-[22px] font-semibold mb-16 w-96 text-center">
              cashier@slow clocked in successfully as at 01/09/2022, 03:00PM
            </p>
            <Button variant="primary" prefix={<BsFillCheckSquareFill />} className={'w-36'}>
              OK
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ClockIng;
