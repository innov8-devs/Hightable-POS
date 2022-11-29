import router from 'next/router';
import { createContext, FC, ReactNode, useEffect } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Portal from '../Portal';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'base' | 'md' | 'lg' | 'xl';
  delay?: number;
  closeRedirect?: string;
  className?: string;
}

export const modalContext = createContext({
  isOpen: false,
  onClose: () => {},
});

const Modal: FC<Props> = ({
  children,
  isOpen,
  onClose,
  size = 'base',
  delay = -1,
  closeRedirect = '',
  className = '',
}) => {
  const closeModal = () => {
    onClose();
    closeRedirect && router.push(closeRedirect);
  };
  const ref = useDetectClickOutside({ onTriggered: closeModal });

  useEffect(() => {
    if (delay > 0 && isOpen) {
      const timeout = setTimeout(closeModal, delay);
      return () => clearTimeout(timeout);
    }
  }, [delay, isOpen]);

  if (!isOpen) return null;
  return (
    <Portal>
      <modalContext.Provider value={{ isOpen, onClose: closeModal }}>
        <div className="bg-[#0000008e] absolute w-screen h-screen top-0 flex pt-[100px] justify-center">
          <div ref={ref} className={`${size}-modal h-fit bg-white p-2 ${className}`}>
            {children}
          </div>
        </div>
      </modalContext.Provider>
    </Portal>
  );
};

export default Modal;
