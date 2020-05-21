import React from 'react'
import styles from '../css/about.module.css'
import { ReactComponent as Hands } from '../svg/hands.svg'
import { ReactComponent as Nature } from '../svg/nature.svg'
import { ReactComponent as Robot } from '../svg/ai.svg'

export default () => {
    return (
    <section id={'about'} className={`${styles.aboutArea}`}>
        <div className={'container'}>
            <div className={'row align-items-center'}>
                <div className={'col-lg-6'}>
                    <div className={styles.areaHeading}>
                        <h4>We believe Web Development is an art</h4>
                        <h6>An art our young, talented team has mastered</h6>
                        <p>If you are in the market for an exceptional site that makes customers think WOW everytime they visit www.yournewsite.com, then we're interested in working with you</p>
                    </div>
                    <div className={'row'}>
                        <div className={`${styles.aboutCard} col-md-6 col-lg-6`}>
                            <div className={styles.singleAbout}>
                                <div className={styles.aboutIcon}>
                                    <Hands />
                                </div>
                                <div className={styles.singleAboutContent}>
                                    <h5>We're partners</h5>
                                    <p>As our partner you're given transparency and the best price around. Expect continuous, real-time guidance from knowledgable engineers</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.aboutCard} col-md-6 col-lg-6`}>
                            <div className={styles.singleAbout}>
                                <div className={styles.aboutIcon}>
                                    <Nature />
                                </div>
                                <div className={styles.singleAboutContent}>
                                    <h5>Lightning Delivery</h5>
                                    <p>You want your application, and we want your approval. We leveraged pre-configured UI and custom code components to deliver projects EARLY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-6'}>
                    <Robot />
                </div>
            </div>
        </div>
    </section>
)}
