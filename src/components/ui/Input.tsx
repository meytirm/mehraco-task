import { type InputHTMLAttributes, type ReactNode, useRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prepend?: ReactNode;
  append?: ReactNode;
};

export function Input({ prepend, append, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function inputFocus() {
    if (inputRef.current) inputRef.current.focus();
  }
  return (
    <div className="input-wrapper" onClick={inputFocus}>
      {prepend && <div className="input-prepend">{prepend}</div>}

      <input className="input-field" type="text" {...props} ref={inputRef} />

      {append && <div className="input-append">{append}</div>}
    </div>
  );
}
