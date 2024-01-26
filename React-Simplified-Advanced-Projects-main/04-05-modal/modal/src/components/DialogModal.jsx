import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function DialogModal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;

    dialog.addEventListener('close', onClose);

    return () => {
      dialog.removeEventListener('close', onClose);
    };
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const handleOutsideClick = (e) => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    };

    dialog.addEventListener('click', handleOutsideClick);

    return () => {
      dialog.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.querySelector('#modal-container')
  );
}
