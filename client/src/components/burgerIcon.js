import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  container : {
    display: 'inline-block',
    cursor: 'pointer',
    position:'fixed',
    zIndex: 1000
  },
  bar : {
    width: 30,
    height: 2,
    margin: '6px 0',
    transition: '0.4s',
  },
  barBefore : {
    backgroundColor: 'black',
  },
  barAfter : {
    backgroundColor: 'white',
  },
  bar1clicked : {
    transform: 'rotate(-45deg) translate(-9px, 6px)'
  },
  bar2clicked : {
    opacity: 0
  },
  bar3clicked : {
        transform: 'rotate(45deg) translate(-6px, -2px)'
  },
  bar1hover : {
    transform: 'translateY(-5px)'
  },
  bar3hover : {
        transform: 'translateY(5px)'
  }
});

class BurgerIcon extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            active: this.props.active,
            hover: false,
            colorChange: false,
        };
    }
    handleMouseEnter = () => {
      // hovering feature is disabled when used in sidebar
      if (!this.state.active){
        this.setState({
          hover: true
       })
      }
    }
    handleMouseLeave = () => {
      // hovering feature is disabled when used in sidebar
      if (!this.state.active){
        this.setState({
          hover: false
       })
      }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.screenMobile!==prevState.screenMobile){
          return { screenMobile: nextProps.screenMobile};
        } else if ( nextProps.colorChange!==prevState.colorChange ){
          return { colorChange: nextProps.colorChange };
        } else if ( nextProps.active!==prevState.active ){
          return { active: nextProps.active };
        } 
          else return null;
      }
  
      componentDidUpdate(prevProps, prevState) {
        if( prevProps.screenMobile!==this.props.screenMobile ){ 
          this.setState({ screenMobile: this.state.screenMobile });
        } else if ( prevProps.colorChange!==this.props.colorChange ){
          this.setState({ colorChange: this.state.colorChange });
        } else if ( prevProps.active!==this.props.active ){
          this.setState({ active: this.state.active });
        }
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.container} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} onClick={this.props.handleSidebarOpen}>
            <div className={[classes.bar, 
              this.state.colorChange && !this.state.active ? classes.barAfter: classes.barBefore, // disable color change in sidebar
              this.state.hover && !this.state.active ? classes.bar1hover : null, // disable hover in sidebar
              this.state.active ? classes.bar1clicked: null].join(' ')}/> 
            
            <div className={[classes.bar, 
              this.state.colorChange ? classes.barAfter: classes.barBefore,
              this.state.active  ? classes.bar2clicked : null].join(' ')}/>
            
            <div className={[classes.bar, 
              this.state.colorChange ? classes.barAfter: classes.barBefore,
              this.state.hover && !this.state.active ? classes.bar3hover : null, 
              this.state.active ? classes.bar3clicked : null].join(' ')}></div>
        </div>)
    }
}

export default withStyles(styles)(BurgerIcon);