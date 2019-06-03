import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import '../styles/dots.css';

const styles = () => ({
    container : {
        top: '50%',
        right: '1%',
        display: 'flex',
        transform: 'rotate(90deg)',
        alignItems: 'center',
        position:'fixed',
        zIndex: 1000
    },
    dotContainer : {
        display: 'block',
        position: 'relative',
        width: 20,
        height: 20
    },
    activeDot : {
        position:'absolute',
        left: 6,
        top: 5,
        width: 8,
        height: 8,
        borderRadius: 8,
        border: '1px solid white',
        transition: '.2s ease-out',
    },
    inactiveDot : {
        position:'absolute',
        left: 8,
        top: 8,
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'white',
        borderRadius: '50%',
    },
});

class Dots extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            currentDot: 0,
        };
    }
    handleScroll = () => {
        let scroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        if (scroll > 350) {
            for (let i = 0; i < 5; i++) {   
                if (this.state.currentDot === i) {
                    document.getElementById('Dot'+i).style.border = '1px solid black';
                    document.getElementById('Dot'+i).style.backgroundColor = 'transparent';
                }
                else {
                    document.getElementById('Dot'+i).style.border = 'transparent';
                    document.getElementById('Dot'+i).style.backgroundColor = 'black';
                }
            }
        }
        else if (scroll < 350){
            for (let i = 0; i < 5; i++) {   
                if (this.state.currentDot === i) {
                    document.getElementById('Dot'+i).style.border = '1px solid white';
                    document.getElementById('Dot'+i).style.backgroundColor = 'transparent';
                }
                else {
                    document.getElementById('Dot'+i).style.backgroundColor = 'white';
                    document.getElementById('Dot'+i).style.border = 'transparent';
                }
            }
        }
        if (scroll < 970){
            this.setState({
                currentDot: 0
            })
        }
        else if (scroll > 970 && scroll < 2224)
        {
            this.setState({
                currentDot: 1
            })
        }
        else if (scroll > 2224 && scroll < 2703)
        {
            this.setState({
                currentDot: 2
            })
        }
        else if (scroll > 2703 && scroll < 2800)
        {
            this.setState({
                currentDot: 3
            })
        }
        else if (scroll > 2800)
        {
            this.setState({
                currentDot: 4
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Tooltip title="Top" placement="bottom">
                        <a href='#Top' onClick={this.props.onDotClick} className={[classes.dotContainer,'grow'].join(' ')} id='containerDot0'>
                            <div id='Dot0' className={[this.state.currentDot === 0 ? classes.activeDot : classes.inactiveDot, this.state.currentDot !== 0 && this.state.currentDotHovered === 0 ? classes.growDot : null].join(' ')} />
                        </a>
                </Tooltip>
                <Tooltip title="Featured" placement="bottom">
                        <a href='#Featured' onClick={this.props.onDotClick} className={[classes.dotContainer,'grow'].join(' ')} id='containerDot1'>
                            <div id='Dot1' className={[this.state.currentDot === 1 ? classes.activeDot : classes.inactiveDot, this.state.currentDot !== 1 && this.state.currentDotHovered === 1 ? classes.growDot : null].join(' ')} />
                        </a>
                </Tooltip>
                <Tooltip title="Approach" placement="bottom">
                        <a href='#Approach' onClick={this.props.onDotClick} lassName={[classes.dotContainer,'grow'].join(' ')} id='containerDot2'>
                            <div id='Dot2' className={[this.state.currentDot === 2 ? classes.activeDot : classes.inactiveDot, this.state.currentDot !== 2 && this.state.currentDotHovered === 2 ? classes.growDot : null].join(' ')} />
                        </a>
                </Tooltip>
                <Tooltip title="Philosophy" placement="bottom">
                        <a href='#Philosophy' onClick={this.props.onDotClick} lassName={[classes.dotContainer,'grow'].join(' ')} id='containerDot3'>
                            <div id='Dot3' className={[this.state.currentDot === 3 ? classes.activeDot : classes.inactiveDot, this.state.currentDot !== 3 && this.state.currentDotHovered === 3 ? classes.growDot : null].join(' ')} />
                        </a>
                </Tooltip>
                <Tooltip title="Footer" placement="bottom">
                        <a href='#Footer' onClick={this.props.onDotClick} lassName={[classes.dotContainer,'grow'].join(' ')} id='containerDot4'>
                            <div id='Dot4' className={[this.state.currentDot === 4 ? classes.activeDot : classes.inactiveDot, this.state.currentDot !== 4 && this.state.currentDotHovered === 4 ? classes.growDot : null].join(' ')} />
                        </a>
                </Tooltip>
          </div>)
      } 
}
export default withStyles(styles)(Dots);