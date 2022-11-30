import { useBoolean } from '../hooks/useBoolean';
import SuccessModal from '../components/fragments/Onboarding/SuccessModal';

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
      <SuccessModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
};

export default ClockIng;
