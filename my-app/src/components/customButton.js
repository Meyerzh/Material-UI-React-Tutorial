import React, { Fragment } from 'react'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import LoadingButton from '@mui/lab/LoadingButton'
import { ButtonGroup } from '@mui/material'

function CustomButton() {
  return (
    <Fragment>
      <LoadingButton color="error" loading variant="outlined">
        Submit
      </LoadingButton>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <ButtonGroup variant="contained" color="error">
        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          onClick={() => alert('Hello')}
        >
          Hello World!!
        </Button>
        <Button>Hello World!!</Button>
        <Button>Hello World!!</Button>
        <Button>Hello World!!</Button>
      </ButtonGroup>
    </Fragment>
  )
}

export default CustomButton
