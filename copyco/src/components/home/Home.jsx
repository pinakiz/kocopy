import "./home.css"
// import Textarea from "../../widget/textarea/Textarea";
import TextSub from "../../widget/textSubmittions/TextSub";
const Home = ()=>{
    return <div className="homeMain">
        {console.log("IN HOME")}
        <br />
        <span>
            Paste Your Text Here
        </span>
        <br />
        <br />
        {/* <Textarea className = "textArea"/> */}
        <TextSub className = "textSub"/>
    </div>
}

export default Home;