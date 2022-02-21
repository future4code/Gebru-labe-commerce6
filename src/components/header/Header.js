import React from "react"
import Logo from "../../img/space-toys_logo.png";
import styled from "styled-components";
import Carrosel from "./CarrosselPromo";

const DivHeader = styled.div`
display:flex;
margin: 0px;
width: 100%;
background-color: #FFFFFF;
flex-direction: column;
align-items: center;
height: 200px;

`

const LogoImg = styled.img `
display: flex;
height: 100%;
justify-content: flex-start;
align-items: flex-start;



`


// const NavHeader = styled.nav`
// width: 100%;
// height: 30px;
// background-color: #52af26;
// display: flex;
// align-items: center;
// justify-content: space-evenly;
// cursor: pointer;


// `


class Header extends React.Component {
   
    render(){
        return (
            <DivHeader>
                 <LogoImg src={Logo}
                alt="Logo"
               />
             
               </DivHeader>
      )  
    }
}
export default Header;