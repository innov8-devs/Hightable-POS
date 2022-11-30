import Link from 'next/link';
import { FC } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Portal from './Portal';

interface Choice {
  title: string;
  path: string;
}

interface Props {
  title: string;
  choices: Choice[];
  isOpen: boolean;
  onClose: () => void;
}

export const HoverList: FC<Props> = ({ title, choices, onClose, isOpen }) => {
  const ref = useDetectClickOutside({ onTriggered: onClose });

  if (!isOpen) return null;
  return (
    <Portal>
      <div className="bg-[#000000b7] absolute w-screen h-screen top-0 flex items-center justify-center">
        <div ref={ref} className="w-[700px]">
          <h1 className="text-white font-bold text-center text-[30px] uppercase">{title}</h1>
          {choices.map((choice, i) => (
            <Link
              passHref
              href={choice.path}
              className="p-4 flex items-center justify-center bg-white w-full rounded m-2 font-body text-grey-200 text-[20px] font-bold hover:bg-grey-100"
            >
              {choice.title}
            </Link>
          ))}
        </div>
      </div>
    </Portal>
  );
};
