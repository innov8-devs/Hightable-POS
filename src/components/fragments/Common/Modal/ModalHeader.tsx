import { FC, ReactNode, useContext } from 'react';
import { BiX } from 'react-icons/bi';
import { modalContext } from './Modal';

interface Props {
  children?: ReactNode;
  className?: string;
}

const ModalHeader: FC<Props> = ({ children, className = '' }) => {
  const { onClose } = useContext(modalContext);
  return (
    <div className={`h-6 flex justify-between ${className}`}>
      <div>{children}</div>
      <BiX onClick={onClose} size={30} cursor={'pointer'} />
    </div>
  );
};

export default ModalHeader;
