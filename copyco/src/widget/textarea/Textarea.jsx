import { useParams } from "react-router-dom";
import "./textarea.css"
import { useEffect, useState } from "react";
const Textarea = ({uid})=>{
    const [data , setData] = useState({});
    const {id} = useParams();
    
    const fetchData = ()=>
    {   
        try
        { fetch(`http://localhost:3001/share/${uid}`)
            .then((res)=>{
                // console.log(res.json);
                return res.json();
            }).then((d) => {
                // console.log(d.data);
                setData(d.data);
                // return data.check;
            }).then(
              (!localStorage.getItem(id)) ? 
                (fetch(`http://localhost:3001/burn/${uid}`)
                // .then((res)=>{
                //     // console.log(res.json);
                //     return res.json();
                // }).then((d) => {
                //     // console.log(d.data);
                //     setData(d.data);
                //     // return data.check;
                // })
                ).catch((e)=>{
                  console.log(e.message);
                })
               : 
                (console.log("NO BURN :) "))
            )
        }catch (error) {
            console.error('Error fetching data:', error);
        }        
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div className="textMain">
            <textarea cols="50" rows="10" value={((data)?data.code : " none")} className="numbered" ></textarea>
            {/* {console.log(data)}; */}

            {/* {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.code}</p>
            </div>
          );
        })} */}
        </div>
    )
}

export default Textarea;