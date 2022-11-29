import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const ModalBody: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalBody;
