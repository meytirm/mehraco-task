import React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface RangeSliderProps {
  values: number[];
  onChange: (values: number[]) => void;

  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;

  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  values,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        disabled={disabled}
        onChange={onChange}
        renderTrack={({ props, children }) => {
          return (
            <div
              {...props}
              className="h-2 w-full rounded-full relative"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ['#e5e7eb', '#3b82f6', '#e5e7eb'],
                  min,
                  max,
                }),
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props, index }) => {
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              className="h-5 w-5 bg-white border-2 border-blue-500 rounded-full shadow-md focus:outline-none"
            >
              <div className="absolute -top-6 text-xs text-gray-700">{values[index]}</div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default RangeSlider;
