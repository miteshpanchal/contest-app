import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position: "relative",
    top: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Question() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom>
          Question 1
        </Typography>
        <Typography variant='h5' component='h2'>
          What is the full form of RAM ?
        </Typography>
        <FormControl component='fieldset'>
          
          <RadioGroup
            aria-label='gender'
            name='gender1'
            value={value}
            onChange={handleChange}>
            <FormControlLabel
              value='Random Accessible Memory'
              control={<Radio />}
              label='Random Accessible Memory'
            />
            <FormControlLabel value='Random Auto Memory' control={<Radio />} label='Random Axios Memory' />
            <FormControlLabel value='3' control={<Radio />} label='Random Auto Memory' />
            <FormControlLabel
              value="Random Audible Memory"
              control={<Radio />}
              label='Random Audible Memory'
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}




