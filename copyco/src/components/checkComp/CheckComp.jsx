import { useState , useEffect } from "react";
import Home from "../home/Home";
import PasswordCheck from "../passwordCheck/PasswordCheck";
import { useParams } from "react-router-dom";
import Textarea from "../../widget/textarea/Textarea";

const CheckComp = ()=>{
    const [flag , setFlag] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    const isReq = localStorage.getItem(`${id}`);
    const check = async() =>{
        // console.log('IN CHECK' , id);
        await fetch(`http://localhost:3001/check/${id}`)
        .then((res)=>{
            // console.log(res.json);
            return res.json();
        }).then((data) => {
            // console.log(data.check);
            setFlag((data.check));
            // return data.check;
          }).catch((e)=>(console.log(e)));
    }
    const handleFetch = () => {
        setIsLoading(true);
        check().then((r) => {   

        //   setIsLoading(false);
        });
      };
      
      
    return(
        <div>
            {(!isLoading) ? handleFetch() : true}
            {/* <PasswordCheck/> */}
            {/* {console.log(flag)} */}
            {(flag && !isReq) ? <PasswordCheck/> : <Textarea uid = {id}/>}
            {/* <Textarea></Textarea> */}
        </div>
    )
}
export default CheckComp;