import React from 'react'
import Button from '@material-ui/core/Button';
import styles from '../css/appointment.module.css'
import EventIcon from '@material-ui/icons/Event';

export default () => {

    if (typeof window !== `undefined`) {
        setTimeout(() => {
            require('./animation');
        })
    }
    return (
    <section style={{height: 500 }} className={`${styles.featureArea} bg_one`}>
        <div className={'container'}>
            <div style={{ height: 500 }} className={'row align-items-center'}>
                <div className={styles.featureContent}>
                    <h4>The Future is Here</h4>
                    <p> Let's talk about what that means for your business, book a free apointment with our consultants below and transform your understanding of the online business landscape</p>
                    <a href="https://calendly.com/varritech/30min">
                      <Button style={{fontWeight: 300,fontFamily: '"Montserrat", sans-serif',backgroundColor: '#f19118'}}className={styles.button} variant="contained" color="secondary" startIcon={<EventIcon />}>
                          Schedule Appointment
                      </Button> 
                    </a>
                </div>
                <canvas style={{position: 'absolute', top: 0, left: 0, height: '100%'}} id="cnv"></canvas>
            </div>
        </div>
    </section>
)}
