import React from 'react'
import Img from 'gatsby-image'
import styles from '../css/projects.module.css'
import { useStaticQuery, graphql } from "gatsby"
import '../css/bootstrap.css'
import { ReactComponent as Wsib } from '../svg/wsib.svg'
import { ReactComponent as Plan } from '../svg/plan.svg'

export default () => {
    const data = useStaticQuery(graphql`
    query blog {
        blog1: file(relativePath: {eq: "blog/coronanews.png"}) {
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
        blog2: file(relativePath: {eq: "blog/2.png"}) {
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
        blog3: file(relativePath: {eq: "blog/3.png"}) {
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
        blog4: file(relativePath: {eq: "blog/tekblg.png"}) {
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
    return (
    <section id={'projects'} className={`${styles.latestBlogArea} area-padding`}>
        <div className={'container'}>
            <div className={'row justify-content-center'}>
                <div className={'col-lg-12'}>
                    <div className={styles.areaHeading}>
                        <h4> Our Work & Integrations </h4>
                        <p> Checkout some of our live projects to see what we've built to give inspriration into your own organization </p>
                    </div>           
                </div>
            </div>

            <div className={'row'}>
                <div className={'col-lg-8 col-md-6'}>
                    <div className={styles.fullImage,styles.singleBlog}>
                        <div className={styles.thumb}>
                            <Img style={{height: 400}} className={'img-fluid w-100'} fluid={data.blog1.childImageSharp.fluid} alt="" />
                        </div>
                        <div className={styles.singleBlogContent, styles.cardType1}>
                            <p className={styles.tag}>Real time Coronavirus News & Stats</p>
                            <p className={styles.date}>March 10, 2020</p>
                            <h4>
                                <a href="https://coronanews.ca/coronavirus/news/canada/page/1">React / Rails App built using location, news, and scraping integrations</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-4 col-md-6'}>
                    <div className={styles.singleBlog}>
                        <div className={styles.thumb}>
                            <Plan style={{height: 200}} className={'img-fluid w-100'} alt="" />
                        </div>
                        <div className={styles.singleBlogContent}>
                            <p className={styles.tag}>Interactive Portal w/ Salesforce</p>
                            <p className={styles.date}>July 10, 2019</p>
                            <h4>
                                <a href="https://plancanada.force.com/yeh/s/">Full-Stack Application built for Plan Canada using Salesforce Community platform</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-4 col-md-6'}>
                    <div className={styles.fullImage,styles.singleBlog}>
                        <div className={styles.thumb}>
                            <Wsib style={{height: 200}} className={'img-fluid w-100'} alt="" />
                        </div>
                        <div className={styles.singleBlogContent}>
                            <p className={styles.tag}>WSIB multi-user platform MVP</p>
                            <p className={styles.date}>Jan 10, 2018</p>
                            <h4>
                                <a href="https://www.wsib.ca/en/forms">WSIB platform to manage uploading, adjudication using ReactJS </a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-8 col-md-6'}>
                    <div className={styles.singleBlog}>
                    <div className={styles.thumb}>
                            <Img style={{height: 400}} className={'img-fluid w-100'} fluid={data.blog4.childImageSharp.fluid} alt="" />
                        </div>
                        <div className={styles.singleBlogContent, styles.cardType1}>
                            <p className={styles.tag}>Technology Blog</p>
                            <p className={styles.date}>April 10, 2020</p>
                            <h4>
                                <a href="https://tekblg.com/">Computer engineering blog & interactive software tools with Contentful CMS integration </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}