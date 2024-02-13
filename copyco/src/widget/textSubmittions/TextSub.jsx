import { Navigate } from "react-router-dom";
import "./textSub.scss"
import React , {useState} from "react";

function myFunction() {
    var x = document.getElementById("myInput");
    if(x == null) return;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  

const TextSub = ()=>{
  const [uid , setUid] = useState("");
  const [rendFlag , setRendFlag] = useState(0);
  const [formData, setFormData] = useState({
      code : "asdfdsa",
      passwrd : "",
      burn : "",
      exp : "",
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log("IN fetch");

      fetch("http://localhost:3001/create",{
        headers: {
          'Content-Type': 'application/json',
      },  
        method : "POST",
        body : (JSON.stringify(formData)),
      }).then((res)=>{
        // console.log("in fetch");
        return res.json();
      }).then(data => {(setUid(data.id))})
      .then(()=>{setRendFlag(1)})
     .catch((er)=>(console.log(er)));
      
      // console.log("HELLO");
      // console.log(formData);
      // console.log("NAV");
      // return 
    };
  

    const handleChange = (event) => {
      const { name, value } = event.target;
      // console.log('In' + value);
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return(        
        <div className= "textSubMain" onSubmit={handleSubmit}>
            <form action="" method="post">
                <textarea cols="50" rows="10" class="numbered" name="code" onChange={handleChange}></textarea>
                <label>Password : </label>   
                <input className = "decorInput" type="password" id= "myInput" name="passwrd" onChange={handleChange}/>
                <span className="smallText"> leave empty if no password needed.</span><br />
                <input type="checkbox" onClick= {myFunction}/>
                <span style={{fontSize:"15px"}}>Show Password</span>
                <br />
                <br />
                <label>Text Expiration : </label>   
                <select name="exp" id="exp" onChange={handleChange}>
                  <option value="eightHours" selected>8 hours</option>
                  <option value="oneDay">1 Day</option>
                  <option value="oneWeek">1 Week</option>
                  <option value="oneMonth">1 Month</option>
                  <option value="oneYear">1 Year</option>
                  <option value="never"> Never</option>
                </select>
                <br />
                <br />
                <label htmlFor="burnButton">Burn after read ? </label>
                <select type="checkbox" id="burnSelect" name="burn" onChange={handleChange}>
                  <option value="yes">Yes</option>
                  <option value="No" selected>No</option>
                </select>
                <br />
                <br />
                <input id="subButton" type="submit" value="+ Create" />
            </form>
                {localStorage.setItem(uid , 1)}
                {rendFlag ? <Navigate to={`/share/${uid}`} replace= {false}></Navigate> : null};
            
            
        </div>
    )
}
export default TextSub