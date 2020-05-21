import React from 'react'
import Img from 'gatsby-image'
import styles from '../css/footer.module.css'
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import { useStaticQuery, graphql } from "gatsby"
const year = new Date().getFullYear();

export default () => {
    const data = useStaticQuery(graphql`
    query footer {
        file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }  
    `)
    return (
        <footer id={'links'} className={styles.footerArea}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={`col-lg-3 col-sm-6 mb-4 mb-xl-0 ${styles.singleFooterWidget}`}>
                        <h4>About Us</h4>
                        <p>We believe in beautiful typography, stunning animations, and seemless integrations, book a time with us to learn more</p>
                        <div className={styles.footerLogo}>
                            <Img fluid={data.file.childImageSharp.fluid} alt="" />
                        </div>
                    </div>

                    <div className={`col-lg-3 col-sm-6 mb-4 mb-xl-0 ${styles.singleFooterWidget}`}>
                        <h4>Contact Info</h4>
                        <div className={styles.footerAddress}>
                            <span>Email : sales@varritech.com</span>
                        </div>
                    </div>

                    <div className={`col-lg-3 col-sm-6 mb-4 mb-xl-0 ${styles.singleFooterWidget}`}>
                        <h4>Links</h4>
                        <ul>

                        <li><a href={"#about"}>About</a></li> 
                            <li><a href={"#services"}>Services</a></li> 
                            <li><a href={"#process"}>Process</a></li>   
                            <li><a href={"#pricing"}>Pricing</a></li>   
                            <li><a href={"#projects"}>Past Projects</a></li>   
                        </ul>
                    </div>

                    <div className={`col-lg-3 col-md-8 mb-4 mb-xl-0 ${styles.singleFooterWidget}`}>
                        <h4>Let's talk, no strings attached</h4>

                        {/* <div className={"form-wrap"} id="mc_embed_signup">
                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            method="get">
                            <div className={"input-group"}>
                                <input type="email" className={"form-control"} name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" />
                                <div className={"input-group-append"}>
                                    <button className={"btn click-btn"} type="submit">
                                        <i className={"fab fa-telegram-plane"}></i>
                                    </button>
                                </div>
                            </div>
                            <div style={{position: 'absolute', left: -5000}}>
                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                            </div> */}
{/* 
                            <div className={"info"}></div>
                        </form> */}
                        <a href="https://calendly.com/varritech/30min">
                            <Button style={{fontWeight: 300,fontFamily: '"Montserrat", sans-serif',backgroundColor: '#f19118'}}className={styles.button} variant="contained" color="secondary" startIcon={<EventIcon />}>
                                Schedule Appointment
                            </Button> 
                        </a>
                        </div>
            </div>
            <div className={`${styles.footerBottom} row align-items-center text-center text-lg-left no-gutters`}>
                <p className={`${styles.footerText} m-0 col-lg-8 col-md-12`}>
                    Varritech Copyright &copy; {year}
                </p>
                {/* <div className={`col-lg-4 col-md-12 text-center text-lg-right ${styles.footerSocial}`}>
                    <a href="#"><i className={"ti-facebook"}></i></a>
                    <a href="#"><i className={"ti-twitter-alt"}></i></a>
                    <a href="#"><i className={"ti-dribbble"}></i></a>
                    <a href="#"><i className={"ti-linkedin"}></i></a>
                </div> */}
            </div>
        </div>
    </footer>
)}