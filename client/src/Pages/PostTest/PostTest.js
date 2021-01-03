import Axios from "axios";
import React, {useState} from "react"; 
import "./PostTest.scss";


export default class postTest extends React.Component{

  
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      bookTitle:  "",
      userId:  ""
    }
  }

  setid = (id) => {
    this.setState({id: id});    
  }

  setuserId = (userId) => {
    this.setState({userId: userId});
  }

  setbookTitle = (bookTitle) => {
    this.setState({bookTitle: bookTitle});
  }

  submitInfo = async () => {
    alert("before insert");
    Axios.post("http://localhost:3000/api/insert", 
    {
      id: this.state.id,
      bookTitle: this.state.bookTitle,
      userId: this.state.userId,
    }).then(() =>
    {
      alert("successful insert");
    })
  }


  render(){
        return (
            <div>
                <h1>ADD TO DATABASE TEST</h1>

                <div>
                    <label>id:</label>
                    <input type="text" name = "id" onChange={(e) => {this.setid(e.target.value)}}/>
                    <label>bookTitle:</label>
                    <input type="text" name = "bookTitle" onChange={(e) => {this.setbookTitle(e.target.value)}}/>
                    <label>userId:</label>
                    <input type="text" name = "userId" onChange={(e) => {this.setuserId(e.target.value);}}/>
                    <button onClick = {this.submitInfo}>Submit</button>
                </div>
            </div>
        )
    }
}