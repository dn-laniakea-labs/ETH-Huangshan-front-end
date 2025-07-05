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
  return <select className="py-3 px-4 pe-9 block w-full rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600" value={selectedId} onChange={({ target: { value } }) => onChange?.(value)}>
    {placeholder && (
      <option value="" disabled hidden>
        {placeholder}
      </option>
    )}
    {options.map(({ id, name }) =>
      <option key={id} value={id} className="bg-gray-700 hover:bg-neutral-400">{name}</option>
    )}
  </select>
}
