import React, { useState } from 'react';

// interface IProps {
//
// }

function Input() {
  const [text, setText] = useState<string>('');

  function handleChange(event: any) {
    setText(event.target.value);
    console.log(event.target.value);
  }
  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
}

export default Input;
