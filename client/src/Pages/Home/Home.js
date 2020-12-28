import './Home.css';
import '../../components/Posts/Post.js';
import Post from '../../components/Posts/Post.js';
import logo from '../../Assets/Images/bird.png'
import { Link } from "react-router-dom";
import React, { Component } from 'react';


export default class Home extends Component{
    render(){
        return (
                <div className="Home">
                        <h1>{this.props.title}</h1>

                        <div>
                                <nav>
                                    <ul class="bulletDelete">
                                        <li className = "navItem">
                                            <Link className="link" to = "/"><img className="Logo" src = {logo} alt = "logo" /></Link>
                                        </li>
                                        <li className = "navItem">
                                            <Link className="link" to = "/">Home</Link>
                                        </li>
                                        <li className = "navItem">
                                            <Link className="link" to = "/about">Profile</Link>
                                        </li>
                                    </ul>
                                </nav>
                        </div>
                </div>
            );
        }
    }