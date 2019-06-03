import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import code from '../images/code.svg';
import design from '../images/design.svg';
import circuit from '../images/hardware.svg';

const styles = () => ({
    container : {
        position: 'relative',
        display: 'flex',
        top: '75vh',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop:20,
    },
    containerDestop : {
        height:'20vh',
        display: 'flex',
    },
    containerMobile: {
        display:'block'
    },
    numberCircle : {
        width: 50,
        lineHeight: '50px',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: 30,
        border: '2px solid black'
    },
    descriptionText : {
        fontSize: 15,
        fontWeight: 200,
    },
    descriptionImg : {
        width:'100%',
    },
    descriptionImgMobile : {
        height:'30vw',
        marginBottom:50
    },
    descriptionImgDestop : {
        height:'80%',
    },
    descriptionImgWrapper : {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column',
        transition:'1s ease-out',
        opacity:0
    },
    descriptionImgWrapperMobile : {
    },
    descriptionImgWrapperDestop : {
    },
    descriptionImgWrapperAfter : {
        transform: 'translateY(-10vh)',
        opacity: 1
    }
})

class Sections extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            screenMobile: null,
            animateSection0: false,
            animateSection1: false,
            animateSection2: false
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
        // translate each container upon rendering 
        setTimeout(() => { this.setState({ animateSection0: true }) }, 500);
        setTimeout(() => { this.setState({ animateSection1: true }) }, 1500);
        setTimeout(() => { this.setState({ animateSection2: true }) }, 2500);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={[classes.container, this.state.screenMobile? classes.containerMobile : classes.containerDestop].join(' ')}>
                <div className={[this.state.animateSection0 ? classes.descriptionImgWrapperAfter : null, classes.descriptionImgWrapper, this.state.screenMobile ? classes.descriptionImgWrapperMobile : classes.descriptionImgWrapperDestop].join(' ')}>
                    <div className={classes.numberCircle}>1</div>
                    <p className={classes.descriptionText}>Multi-purpose Code</p>
                    <img src={code} className={[classes.descriptionImg, this.state.screenMobile ? classes.descriptionImgMobile : classes.descriptionImgDestop].join(' ')} />
                </div>
                <div className={[this.state.animateSection1 ? classes.descriptionImgWrapperAfter: null, classes.descriptionImgWrapper, this.state.screenMobile ? classes.descriptionImgWrapperMobile : classes.descriptionImgWrapperDestop].join(' ')}>
                    <div className={classes.numberCircle}>2</div>
                    <p className={classes.descriptionText}>Hardware Development</p>    
                    <img src={circuit} className={[classes.descriptionImg, this.state.screenMobile ? classes.descriptionImgMobile : classes.descriptionImgDestop].join(' ')} />
                </div>
                <div className={[this.state.animateSection2 ? classes.descriptionImgWrapperAfter : null, classes.descriptionImgWrapper, this.state.screenMobile ? classes.descriptionImgWrapperMobile : classes.descriptionImgWrapperDestop].join(' ')}>
                    <div className={classes.numberCircle}>3</div>
                    <p className={classes.descriptionText}>Design Principles</p> 
                    <img src={design} className={[classes.descriptionImg, this.state.screenMobile ? classes.descriptionImgMobile : classes.descriptionImgDestop].join(' ')} />
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Sections);