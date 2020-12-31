import Axios from "axios";
import React, {useState} from "react"; 
import "./PostTest.scss";


export default class postTest extends Component{
    render(){

    const [id, setid] = useState("");
    const [bookTitle, setbookTitle] = useState("");
    const [userId, setUserId] = useState("");

    const submitInfo = () => {
    Axios.post("http://localhost:3000/api/insert", {
      id: id,
      bookTitle: bookTitle,
      userId: userId,
    }).then(() =>{
      alert("successful insert");
    })
  }
        return (
            <div>
                <h1>ADD TO DATABASE TEST</h1>

                <div>
                    <label>id:</label>
                    <input type="text" name = "id" onChange={(e) => { setid(e.target.value);}}/>
                    <label>bookTitle:</label>
                    <input type="text" name = "bookTitle" onChange={(e) => { setbookTitle(e.target.value);}}/>
                    <label>userId:</label>
                    <input type="text" name = "userId"/>

                    <button onClick = {submitInfo}>Submit</button>

                </div>
            </div>
        )
    }
}