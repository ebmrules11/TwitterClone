import './Home.scss';
import '../../components/Posts/Post.js';
import Post from '../../components/Posts/Post.js';
import logo from '../../Assets/Images/bird.png'
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";



export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
         show: false,
         loginInfo: {
           username: "",
           password: ""
         },
         isAutheticated: false
      };
    }

    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});

    setUsername = (username) => this.setState({loginInfo: {...this.state.loginInfo, username: username }});
    setPassword = (password) => this.setState({loginInfo:  {...this.state.loginInfo, password: password }});

    attemptLogin = async () => {
      console.log(this.state);

      Axios.post("http://localhost:3000/api/auth",{
        username: this.state.loginInfo.username,
        password: this.state.loginInfo.password
      }).then((res) =>
      {
        this.setState({isAutheticated: res.data});
        if (this.state.isAutheticated) {
          console.log(this.state.isAutheticated);
        } else {
          console.log(this.state.isAutheticated);
        }
      })


      //make api call
    }

    render(){
        return (

                <div className="Home">
                        <div className="topDiv">
                            <h1 className="header">TweedleDum</h1>
                            <h1 className="right">Have an account? <Link className="link" to = "/login">Log in.</Link></h1>
                            <Button variant="primary" onClick={this.handleShow}> Login </Button>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form action="auth" method="POST">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" placeholder="Enter username" onChange={(e) => {this.setUsername(e.target.value)}}/>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => {this.setPassword(e.target.value)}} />
                                  </Form.Group>
                                </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                <Button variant="primary" onClick={this.attemptLogin}>Login</Button>
                              </Modal.Footer>
                            </Modal>

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
