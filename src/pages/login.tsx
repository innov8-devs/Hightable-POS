import Input from '../components/fragments/Input';
import { BsPerson } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';
import { useRef } from 'react';

const Login = () => {
  const emailRef = useRef<HTMLInputElement | any>();
  const passwordRef = useRef<HTMLInputElement | any>();

  const addText = (text: string) => {
    if (emailRef?.current) {
      emailRef.current.value += text;
      emailRef.current.focus();
    }
  };

  return (
    <div className="flex max-w-limit mx-auto items-center h-screen justify-center gap-[5vw] flex-col sm:flex-row p-2">
      <div className="flex flex-col items-center">
        <img src="/assets/images/logo.png" alt="" />
        <h3 className="text-[40px] font-bold m-0">03:00 PM</h3>
        <h5 className="text-[17px] m-0 mt-1">Monday May 30, 2022</h5>
      </div>
      <div className="bg-[#351E00] p-8 text-white">
        <h3 className="font-title text-[24px] font-semibold text-center mb-6">Log in to your business</h3>
        <Input
          placeholder="Email"
          className="p-2"
          icon={<BsPerson color="#000" size={24} />}
          inputGroupStyles="mb-2 rounded-md"
          ref={emailRef}
        />
        <Input
          placeholder="Password"
          className="p-2"
          icon={<BiLock color="#000" size={24} />}
          inputGroupStyles="mb-2 rounded-md"
          ref={passwordRef}
        />
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            1
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            2
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            3
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            4
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            5
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            6
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            7
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            8
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            9
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            Back
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            0
          </button>
          <button className="bg-white p-4 text-black text-[18px] font-bold text-center rounded-[8px] hover:bg-[#f0f0f0]">
            Clear
          </button>
        </div>
        <button className="bg-primary w-full p-4 mt-2 rounded-[8px]">Log In</button>
      </div>
    </div>
  );
};

export default Login;
