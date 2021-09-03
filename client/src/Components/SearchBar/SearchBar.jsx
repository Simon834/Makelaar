
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { useDispatch } from 'react-redux';
import { searchAction } from '../../Redux/Actions/filterActions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "83%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    dispatch(searchAction(input))
    setInput("")
  }

  function resetSearch(e){
    e.preventDefault()
    dispatch(searchAction(null))
    setInput("")
  }


  return (
    <Paper component="form" className={classes.root} onSubmit={e=>handleSubmit(e)}>
      <InputBase
        className={classes.input}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={e=>setInput(e.target.value)}
        value={input}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={e=>resetSearch(e)}>
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}