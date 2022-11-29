import React, { FC, ReactNode } from 'react';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon?: ReactNode;
  inputGroupStyles?: string;
}

const Input = React.forwardRef(({ icon, inputGroupStyles, ...props }: Props, ref: Props['ref']) => {
  return (
    <div className={`w-full ${inputGroupStyles} bg-white flex items-center ${icon && 'px-4'}`}>
      <span className="p-inputgroup-addon">{icon}</span>
      <input
        {...props}
        ref={ref}
        style={{
          outline: 'none',
          border: 'none',
          color: '#000',
        }}
      />
    </div>
  );
});

export default Input;
