import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People'
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    field: this.props.field,
    placeholder: this.props.placeholder,
    value: this.props.value
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.value!==prevState.value){
      return { value: nextProps.value};
    }
      else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.value!==this.props.value){
      this.setState({value: this.state.value});
    }
  }

  render() {
      const { classes } = this.props;
      if (this.state.field === 'email'){
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label={this.state.field}
            className={classes.textField}
            value={this.state.value}
            placeholder={this.state.placeholder}
            onChange={this.props.handleChange(this.state.field)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
            ),
          }}
          />
        </form>
      );
    } else if (this.state.field === 'name'){
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label={this.state.field}
            className={classes.textField}
            value={this.state.value}
            placeholder={this.state.placeholder}
            onChange={this.props.handleChange(this.state.field)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
          />
          </form>
          );
    }
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);