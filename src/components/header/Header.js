import React from "react"
import Logo from "../../img/space-toys_logo.png";
import styled from "styled-components";

const DivHeader = styled.div`
display:flex;
position: absolute;
height: 100px;

`

const LogoImg = styled.img `
display: flex;
height: 120px;
margin-top: 30px;
margin-left: 10px;




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