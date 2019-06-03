import React, { Component } from 'react';
import Banner from './components/banner';
import Description from './components/description';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './App.css';
import Sidebar from './components/sidebar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      screenMobile: null,  
      colorChange: false,
      sidebarOpen: false
    };
    // bindings
  }

  handleSidebarOpen = () => {
    // handles the sidebar opening
    console.log("called");
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  componentDidMount() {
    // event listeners
    window.addEventListener('resize', this.checkWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    // determines how far a user has scrolled down the page and changes changeColor state var
    let scroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if (scroll > 0 && !this.state.colorChange) {
      this.setState({ colorChange: true })
    } else if (scroll === 0 && this.state.colorChange) {
      this.setState({ colorChange: false })
      }
  }
  
  checkWindowDimensions = () => {
    // call a re-render upon resizing
    if (window.innerWidth < 768 && !this.state.screenMobile){
      this.setState({ screenMobile: true });
    } else if (window.innerWidth > 768 && this.state.screenMobile){
      this.setState({ screenMobile: false });
    }
  }

  render() {
    if (!this.state.screenMobile){ 
      return (
        <div>
          <Sidebar handleSidebarOpen={this.handleSidebarOpen} screenMobile={this.state.screenMobile} active={this.state.sidebarOpen} />
          <Navbar sidebarOpen={this.state.sidebarOpen} handleSidebarOpen={this.handleSidebarOpen} colorChange={this.state.colorChange} screenMobile={this.state.screenMobile}/>
          <Banner screenMobile={this.state.screenMobile}/>
          <Description screenMobile={this.state.screenMobile}/>
          <Newsletter screenMobile={this.state.screenMobile}/>
          <Footer screenMobile={this.state.screenMobile}/>
        </div>
      );
    } else {
        return (
          <div>
            <Sidebar handleSidebarOpen={this.handleSidebarOpen} screenMobile={this.state.screenMobile} active={this.state.sidebarOpen} />
            <Navbar sidebarOpen={this.state.sidebarOpen} handleSidebarOpen={this.handleSidebarOpen} changeColor={this.state.changeColor} screenMobile={this.state.screenMobile}/>
            <Banner screenMobile={this.state.screenMobile}/>
            <Description screenMobile={this.state.screenMobile}/>
            <Newsletter screenMobile={this.state.screenMobile}/>
            <Footer screenMobile={this.state.screenMobile}/>
          </div>
        );
    }
  }
}

export default App;
