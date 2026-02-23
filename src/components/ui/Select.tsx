import ReactSelect, {
  type ClearIndicatorProps,
  components,
  type DropdownIndicatorProps,
  type GroupBase,
  type Props as ReactSelectProps,
} from 'react-select';
import { ChevronDownIcon, XIcon } from 'lucide-react';

export type OptionType = {
  label: string;
  value: string;
};

type BaseSelectProps<IsMulti extends boolean = false> = ReactSelectProps<
  OptionType,
  IsMulti,
  GroupBase<OptionType>
>;

// Custom Dropdown Indicator
function DropdownIndicator<IsMulti extends boolean = false>(
  props: DropdownIndicatorProps<OptionType, IsMulti>,
) {
  return (
    <components.DropdownIndicator {...props} className="cursor-pointer">
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
}

// Custom Clear Indicator
function ClearIndicator<IsMulti extends boolean = false>(
  props: ClearIndicatorProps<OptionType, IsMulti>,
) {
  return (
    <components.ClearIndicator {...props} className="cursor-pointer">
      <XIcon size={18} className="text-red-600" />
    </components.ClearIndicator>
  );
}

export function Select<IsMulti extends boolean = false>({ ...props }: BaseSelectProps<IsMulti>) {
  return (
    <ReactSelect
      unstyled
      className="border border-divider rounded-2xl text-foreground"
      classNames={{
        indicatorsContainer: () => 'flex gap-1',
        control: () => 'px-4 py-3',
        menuList: () => 'border border-divider rounded-2xl py-1',
        option: (props) =>
          `px-4 py-1 ${
            props.isSelected
              ? 'bg-blue-500 text-white'
              : props.isFocused
                ? 'bg-gray-200 hover:bg-gray-300'
                : 'bg-white text-black hover:bg-gray-100'
          }`,
      }}
      {...props}
      components={{ DropdownIndicator, ClearIndicator }}
    />
  );
}
