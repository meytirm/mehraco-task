import { forwardRef, type ReactNode, useImperativeHandle, useRef, type MouseEvent } from 'react';

export interface DialogHandle {
  open: () => void;
  close: () => void;
}

interface DialogProps {
  children: ReactNode;
  onClose: () => void;
}

const Dialog = forwardRef<DialogHandle, DialogProps>(({ children, onClose }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  // Handle backdrop click
  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      close();
      onClose();
    }
  };

  const close = () => dialogRef.current?.close();

  return (
    <dialog ref={dialogRef} onClick={handleBackdropClick} className="dialog">
      <div className="dialog-content">{children}</div>
    </dialog>
  );
});

export default Dialog;
