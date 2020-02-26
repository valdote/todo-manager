import React from 'react';

interface IButtonConfig {
  title?: string;
  display?: string;
  marginTop?: string | number;
}

function Button({ title, display, marginTop }: IButtonConfig) {
  return (

    <input style={{ display, marginTop }} type="submit" value={title} />

  );
}

export default Button;
