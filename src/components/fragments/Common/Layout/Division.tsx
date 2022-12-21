import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  division: number;
}

const Division: FC<Props> = ({ children, division, className, ...props }) => {
  return (
    <div className={`${className}`} style={{ flex: division }} {...props}>
      {children}
    </div>
  );
};

export default Division;
