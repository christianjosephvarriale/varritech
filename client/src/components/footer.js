import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'

const styles = () => ({
    container: {
        position: 'relative',
        padding:30,
        backgroundColor: 'black'
    },
    containerMobile : {
        display:'block'
    },
    containerDestop : {
        display:'flex',
    },
    title : {
        color:'#006ef4',
        fontSize: 35,
        margin:0,
    },
    descriptionText1 : {
        fontSize: 17,
        fontWeight: 200,
        color: '#7f7f7f',
        margin:0,
        marginTop:5
    },
    descriptionText2 : {
        fontSize: 20,
        fontWeight: 200,
        color: '#006ef4',
        margin:0,
    },
    descriptionText3 : {
        fontWeight: 200,
        color: '#7f7f7f',
        margin:0,
        marginLeft:5
    },
    descriptionText3Mobile : {
        fontSize: 12
    },
    descriptionText3Destop : {
        fontSize: 17
    },
    descriptionImg : {
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'contain',
        width:'100%',
        height:'100%'
    },
    descriptionImgWrapper1 : {
        display: 'flex',
        width: '75%',
        margin: 'auto',
        marginTop:10
    },
    descriptionImgWrapper1Mobile : {
        height:'6vh',
        width:'100%'
    },
    descriptionImgWrapper1Destop : {
        height:'6vh',
    },
    descriptionTextWrapper1Mobile : {
        width: '100%',
    },
    descriptionTextWrapper1Destop : {
        width: '50%',
    },
    descriptionTextWrapper3Mobile : {
        width: '100%',
    },
    descriptionTextWrapper3Destop : {
        width: '50%',
    },
    descriptionTextWrapper1 : {

    },
    descriptionTextWrapper2 : {
        display: 'flex',
        justifyContent: 'center',
    },
});

class Footer extends Component {
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
        return (<div>
        <div id='Footer' className={[classes.container, this.state.screenMobile ? classes.containerMobile : classes.containerDestop].join(' ')}>
            <div className={this.state.screenMobile ? classes.descriptionTextWrapper1Mobile : classes.descriptionTextWrapper1Destop}>
                <p className={classes.title}> Join Us.</p>
                <p className={classes.descriptionText1}> Toronto, Ontario, Canada </p>
                <div className={classes.descriptionTextWrapper2}>
                    <p className={[classes.descriptionText3, this.state.screenMobile ? classes.descriptionText3Mobile : classes.descriptionText3Destop].join(' ')}> Terms and Conditions </p>
                    <p className={[classes.descriptionText3, this.state.screenMobile ? classes.descriptionText3Mobile : classes.descriptionText3Destop].join(' ')}> | </p>
                    <p className={[classes.descriptionText3, this.state.screenMobile ? classes.descriptionText3Mobile : classes.descriptionText3Destop].join(' ')}> Privacy Policy </p>
                </div>
            </div>
            <div className={this.state.screenMobile ? classes.descriptionTextWrapper3Mobile : classes.descriptionTextWrapper3Destop}>
                <p className={classes.descriptionText2}> University of Waterloo Student </p>
                <p className={classes.descriptionText1}> &copy; Varritech 2018. All rights reserved </p>
                <div className={[classes.descriptionImgWrapper1, this.state.screenMobile ? classes.descriptionImgWrapper1Mobile : classes.descriptionImgWrapper1Destop].join(' ')}>
                    <div style={{backgroundImage: 'url('+facebook+')'}} className={classes.descriptionImg} />
                    <div style={{backgroundImage: 'url('+instagram+')'}} className={classes.descriptionImg} />
                    <div style={{backgroundImage: 'url('+youtube+')'}} className={classes.descriptionImg} />
                    <div style={{backgroundImage: 'url('+twitter +')'}} className={classes.descriptionImg} />
                </div> 
            </div>
        </div>
        <div id='documentEnd'/>
    </div>)
    }
}
export default withStyles(styles)(Footer);