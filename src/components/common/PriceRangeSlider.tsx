import React, { useEffect } from 'react';
import RangeSlider from '../ui/RangeSlider.tsx';
import { Input } from '../ui/Input.tsx';

export default function PriceRangeSlider({ min, max, onChange, values }: Readonly<Props>) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, minOrMax: 'min' | 'max') => {
    const target = e.target;
    if (target) {
      if (minOrMax === 'min') {
        if (+target.value < min) {
          onChange([min, values[1]]);
          return;
        }
        if (+target.value > max || +target.value > values[1]) {
          e.preventDefault();
          return;
        }
      } else {
        if (+target.value > max) {
          onChange([values[0], max]);
          return;
        }
        if (+target.value < min || +target.value < values[0]) {
          e.preventDefault();
          return;
        }
      }
      const newValues = { min: [+target.value, values[1]], max: [values[0], +target.value] };
      onChange(newValues[minOrMax]);
    }
  };

  useEffect(() => {
    onChange([min, max]);
  }, [min, max]);

  return (
    <div className="price-range-slider">
      <RangeSlider
        values={values}
        onChange={(value) => {
          onChange(value);
        }}
        min={min}
        max={max}
        step={1}
      />

      <div className="price-range-slider-inputs">
        <Input
          value={values[0]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInput(e, 'min');
          }}
        />
        <Input
          value={values[1]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e, 'max')}
        />
      </div>
    </div>
  );
}

interface Props {
  min: number;
  max: number;
  onChange: (values: number[]) => void;
  values: number[];
}
