import React, { Component } from 'react';
import styles from '../css/card.module.css'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const mousePX = (mouseX, width) => {
    return mouseX / (width);
}
const mousePY = (mouseY, height) => {
    return mouseY / (height);
}

export default class Card extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          width: 0,
          height: 0,
          mouseX: 0,
          mouseY: 0
      };
    }

    componentDidMount() {
        this.setState({
            width: this.card.offsetWidth,
            height: this.card.offsetHeight
        })
    }

    handleMouseMove = (e) => {
        const box = this.card.getBoundingClientRect();
        const left = Math.round(box.left + document.body.scrollLeft);
        const top = Math.round(box.top + document.body.scrollTop + window.pageYOffset)

        console.log(top, e.pageY)

        this.setState({
            mouseX: e.pageX - left - this.state.width / 2,
            mouseY: e.pageY - top - this.state.height / 2
        })
    }

    handleMouseEnter = () => {
        clearTimeout(this.mouseLeaveDelay);
    }

    handleMouseLeave = () => {
        this.mouseLeaveDelay = setTimeout(() => {
            this.setState({
                mouseX: 0,
                mouseY: 0
            })
        }, 1000);
    }

    componentDidUpdate() {
        const rX = mousePX(this.state.mouseX, this.state.width) * 30;
        const rY = mousePY(this.state.mouseY, this.state.height) * -30;
        const tX = mousePX(this.state.mouseX, this.state.width) * -40;
        const tY = mousePY(this.state.mouseY, this.state.height) * -40;

        this.card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg) translateX(${tX}px) translateY(${tY}px)`;  
    }

    render() {
        const { background, header, text, style, img } = this.props
        return (
            <StaticQuery
                query={graphql`
                    query card {
                        file(relativePath: {eq: "elements/single_bg.png"}) {
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
                `}
            render={data => (
                <div style={style} ref={(ref) => this.card = ref} onMouseMove={this.handleMouseMove} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={styles.singleService}>
                <Img style={{position: 'absolute',overflow: 'hidden',width: 175,height: 220,top: 0,right: 0}} fluid={data.file.childImageSharp.fluid} />
                <div className={styles.serviceIcon}>
                    {img}
                    <div style={{background: background}} className={styles.circle} />
                </div>
                <div className={styles.serviceContent}>
                    <h5>{header}</h5>
                    <p>{text}</p>
                    <a href={"#process"}>Read More</a>
                </div>
            </div>
                )}
            />
        )
    }
}