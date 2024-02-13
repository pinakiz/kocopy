import * as React from "react";
// import "./navBar.css"
import "./navBar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("main");
// var sticky = navbar.offsetTop;

// function myFunction() {  
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

const NavBar = () =>{
    return (
        <div className="main">
            <div className="left">
                <span>Copyco</span>
            </div>
            <div className="right">
                <AccountCircleIcon style={{display : 'flex' , backgroundColor:'#ADBC9F'}}/>
            </div>
        </div>
    )
}
export default NavBar