import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Textfield from './textfields';
import Button from './button';
import axios from 'axios';

const styles = () => ({
    container: {
        position: 'relative',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        width:'70%',
        margin:30,
        marginLeft: '5%',
    },
    containerMobile : {
        flexDirection:'column',
        position: 'relative',
        display:'flex',
        alignItems:'center',
        margin:30,
        marginLeft: '5%',
    },
    descriptionTitle1 : {
        fontWeight: 400, 
        fontSize: 30,
        color: '#2e2e2e',
        textTransform: 'uppercase',
        lineHeight: '1em',
        textAlign: 'left',
        marginBottom: '5px',
        marginLeft: '5%',
    },
    descriptionTitle1Mobile : {
        fontWeight: 400, 
        color: '#2e2e2e',
        textTransform: 'uppercase',
        lineHeight: '1em',
        fontSize: 24,
        marginLeft:'0%',
        marginBottom: '5px',
        textAlign:'center'
    },
});

class Newsletter extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            screenMobile: null,
            name:"",
            email:""
        };
    }
    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
        });
    };
    handleSubmit = () => {
        // makes an axios call to the database 
        axios.post('api/subscribers', {
            email: this.state.email,
            name: this.state.name
        })
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })
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
        console.log(this.state.email)
        const { classes } = this.props;
        return (<div>
            <p className={this.state.screenMobile ? classes.descriptionTitle1Mobile : classes.descriptionTitle1}>Newsletter Sign Up</p>
            <div className={this.state.screenMobile ? classes.containerMobile : classes.container}>
                <Textfield field={'name'} placeholder={'Alan Smith'} value={this.state.name} handleChange={this.handleChange}/>
                <Textfield field={'email'} placeholder={'alansmith@gmail.com'} value={this.state.email} handleChange={this.handleChange}/>
                <Button handleClick={this.handleSubmit} name={'Submit'}/>
            </div>
        </div>)
    }
}
export default withStyles(styles)(Newsletter);