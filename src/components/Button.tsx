import React from 'react';
import Button from '@material-ui/core/Button';

interface IButtonConfig {
  title?: string;
  display?: string;
  marginTop?: string | number;
}

function MyButton({ title, marginTop }: IButtonConfig) {
  return (
    <Button style={{ marginTop }} type="submit" variant="contained" color="default">
      {title}
    </Button>
  );
}

export default MyButton;
