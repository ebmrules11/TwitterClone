import './Home.scss';
import '../../components/Posts/Post.js';
import Post from '../../components/Posts/Post.js';
import logo from '../../Assets/Images/bird.png'
import { Link } from "react-router-dom";
import React, { Component } from 'react';


export default class Home extends Component{
    render(){
        return (
            
                <div className="Home">
                        <div className="topDiv">
                            <h1 className="header">TweedleDum</h1>
                            <h1 className="right">Have an account? <Link className="link" to = "/profile">Log in.</Link></h1>
                        </div>
                        <div className="leftnavBar">
                            <nav>
                                <ul className="bulletDelete">
                                    <li className = "navItem">
                                        <Link className="link img" to = "/"><img className="Logo" src = {logo} alt = "logo" /></Link>
                                    </li>
                                    <li className = "navItem">
                                        <Link className="link" to = "/">Home</Link>
                                    </li>
                                    <li className = "navItem">
                                        <Link className="link" to = "/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link className="postTest" to = "/testDB">Test Database</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                </div>
            );
        }
    }