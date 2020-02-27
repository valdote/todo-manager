import React from 'react';
import TextField from '@material-ui/core/TextField';

interface IConfig {
  name?: string;
  marginTop?: number | string;
  isMultiline?: boolean;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (event: any) => void;
}

function Input({
  isMultiline,
  marginTop,
  placeholder,
  name,
  value,
  rows,
  onChange,
}: IConfig) {
  return (
    <TextField
      style={{
        marginTop,
        background: 'white',
        borderRadius: 5,
        padding: 5,
      }}
      multiline={isMultiline}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      rows={rows}
    />
  );
}

export default Input;
