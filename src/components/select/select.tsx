import { useState } from 'react';
import css from './select.module.scss';
import {
  MenuItem,
  Typography,
  Select as MuiSelect,
  type SelectChangeEvent,
} from '@mui/material';

export interface SelectProps<T extends string> {
  initialValue: T;
  label?: string;
  onChange?: (value: T) => void;
  options: { value: T; text: string }[];
}

export const Select = <T extends string>({
  initialValue,
  options,
  label,
  onChange,
}: SelectProps<T>) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: SelectChangeEvent<T>) => {
    setValue(e.target.value as T);
    onChange?.(e.target.value as T);
  };
  return (
    <div className={css.Select}>
      <Typography>{label}</Typography>
      <MuiSelect value={value} onChange={(e) => handleChange(e)} autoWidth>
        {options.map((option) => (
          <MenuItem value={option.value}>{option.text}</MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
};
