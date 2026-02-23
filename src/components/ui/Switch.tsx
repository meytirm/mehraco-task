import { useState } from 'react';

interface SwitchProps {
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export function Switch({ label, value = false, onChange }: Readonly<SwitchProps>) {
  const [isOn, setIsOn] = useState<boolean>(value);

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="switch-container">
      <span className="switch-label">{label}</span>
      <div className={`switch ${isOn ? 'on' : ''}`} onClick={toggleSwitch}>
        <div className="switch-toggle"></div>
      </div>
    </div>
  );
}
