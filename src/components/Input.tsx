import React, { useState } from 'react';

interface IConfig {
  height?: number | string;
  width?: number | string;
  marginTop?: number | string;
  isTextArea?: boolean;
  placeholder?: string;
}

function Input({
  height, width, isTextArea, marginTop, placeholder,
}: IConfig) {
  const [text, setText] = useState<string>('');

  function handleChange(event: any) {
    setText(event.target.value);
  }

  // Returns a textarea if isTextArea is eneabled otherwise returns an input.
  return (
    isTextArea
      ? (
        <textarea
          style={{
            width: width || undefined,
            height: height || 120,
            resize: 'none',
            marginTop: marginTop || undefined,
          }}
          placeholder={placeholder}
          value={text}
          onChange={handleChange}

        />
      )
      : (
        <input
          style={{
            width: width || undefined,
            height: height || undefined,
            marginTop: marginTop || undefined,
          }}
          placeholder={placeholder}
          type="text"
          value={text}
          onChange={handleChange}
        />
      )
  );
}

export default Input;
