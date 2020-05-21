import React from 'react'
import { Link } from 'gatsby'
import '../css/bootstrap.css'
import '../css/navbar.css'
import $ from 'jquery'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../svg/logo.svg'

export default () => {
    var nav_offset_top = $('header').height() + 50; 
    if ( $('.header-area').length ){ 
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();   
            if (scroll >= nav_offset_top ) {
                $(".header-area").addClass("navbar-fixed");
            } else {
                $(".header-area").removeClass("navbar-fixed");
            }
        });
    };
    return ( <header className={'navbar-fixed header-area'}>	
        <div className={'main-menu'}>
            <nav className={'navbar navbar-expand-lg navbar-light'}>
                <div className={'container'}>
                    <Logo className={'navbar-brand logo-h'} />
                    <button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={'icon-bar'}></span>
                        <span className={'icon-bar'}></span>
                        <span className={'icon-bar'}></span>
                    </button>
                    <div className={`collapse navbar-collapse offset`} id="navbar-supported-content">
                        <ul className={'nav navbar-nav menuNav ml-auto'}>
                            <li className={'nav-item'}><a className={'nav-link'} href={"#about"}>About</a></li> 
                            <li className={'nav-item'}><a className={'nav-link'} href={"#services"}>Services</a></li> 
                            <li className={'nav-item'}><a className={'nav-link'} href={"#process"}>Process</a></li>   
                            <li className={'nav-item'}><a className={'nav-link'} href={"#pricing"}>Pricing</a></li>   
                            <li className={'nav-item'}><a className={'nav-link'} href={"#projects"}>Past Projects</a></li>   
                            <li className={'nav-item'}><a className={'nav-link'} href={"#links"}>Helpful Links</a></li>     
                            {/* <li className={'nav-item submenu dropdown'}>
                                <a href="#" className={'nav-link dropdown-toggle'} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <ul className={'dropdown-menu'}>
                                    <li className={'nav-item'}><Link className={'nav-link'} to={"feature.html"}>Features</Link></li> 
                                    <li className={'nav-item'}><Link className={'nav-link'} to={"price.html"}>Price</Link></li>
                                    <li className={'nav-item'}><Link className={'nav-link'} to={"element.html"}>Element</Link></li>
                                </ul>
                            </li> */}
                            {/* <li className={'nav-item submenu dropdown'}>
                                <a href="#" className={'nav-link dropdown-toggle'} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                <ul className={"dropdown-menu"}>
                                    <li className={'nav-item'}><Link className={'nav-link'} to={"blog.html"}>Blog</Link></li>
                                    <li className={'nav-item'}><Link className={'nav-link'} to={"single-blog.html"}>Blog Details</Link></li>
                                </ul>
                            </li>  */}
                            {/* <li className={'nav-item'}><a className={'nav-link'} href="contact.html">Contact</a></li> */}
                        </ul>
                    </div>
                    <div className={'right-button'}>
                        <ul>
                            {/* <li className={'shop-icon'}><Link to={'#'}><i className={"ti-shopping-cart-full"}></i><span>0</span></Link></li> */}
                            <li><a href={"https://mailchi.mp/1e7e51607293/wxuz9t0k1t"}>
                            <Button style={{fontWeight: 300,fontFamily: '"Montserrat", sans-serif',backgroundColor: '#f19118'}} variant="contained" color="secondary" startIcon={<AlarmOnIcon />}>
                                Subscribe
                            </Button></a></li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </header>
    )
}