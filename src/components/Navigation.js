import React,{useState} from 'react';
import logo from '../assests/images/logo.png'
import './Navigation.css'
import Banner from './Banner';
import { Link } from 'react-router-dom';



const Navigation = () =>{

    function togMenu(){
        document.getElementById('list').style.right = "0";
    }
    function togMenuclose(){
        document.getElementById('list').style.right= "-100%";
    }

    return(
        <div>
            <div className="cover">
                <div className='top-bar text-center bg-primary text-white'>
                    React Live Website
                </div>
                <div className="header">
                    <nav className="navi">
                        <a href="index.html" className="navbar-logo">
                            <img src={logo} alt=""/>
                        </a>
                        <div className="nav-contents">
                           
                            <ul id='list'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contacts">Contact Us</Link></li>

                                <i className="fas fa-times" onClick={togMenuclose}></i>
                            </ul>
                           
                            <i className="fas fa-bars" id="bars" onClick={togMenu}></i>
                        </div>
                        <button className='btn cont-btn'>Contact Us <span><i className="fa-solid fa-arrow-right-long"></i></span></button>
                    </nav>
                </div>
                <Banner/>
            </div>
            
        </div>
    );
}


export default Navigation;