import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string;
  title: string;
}

const MenuItem = ({ img, title, className, ...props }: Props) => {
  return (
    <div className={`relative rounded-b-[10px] ${className}`} {...props}>
      <img src={img} alt="Image" className="w-full h-full" />
      <div
        className="absolute w-full p-6 text-center bottom-0 left-0 text-grey-200
                   font-body font-bold text-base uppercase rounded-lg bg-[rgba(255,_255,_255,_0.8)] backdrop-blur-[2px]"
      >
        {title}
      </div>
    </div>
  );
};

export default MenuItem;
