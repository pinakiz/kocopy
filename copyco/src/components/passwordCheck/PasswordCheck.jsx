import { useState } from "react";
import "./passwordcheck.css"
import { useParams } from "react-router-dom";
import Textarea from "../../widget/textarea/Textarea";
const PasswordCheck = (req , res) => {
    const [flag , setFlag] = useState(0);
    const [formData, setFormData] = useState({
        passwrd : "",
      });
      const {id} = useParams();
    //   console.log(id);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3001/auth/${id}` , {
            headers : {
                'Content-Type' : 'application/json',
            },
            method : "POST",
            body : (JSON.stringify(formData)),
        }).then((res)=>{
            console.log("in auth fetch");
            return res.json();
          }).then((data) => {
            console.log(data.check);
            // if(data.check){
            //     // console.log("hello");
            //     // return <Textarea uid = {id}/>
            //     setFlag(data.check);
            // }
            setFlag((data.check));
            // return data.check;
          }).catch((e)=>(console.log(e)));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log('In' + value);
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
  
    
    return(
        <div className="passMain">
            {flag === 0 ?( <div className="passInner">
                {/* <p>{id}</p> */}
                <form action="" method="post" onSubmit={handleSubmit}>
                    <label htmlFor="">Password </label>
                    <input type="password" name= "passwrd" onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div> ) : <Textarea uid={id}/>
        }
            
            
        </div>
    )
}

export default PasswordCheck;