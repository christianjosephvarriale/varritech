import React from 'react'
// import { graphql } from 'gatsby'
// import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'
import Services from '../components/services'
import Process from '../components/process'
import About from '../components/about'
import Banner from '../components/banner'
import Appointment from '../components/appointment'
import Pricing from '../components/pricing'
import Projects from '../components/projects'
import Loader from '../components/loader'

import "../css/bootstrap.css"
import "../css/themify-icons.css"
import "../vendors/owl-carousel/owl.carousel.min.css"
import "../vendors/animate-css/animate.css"
import "../css/style.css"
import "../css/responsive.css"

let $;
if (typeof window !== `undefined`) {
  $ = require("jquery");
}

// require("../js/waypoints.min.js")
// require("../js/mail.js")
// require("../js/contact.js")
// require("../js/jquery.form.js")
// require("../js/mail.js")
// require("../vendors/owl-carousel/owl.carousel.min.js")

class RootIndex extends React.Component {

  componentDidMount() {
    if (typeof window !== `undefined`) {
      $("body").css("overflow", "hidden");
      setTimeout(removeLoader, 4000); //wait for page load PLUS two seconds.
      function removeLoader(){
        $("body").css("overflow", "auto");
        $( "#loader" ).fadeOut(500, function() {
            // fadeOut complete. Remove the loading div   
            $( "#loader" ).remove(); //makes page more lightweight 
        });  
      }
    }
  }
  
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
         <Helmet title={'Varritech Consulting'}>
        </Helmet>
         <Loader />
         <Banner />
         <About />
         <Services />
         <Appointment />
         <Process />
         <Pricing />
         <Projects />
      </Layout>
    )
  }
}

export default RootIndex

