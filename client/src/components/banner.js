import React, { Component } from 'react';
import banner from '../images/banner1.jpg';
import { withStyles } from '@material-ui/core/styles';
import Sections from './sections';

const styles = () => ({
    wrapper : {
        position: 'relative',
        textAlign: 'center',
        height: '100vh'
    },
    text : {
        position: 'absolute',
        top: '35%',
        left: '5%',
        fontSize:30,
        fontWeight:200,
        margin:0,
        textAlign:'left',
        zIndex: 500,
        transition:'1s ease-out',
    },
    textMobile : {
    },
    textDestop : {
    },
    title : {
        position: 'absolute',
        top: '22%',
        left: '30%',
        fontWeight:200,
        margin:0,
        textAlign:'left',
        fontSize: 60,
        zIndex: 1000,
        transition:'1s ease-out',
    },
    textAfter : {
        left: '17%'
    },
    banner : {
        backgroundImage:'url('+banner+')',
        maxWidth:'100%',
        opacity:0.3,
        backgroundBlendMode:'overlay',
        width:'100%',
        height:'100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'absolute',
        transition: 'opacity 1.5s ease-out'
    },
});

class Banner extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            screenMobile: null,
            animateText: false
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
    componentDidMount() {
        // translate header text upon first rendering 
        setTimeout(() => { this.setState({ animateText: true }) }, 500);
    }
    render() {
      const { classes } = this.props;
      if (this.state.screenMobile){
        return (
            <div className={classes.wrapper}>
                <p className={[this.state.animateText? classes.textAfter : null, classes.title, this.state.screenMobile ? classes.textMobile : classes.textDestop].join(' ')}> Want to learn Tech? </p> 
                <p className={[this.state.animateText? classes.textAfter : null, classes.text, this.state.screenMobile ? classes.textMobile : classes.textDestop].join(' ')}> We've got you covered.</p> 
                <div className={classes.banner} alt='Data Banner' />
                <Sections />
            </div>
        );
      } else {
        return (
            <div className={[classes.wrapper,this.state.screenMobile ? classes.wrapperMobile : classes.wrapperDestop].join(' ')}> 
                <p className={[this.state.animateText? classes.textAfter : null, classes.title, this.state.screenMobile ? classes.textMobile : classes.textDestop].join(' ')}> Want to learn Tech? </p> 
                <p className={[this.state.animateText? classes.textAfter : null, classes.text, this.state.screenMobile ? classes.textMobile : classes.textDestop].join(' ')}> We've got you covered.</p> 
                <div className={classes.banner} alt='Data Banner' />
                <Sections />
            </div>
            );
        }
    }
}

export default withStyles(styles)(Banner);