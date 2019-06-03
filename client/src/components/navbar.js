import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BurgerIcon from './burgerIcon';

const styles = () => ({
    container : {
      width: '100%',
      top:0,
      height: '20vh',
      zIndex: 1000,
      display: 'flex',
      position: 'fixed',
      alignItems: 'center',
      transition: '1s ease-out',
      paddingLeft:50
    },
    containerBefore : {
      height: '10vh',
      backgroundColor: 'black',
      boxShadow: 'rgba(0, 0, 0, 0.5) 1px 2px 4px'
    },
    containerAfter : {
      height: '20vh',
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    title : {
      position:'absolute',
      fontSize: 25,
      margin:0
    },
    titleAfter : {
      color: 'white'
    },
    titleMobile : {
      left: '35%',
    },
    titleDestop : {
      left: '16%',
    }
});

class Navbar extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            screenMobile: null,
            colorChange: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.screenMobile!==prevState.screenMobile){
        return { screenMobile: nextProps.screenMobile};
      } else if ( nextProps.colorChange!==prevState.colorChange ){
        return { colorChange: nextProps.colorChange };
      }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
      if( prevProps.screenMobile!==this.props.screenMobile ){ 
        this.setState({ screenMobile: this.state.screenMobile });
      } else if ( prevProps.colorChange!==this.props.colorChange ){
        this.setState({ colorChange: this.state.colorChange });
      }
   }


   render() {
      const { classes } = this.props;
      return (
        <div id='container' className={[classes.container, this.state.colorChange? classes.containerBefore : classes.containerAfter].join(' ')}>
          <BurgerIcon handleSidebarOpen={this.props.handleSidebarOpen} active={false} colorChange={this.state.colorChange} />
          <p className={[this.state.colorChange? classes.titleAfter : null, classes.title, this.state.screenMobile ? classes.titleMobile : classes.titleDestop].join(' ')}> Varritech</p>
        </div>)
    }
}

export default withStyles(styles)(Navbar);