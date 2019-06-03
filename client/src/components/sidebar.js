import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BurgerIcon from './burgerIcon';
import varritechIcon from '../images/varritech1.png'

const styles = () => ({
    sideContainer : {
        position: 'absolute',
        left:0,
        height: '100vh',
        padding: '8vh 60px 57px 42px',
        maxWidth: 'calc(100% - 30px)',
        width: '16%',
        transition: '.5s ease'
    },
    container : {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 2000,
        transition: '.5s ease'
    },
    background : {
        backgroundColor : '#fff',
    },
    textDiv : {
        position:'absolute',
        top:'15%'
    },
    imageDiv : {
        width:'50%'
    },
    showContainer : {
        backgroundColor: 'rgba(0,0,0,0.3)',
        transform:'translateY(0%)',
    },
    showSideContainer : {
        transform:'translateY(0%)',
    },
    hideContainer : {
        backgroundColor:'transparent',
        transform:'translateY(-100%)',
    },
    hideSideContainer : {
        transform:'translateY(-100%)',
    }
});

class Sidebar extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            active: false,
            screenMobile: false
        };
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.screenMobile!==prevState.screenMobile){
          return { screenMobile: nextProps.screenMobile};
        } else if ( nextProps.active!==prevState.active ){
          return { active: nextProps.active };
        } 
          else return null;
      }
  
      componentDidUpdate(prevProps, prevState) {
        if( prevProps.screenMobile!==this.props.screenMobile ){ 
          this.setState({ screenMobile: this.state.screenMobile });
        } else if ( prevProps.active!==this.props.active ){
          this.setState({ active: this.state.active });
        }
    }

    render() {
        const { classes } = this.props;
        return (
        <div className={[this.state.active ? classes.showContainer : classes.hideContainer, classes.container].join(" ")}>
            <div className={[this.state.active ? classes.showSideContainer : classes.hideSideContainer, classes.sideContainer, classes.background].join(" ")}>
                <BurgerIcon handleSidebarOpen={this.props.handleSidebarOpen} active={this.state.active}/>
                    <div className={classes.textDiv}>
                    <p style={{fontSize: 25,fontWeight: 600, textAlign: 'left'}}>Blogs</p>
                    <p style={{fontSize: 25,fontWeight: 600, textAlign: 'left'}}>About</p>
                    <p style={{fontSize: 25,fontWeight: 600, textAlign: 'left'}}>Facebook</p>
                    <p style={{fontSize: 25,fontWeight: 600, textAlign: 'left'}}>Instagram</p>
                    <p style={{fontSize: 25,fontWeight: 600, textAlign: 'left'}}>Youtube</p>
                    <p style={{fontSize: 25,fontWeight: 600, textAlign: 'left'}}>Contact</p>
                    <img src={varritechIcon} className={classes.imageDiv} />
                </div>            
            </div>
        </div>)
    }
}


export default withStyles(styles)(Sidebar);