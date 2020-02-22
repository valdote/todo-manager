import React from 'react';

interface IButtonConfig {
  title?: string;
}

function Button({ title }: IButtonConfig) {
  return (
    <input type="submit" value={title} />
  );
}

export default Button;
