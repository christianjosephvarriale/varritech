import React from 'react'
import styles from '../css/pricing.module.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
    query pricing {
        file(relativePath: {eq: "background/pattern2.png"}) {
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
    <section id={'pricing'} className={`${styles.pricingArea} area-padding-top`}>
        <Img fluid={data.file.childImageSharp.fluid} />
        <div className={"container"}>
            <div className={'row'}>
                <div className={"col-12"}>
                    <div className={styles.areaHeading}>
                        <h4>Our Pricing Plan</h4>
                        <p>Let's not be vague, whether you want something simple or custom we've got the numbers</p>
                    </div>
                </div>
                <div className={`col-sm-6 col-lg-3 ${styles.pricingCards}`}>
                    <div className={styles.singlePricing}>
                        <div className={styles.pricingIcon}>
                            <i className={"ti-home"}></i>
                        </div>
                        <div className={styles.singlePricingContent}>
                            <h5>Basic</h5>
                            <h4>$1000 <span className={styles.currencyLine}>/</span><span>site</span></h4>
                            <ul>
                                <li>Planning, Design, and Development phases</li>
                                <li>Expert Consulting</li>
                                <li>Hosting & Deployment</li>
                                <li>Basic support</li>
                            </ul>
                            <a href="https://calendly.com/varritech/30min">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div className={`col-sm-6 col-lg-3 ${styles.pricingCards}`}>
                    <div className={styles.singlePricing}>
                        <div className={styles.pricingIcon}>
                            <i className={"ti-bag"}></i>
                        </div>
                        <div className={styles.singlePricingContent}>
                            <h5>Full-Stack</h5>
                            <h4>$3000 <span className={styles.currencyLine}>/</span><span>site</span></h4>
                            <ul>
                                <li>Benefits of Basic...</li>
                                <li>Database Architecture</li>
                                <li>Top-notch Security</li>
                                <li>Integrated with Content Management System</li>
                                <li>Premium support</li>
                            </ul>
                            <a href="https://calendly.com/varritech/30min">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div className={`col-sm-6 col-lg-3 ${styles.pricingCards}`}>
                    <div className={styles.singlePricing}>
                        <div className={styles.pricingIcon}>
                            <i className={"ti-car"}></i>
                        </div>
                        <div className={styles.singlePricingContent}>
                            <h5>Premium Integrated Application</h5>
                            <h4>$10,000 <span className={styles.currencyLine}>/</span><span>site</span></h4>
                            <ul>
                                <li>Benefits of Full-Stack...</li>
                                <li>Predefined Integrations</li>
                                <li>Visualization and AI</li>
                            </ul>
                            <a href="https://calendly.com/varritech/30min">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div className={`col-sm-6 col-lg-3 ${styles.pricingCards}`}>
                    <div className={styles.singlePricing}>
                        <div className={styles.pricingIcon}>
                            <i className={"ti-gift"}></i>
                        </div>
                        <div className={styles.singlePricingContent}>
                            <h5>Custom Enterprise</h5>
                            <h4>Let's talk <span className={styles.currencyLine}>/</span><span>site</span></h4>
                            <ul>
                                <li>Extended Project Length</li>
                                <li>Custom Integrations</li>
                                <li>Workshops, Training, and Consulting</li>
                                <li>Collaboration & Business model development</li>
                            </ul>
                            <a href="https://calendly.com/varritech/30min">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}