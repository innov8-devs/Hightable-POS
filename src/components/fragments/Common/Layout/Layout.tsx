import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  direction?: 'col' | 'row';
}

const Layout = ({ children, direction = 'row', className, ...props }: Props) => {
  return (
    <div className={`flex flex-col sm:flex-${direction} w-full ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Layout;
