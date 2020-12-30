import './profile.scss';
import '../../components/Posts/Post.js';
import Post from '../../components/Posts/Post.js';
import logo from '../../Assets/Images/bird.png'
import { Link } from "react-router-dom";
import React, { Component } from 'react';


export default class Profile extends Component{
    render(){
        return(
                <div className="profile">
                    <div className="leftnavBar">
                        <nav>
                            <ul class="bulletDelete">
                                <li className = "navItem">
                                    <Link className="link img" to = "/"><img className="Logo" src = {logo} alt = "logo" /></Link>
                                </li>
                                <li className = "navItem">
                                    <Link className="link" to = "/">Home</Link>
                                </li>
                                <li className = "navItem">
                                    <Link className="link" to = "/profile">Profile</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            );
    }
}