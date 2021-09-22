import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { filterByPrice } from '../../Redux/Actions/filterActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: "80%",
    color: "rgb(105, 97, 97)",
    paddingLeft: "0.5rem"
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterPrice({valuePrice}) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [value, setValue] = React.useState(valuePrice||[10, 20]);

  useEffect(() => {
    if(!valuePrice[0] && !valuePrice[1]){
    setValue([5, 10])}// eslint-disable-next-line
  }, [valuePrice])

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
          Valor alquiler
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
          min={5}
          max={80}
          marks={[{
            value: 5,
            label: '$5.000',
          },
          {
            value: 40,
            label: '$40.000',
          },
          {
            value: 80,
            label: '$80.000',
          }]}
        />
      </div>
      <div>

      </div>
    </div>
  );
}