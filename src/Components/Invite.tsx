import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import SelectRole from './SelectRole';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function Invite() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <div style={{ display:'flex', position:'relative',  top: 300, left: 500}}>
      <FormControl className={classes.margin}>
          Email
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
     
      <FormControl className={classes.margin}>
        <SelectRole/>
      </FormControl>
    
</div>
<div  style={{ display:'flex', position:'relative',  top: 254, left: 950}}>

{/* BUTON ACCEPT SELECTED */}
 <Button variant="outlined" color="primary" onClick={handleClickOpen}>
  Invite
</Button>
<Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <DialogTitle id="alert-dialog-title">{"CONFIRMARE?"}</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Sunteti sigur ca rolul e bun?
    </DialogContentText>
  </DialogContent> 
  <DialogActions>
  <Button onClick={handleClose} color="primary" autoFocus>
      Agree
    </Button>
    <Button onClick={handleClose} color="primary">
      Disagree
    </Button>
  </DialogActions>
</Dialog>
{/* BUTON ACCEPT SELECTED */}
</div> 


    </div>
  );
}
