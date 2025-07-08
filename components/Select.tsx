import { ChangeEventHandler, FC } from "react";

export interface Option {
  id: string,
  name: string,
}

export interface SelectProps {
  placeholder?: string;
  options: Option[];
  selectedId?: string;
  onChange?: (id: string) => any;
}

export const Select: FC<SelectProps> = ({ placeholder = 'Please Select', options, selectedId, onChange }) => {
  return <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={selectedId} onChange={({ target: { value } }) => onChange?.(value)}>
    {placeholder && (
      <option value="" disabled hidden>
        {placeholder}
      </option>
    )}
    {options.map(({ id, name }) =>
      <option key={id} value={id} className="">{name}</option>
    )}
  </select>
}
