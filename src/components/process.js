import React from 'react'
import Img from 'gatsby-image'
import styles from '../css/process.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { ReactComponent as Journey1 } from '../svg/journey1.svg'
import { ReactComponent as Journey2 } from '../svg/journey2.svg'
import anime from 'animejs/lib/anime.es.js';
import { ReactComponent as Coding } from '../svg/coding.svg'
try {
    const WOW = require('wow.js')
    new WOW().init();
  } catch (e) {
    console.log(e)
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        style={{ display:'flex', width: '100%' }}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>
            {children}
          </>
        )}
      </div>
    );
  }

export default () => {
    const data = useStaticQuery(graphql`
    query statistics {
        stats1 : file(relativePath: {eq: "background/pattern1.png"}) {
            childImageSharp {
                fluid(maxWidth: 3080, quality: 100) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                }
            }
        }  
        stats2 : file(relativePath: {eq: "banner/about3.png"}) {
            childImageSharp {
                fluid(maxWidth: 3080, quality: 100) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                }
            }
        }
        contentful : file(relativePath: {eq: "contentful.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                }
            }
        }  
        heroku : file(relativePath: {eq: "heroku.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                }
            }
        }
        ruby : file(relativePath: {eq: "ruby.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                }
            }
        }
        gatsby : file(relativePath: {eq: "gatsby.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                }
            }
        }
        customerJourney : file(relativePath: {eq: "customerJourney.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                }
            }
        }
        sketch1 : file(relativePath: {eq: "sketch1.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                }
            }
        }
        sketch2 : file(relativePath: {eq: "sketch2.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                }
            }
        }  
        sketch3 : file(relativePath: {eq: "sketch3.png"}) {
            childImageSharp {
              fluid(maxWidth: 3080, quality: 100) {
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

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    setTimeout(() => {
        const lineDrawing = anime({
            targets: 'path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutCubic',
            duration: 8000,
            autoplay: true,
            begin: function(anim) {
              try {
                document.getElementById('journey1').style.display = 'block';
              } catch (error) {
                    console.log('whoops')
              }
            },
            complete: function(anim) {
                try {
                    document.getElementById('journey2').style.opacity = 1
                } catch (error) {
                    console.log('whoops')
                }
            },
          });
    }, 0)
    };
    return (
    <section id={'process'} className={styles.staticsArea}>
        <AppBar position="static">
            <Tabs style={{backgroundColor: 'rgb(241, 145, 24)', justifyContent: 'space-evenly'}} orientation={ (typeof window !== `undefined`) && (window.innerWidth < 992) ? "vertical" : "horizontal"} variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab style={{fontFamily: 'Montserrat'}} label="Requirements & Education" {...a11yProps(0)} />
            <Tab style={{fontFamily: 'Montserrat'}} label="Design & Planning" {...a11yProps(1)} />
            <Tab style={{fontFamily: 'Montserrat'}} label="Development" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <div style={{height: '100%'}} className={"container"}>
            <div style={{height: '100%'}} className={"row"}>
                <TabPanel value={value} index={0}>
                    <div style={{padding: '40px 10px'}} className={'container'}>
                        <div style={{width:'100%', margin: 0}} className={'row'}>
                            <div className={`${styles.leftGraphic} col-lg-6`}>
                                <Journey1 id={'journey1'} style={{display:'none', height: '100%', width:'100%', top: 0, left: 0}} className={styles.statsToolImg}/>
                                <Journey2 id={'journey2'} style={{opacity: 0, height: '100%', width:'100%', top: 0, left: 0}} className={styles.statsToolImg}/>
                            </div>
                            <div style={{top:'15%'}} className={"offset-lg-1 col-lg-5"}>
                                <div className={styles.areaHeading}>
                                    <h4> Be Understood </h4>
                                    <h6> Requirements, Workshops, and Education for the Modern Landscape </h6>
                                </div>
                                <div className={styles.singleData}>
                                    <i class="ti-direction-alt"></i>
                                    <p>Setup a roadmap for critical, flexible, and nice to have functionality using Jira, and timelines</p>
                                </div>
                                <div className={styles.singleData}>
                                    <i class="ti-loop"></i>
                                    <p>Follow an agile-scrum methodlogy for short-circuited feedback and iterations</p>
                                </div>
                                <div className={styles.singleData}>
                                    <i class="ti-blackboard"></i>
                                    <p>Teach your stakeholders and product managers what's possible to leverage animation libraries and Artifical Intelligence in 2020</p>
                                </div>
                            </div>       
                        </div>
                    </div>            
                </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{padding: '40px 0px 80px'}} className={'container'}>
                <div style={{width:'100%', margin: 0}} className={'row'}>
                    <div className={`${styles.leftGraphic} col-lg-6`}>
                        <Img style={{height: '100%'}} className={`${styles.background} wow zoomIn`} fluid={data.sketch1.childImageSharp.fluid} />
                        <Img style={{width: '40%', height: '100%', position: 'absolute', top: '10%', left: '-5%'}} className={`wow zoomIn`} fluid={data.sketch2.childImageSharp.fluid} />
                        <Img style={{width: '30%', height: '60%', position: 'absolute', top: '50%', left: '80%'}} className={`wow zoomIn`} fluid={data.sketch3.childImageSharp.fluid} />
                    </div>
                    <div style={{top:'15%'}} className={"offset-lg-1 col-lg-5"}>
                        <div className={styles.areaHeading}>
                            <h4> Bring your ideas to Life </h4>
                            <h6> We show you the UI, architecture, and design decisions our arcitects have made </h6>
                        </div>
                        <div className={styles.singleData}>
                            <i class="ti-pencil-alt"></i>
                            <p> Leverage sketch to show beautiful UI and lock in visual requirements </p>
                        </div>
                        <div className={styles.singleData}>
                            <i class="ti-server"></i>
                            <p> We show you how we've configured your custom integrations and database architecture using draw.io</p>
                        </div>
                        <div className={styles.singleData}>
                            <i class="ti-shield"></i>
                            <p> We ensure security, legal restrictions, AODA compliance and industry specific requirements are met</p>
                        </div>
                    </div>   
                </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>     
            <div style={{padding: '40px 10px'}} className={'container'}>
                <div style={{width:'100%', margin: 0}} className={'row'}>
                    <div className={`${styles.leftGraphic} col-lg-6`}>
                            <div style={{position: 'absolute', top: 100, left: 300}}>
                                <div style={{animationDelay: '1s'}} className={`${styles.statsToolContainer} wow rollIn`}>
                                    <Img className={`${styles.statsToolImg}`} fluid={data.heroku.childImageSharp.fluid} />
                                </div>
                            </div>
                            <div style={{position: 'absolute', top: 250, left: 50}}>
                                <div style={{animationDelay: '2s'}} className={`${styles.statsToolContainer} wow rollIn`}>
                                    <Img className={`${styles.statsToolImg}`} fluid={data.contentful.childImageSharp.fluid} />
                                </div>
                            </div>
                            <div style={{position: 'absolute', top: 100, left: 50}}> 
                                <div style={{animationDelay: '0s'}} className={`${styles.statsToolContainer} wow rollIn`}>
                                    <Img className={`${styles.statsToolImg}`} fluid={data.ruby.childImageSharp.fluid} />
                                </div>
                            </div>
                            <div style={{position: 'absolute', top: 320, left: 200}}>
                                <div style={{animationDelay: '3s'}} className={`${styles.statsToolContainer} wow rollIn`}>
                                    <Img className={`${styles.statsToolImg}`} fluid={data.gatsby.childImageSharp.fluid} />
                                </div>
                            </div>
                            <Coding className={`${styles.background}`} />
                        </div>
                        <div style={{top:'15%'}} className={"col-12-sm offset-lg-1 col-lg-5"}>
                            <div className={styles.areaHeading}>
                                <h4> Lightning Fast Development </h4>
                                <h6> Leverage a modern stack and libraries to create stunning visuals </h6>
                            </div>
                            <div className={styles.singleData}>
                                <i class="ti-eye"></i>
                                <p> keep up to date with real-time status updates on what's been built, in progress, requiring signoff </p>
                            </div>
                            <div className={styles.singleData}>
                                <i class="ti-calendar"></i>
                                <p> We set realistic deadlines at the beginning, and unless project scope changes, we meet them </p>
                            </div>
                            <div className={styles.singleData}>
                                <i class="ti-target"></i>
                                <p> Because of agile-scrum continous feedback, we deliver exactly what you expect and more with precision </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </TabPanel>
            </div>
        </div>
    </section>
)}
