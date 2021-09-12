import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { filterByConstant } from '../../Redux/Actions/filterActions';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "80%",
  },
}));

export default function FilterModel({list, title, constant, value}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [concept, setConcept] = React.useState(value||"");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setConcept(value)// eslint-disable-next-line
  }, [value])


  const handleChange = (event) => {
    setConcept(event.target.value);
    dispatch(filterByConstant(constant,event.target.value))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={concept}
          onChange={handleChange}
        >
          <MenuItem value={null}>
            <em>Cualquier</em>
          </MenuItem>
          {list.map(e=>
            <MenuItem value={e} key={e} >{e}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}