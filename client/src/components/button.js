import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container : {
    display: 'flex',
    justifyContent:'center'
  },
  root: {
    width:'20vw'
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Button onClick={props.handleClick} size="large" variant="outlined" color="secondary" className={classes.button}>
        {props.name}
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);