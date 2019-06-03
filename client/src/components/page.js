import React, { Component } from 'react';

const styles = () => ({
    wrapper : {
        position: 'relative',
        textAlign: 'center',
        height: '100vh'
    }
});

class Page extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            screenMobile: null
        };
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.screenMobile!==prevState.screenMobile){
          return { screenMobile: nextProps.screenMobile};
        }
          else return null;
      }
    componentDidUpdate(prevProps, prevState) {
      if(prevProps.screenMobile!==this.props.screenMobile){
        this.setState({screenMobile: this.state.screenMobile});
         }
   }
   render() {
    const { classes } = this.props;
    if (this.state.screenMobile){
      return (
          <div className={classes.wrapper}>
          </div>
          );
        }
    }
}

export default withStyles(styles)(Page);