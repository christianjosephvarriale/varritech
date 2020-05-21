import React from 'react';
import styles from '../css/services.module.css'
import Card from './card'
import { ReactComponent as Web } from '../svg/web.svg'
import { ReactComponent as Chat } from '../svg/chat.svg'
import { ReactComponent as System } from '../svg/system.svg'

export default () => (
    <section id={'services'} className={`${styles.serviceArea} area-padding`}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 col-lg-4"}>
                    <Card img={<Web />} header={'Elegant Design'} text={"Your competitors site's look like they were designed in the 90s, we'll showcase your brand as being sleek and professional"} background={'#fca6a6'} />
                </div>
                <div className={"col-md-6 col-lg-4"}>
                    <Card img={<Chat />} header={'Embrace the future'} text={"The future is here, take advantage of powerful tools like Artifical Intelligence and modern frameworks"} style={{marginTop: 50}} background={'#71beb4'} />
                </div>
                <div className={"col-md-6 col-lg-4"}>
                    <Card img={<System />} header={'Create an Ecosystem'} text={"We'll build you a full stack solution integrated with services you know and love"} background={'#ed92dd'} />
                </div>
            </div>
        </div>
    </section>
)
