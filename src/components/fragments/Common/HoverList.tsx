import Link from 'next/link';
import { FC } from 'react';
import Portal from './Portal';

interface Choice {
  title: string;
  path: string;
}

interface Props {
  title: string;
  choices: Choice[];
}

export const HoverList: FC<Props> = ({ title, choices }) => {
  return (
    <Portal>
      <div className="bg-[#0000008e] absolute w-screen h-screen top-0 flex pt-[100px] justify-center">
        <h1 className="text-white font-bold">{title}</h1>
        {choices.map((choice, i) => (
          <Link passHref href={choice.path}>
            <a className="w-14 p-4 flex items-center justify-center">{choice.title}</a>
          </Link>
        ))}
      </div>
    </Portal>
  );
};
