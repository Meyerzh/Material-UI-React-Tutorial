import React, { Fragment } from 'react';
import Button from '@mui/material/Button';

function CustomButton () {
  return (
    <Fragment>
      <Button variant='contained' onClick={()=>alert('Hello')}>Hello World!!</Button>
      <Button variant='text' color="secondary">Hello World!!</Button>
      <Button variant='string' color="success">Hello World!!</Button>
      <Button variant='contained' fullWidth={true} color="error">Hello World!!</Button>
    </Fragment>
  )
}

export default CustomButton;