import React from 'react';

interface IConfig {
  height?: number | string;
  width?: number | string;
  name?: string;
  marginTop?: number | string;
  isTextArea?: boolean;
  placeholder?: string;
  value: string;
  onChange: (event: any) => void
}

function Input({
  height,
  width,
  isTextArea,
  marginTop,
  placeholder,
  name,
  value,
  onChange,
}: IConfig) {
  // Returns a textarea if isTextArea is eneabled otherwise returns an input.
  return (
    isTextArea
      ? (
        <textarea
          style={{
            width,
            height: height || 120,
            resize: 'none',
            marginTop,
            // This 3 properties makes input and text area with same width.
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
          }}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}

        />
      )
      : (
        <input
          style={{
            width,
            height,
            marginTop,
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
          }}
          name={name}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />
      )
  );
}

export default Input;
