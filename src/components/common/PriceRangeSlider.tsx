import React, { useState } from 'react';
import RangeSlider from '../ui/RangeSlider.tsx';
import { Input } from '../ui/Input.tsx';

export default function PriceRangeSlider({ min = 0, max = 1 }: Readonly<Props>) {
  const [values, setValues] = useState<number[]>([min, max]);

  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target) {
      setValues((values) => [Number(target.value), values[1]]);
    }
  };

  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target) {
      setValues((values) => [values[0], Number(target.value)]);
    }
  };

  return (
    <div className="price-range-slider">
      <RangeSlider values={values} onChange={setValues} min={min} max={max} step={1} />

      <div className="price-range-slider-inputs">
        <Input
          value={values[0]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMinInput(e)}
        />
        <Input
          value={values[1]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMaxInput(e)}
        />
      </div>

      <div className="price-range-slider-values">
        <span>Min: ${values[0]}</span>
        <span>Max: ${values[1]}</span>
      </div>
    </div>
  );
}

interface Props {
  min: number;
  max: number;
}
