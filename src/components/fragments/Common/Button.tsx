import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { buttonVariantStyle } from '../../../constants';

interface Props
  extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'prefix' | 'suffix'> {
  children?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'unstyled';
}

const Button: FC<Props> = ({ children, className = '', variant = 'unstyled', prefix, suffix, ...props }) => {
  return (
    <button className={`${buttonVariantStyle[variant]} flex items-center justify-center ${className}`} {...props}>
      {prefix}
      <div className="mr-2" />
      {children}
      <div className="mr-2" />
      {suffix}
    </button>
  );
};

export default Button;
