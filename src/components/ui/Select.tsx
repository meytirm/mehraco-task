import ReactSelect, {
  type ClearIndicatorProps,
  components,
  type DropdownIndicatorProps,
  type GroupBase,
  type Props as ReactSelectProps,
} from 'react-select';
import { ChevronDownIcon, XIcon } from 'lucide-react';

export type DefaultOption = {
  label: string;
  value: string;
};

type BaseSelectProps<Option = DefaultOption, IsMulti extends boolean = false> = ReactSelectProps<
  Option,
  IsMulti,
  GroupBase<Option>
>;

// Custom Dropdown Indicator
function DropdownIndicator<Option = DefaultOption, IsMulti extends boolean = false>(
  props: DropdownIndicatorProps<Option, IsMulti>,
) {
  return (
    <components.DropdownIndicator {...props} className="cursor-pointer">
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
}

// Custom Clear Indicator
function ClearIndicator<Option = DefaultOption, IsMulti extends boolean = false>(
  props: ClearIndicatorProps<Option, IsMulti>,
) {
  return (
    <components.ClearIndicator {...props} className="cursor-pointer">
      <XIcon size={18} className="text-red-600" />
    </components.ClearIndicator>
  );
}

export function Select<Option = DefaultOption, IsMulti extends boolean = false>({
  ...props
}: BaseSelectProps<Option, IsMulti>) {
  return (
    <ReactSelect<Option, IsMulti, GroupBase<Option>>
      unstyled
      className="border border-divider rounded-2xl text-foreground"
      classNames={{
        indicatorsContainer: () => 'flex gap-1 ml-2',
        valueContainer: () => 'flex gap-2',
        multiValue: () => 'bg-divider text-foreground px-1 rounded-sm flex gap-2',
        multiValueRemove: () => 'text-muted cursor-pointer hover:text-red-600',
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
