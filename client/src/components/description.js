import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import backend from '../images/backend.png';
import frontend from '../images/frontend.jpg';
import hardware from '../images/hardware.jpg';
import dataScience from '../images/dataScience.jpg';
import '../styles/description.css';
import Button from './button';

const styles = () => ({
    container : {
        position: 'relative',
    },
    descriptionImgWrapper : {
        width: '100%',
        position: 'relative',
    },
    descriptionImgWrapperMobile : {
        display:'block'
    },
    descriptionImgWrapperDestop : {
        height:'50vh',
        display: 'flex',
    },
});

class Description extends Component {
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
   handleClick = () => {
        console.log("clicked")
   }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={[classes.descriptionImgWrapper, this.state.screenMobile ? classes.descriptionImgWrapperMobile : classes.descriptionImgWrapperDestop].join(' ')}>
                    <div className='imgContainer'>
                        <div style={{backgroundImage: 'url('+backend+')'}} className='descriptionImg' />
                        <p className='imgTitle'> Backend </p>
                        <div className='imgTextDiv'>  
                            <p className='imgText'>Ruby on Rails, MySQL</p>
                            <Button handleClick={this.handleClick} name={'Learn More'}/>
                        </div>
                    </div>
                    <div className='imgContainer'>
                        <div style={{backgroundImage: 'url('+frontend+')'}} className='descriptionImg' />
                        <p className='imgTitle'> Frontend </p>
                        <div className='imgTextDiv'>  
                            <p className='imgText'>ReactJS, HTML5, CSS3</p>
                            <Button handleClick={this.handleClick} name={'Learn More'}/>
                        </div>
                    </div>
                </div>
                <div className={[classes.descriptionImgWrapper, this.state.screenMobile ? classes.descriptionImgWrapperMobile : classes.descriptionImgWrapperDestop].join(' ')}>
                    <div className='imgContainer'>  
                        <div style={{backgroundImage: 'url('+hardware+')'}} className='descriptionImg' />
                        <p className='imgTitle'> Circuits </p>
                        <div className='imgTextDiv'>  
                            <p className='imgText'>Amplifiers, LEDs, Regulators</p>
                            <Button handleClick={this.handleClick} name={'Learn More'}/>
                        </div>
                    </div>
                    <div className='imgContainer'>
                        <div style={{backgroundImage: 'url('+dataScience+')'}} className='descriptionImg' />
                        <p className='imgTitle'> Data </p>
                        <div className='imgTextDiv'>  
                            <p className='imgText'>Machine Learning, Image Processing</p>
                            <Button handleClick={this.handleClick} name={'Learn More'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Description);