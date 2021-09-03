import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { filterByPrice } from '../../Redux/Actions/filterActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterPrice() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [value, setValue] = React.useState([null, null]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(filterByPrice([...value]))
  };

  function reset(){
    setValue([null, null]);
    dispatch(filterByPrice([null, null]))
  }

  return (
    <div className={classes.root}>
      <div>
        <Typography id="range-slider" gutterBottom>
          Precio x1000
          <IconButton aria-label="delete" onClick={()=>reset()}>
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </Typography>

        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={10}
          max={110}
        />
      </div>
      <div>

      </div>
    </div>
  );
}