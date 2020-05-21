import React from 'react'
import { Link } from 'gatsby'
import styles from '../css/banner.module.css'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { ReactComponent as Banner } from '../svg/banner.svg'
try {
    const WOW = require('wow.js')
  } catch (e) {
    console.log(e)
}

export default () => {    
    new WOW().init();
    return (
    <section className={styles.homeBannerArea}>
        <div className={`${styles.bannerInner} d-flex align-items-center`}>
            <Banner className={styles.overlay} />
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-6 offset-lg-6 col-xl-6 offset-xl-6'}>
                        <Paper className={'wow wow slideInRight'} data-wow-duration="2s" data-wow-delay="2s" elevation={3}>
                        <div className={styles.bannerContent}>
                            <h3>Build a site<br/>your customers love with Varritech</h3>
                            <p>Your website is your online spokesperson. If it's poorly built, you're losing potential customers to a faster, better optimized, and engaging site. Checkout how we can help you</p>
                            <a href={"#services"}> 
                                <Button style={{fontWeight: 300,fontFamily: '"Montserrat", sans-serif',backgroundColor: '#f19118'}}className={styles.button} variant="contained" color="secondary" startIcon={<ArrowDownwardIcon />}>
                                    Learn More
                                </Button>
                            </a> 
                        </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}