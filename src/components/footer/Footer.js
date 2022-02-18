import React from "react";
import styled from "styled-components"

const EstiloFooter = styled.div`
background-color: #52af26;


`
const ImagemCartoes = styled.img`
width:400px;
padding-bottom:20px;
`
const ImagemRedes = styled.img`
width:50px!important;
height:50px!important;
`
const ImagemSiteSeguro = styled.img`
width:25%;
margin-left:70%;

`
const EstiloDisplayFlex = styled.div`
display:flex;
align-items:center;
flex-direction:row;
text-align:center;
justify-content:space-evenly;
/* border: 1px solid; */

color:white;

`
const DisplayFlexElemento = styled.div`
display:flex;
align-items:center;
flex-direction:column;
/* border: 1px solid; */

`
const EstiloTexto = styled.p`

color:white;
text-align:center;
padding-left:30vh;
padding-right:30vh;
`



class Footer extends React.Component{
    render(){

        return(
        <EstiloFooter>
            <EstiloTexto>"A SpaceToy é uma loja de brinquedos
                presente em São Paulo, Rio de Janeiro, Paraná e
                Santa Catarina.
                Aqui você encontra brinquedos e produtos infantis
                e produtos para bebês, além dos melhores
                lançamentos e promoções de brinquedos do mercado,
                de mais de 50 marcas nacionais e importadas."
            </EstiloTexto>

            <EstiloDisplayFlex>
            <DisplayFlexElemento>
            <ImagemCartoes src="https://th.bing.com/th/id/R.f5bddbdb77607d9dab9b6a4624db2267?rik=FfJuq3LJduK8Ag&riu=http%3a%2f%2fessencialtoldos.com.br%2fwp-content%2fuploads%2f2016%2f11%2fcartoes-de-credito.png&ehk=RZ9sZo2BGAQjyrJ9d%2fGrQ26ZrguTRy1K3UZMNU%2boKpI%3d&risl=&pid=ImgRaw&r=0"/>
            
            <div>Siga-nos</div>

            <div>   
            <a href="https://www.facebook.com/"> <ImagemRedes src="https://th.bing.com/th/id/R.c4b3b4ba5cc5d164bef2fb66c33ac210?rik=DvWyW7%2f1Wp4tLA&pid=ImgRaw&r=0"/></a>
            <a href="https://www.instagram.com/"> <ImagemRedes src="https://th.bing.com/th/id/R.db2d9226b1409a6eac7dafe58da799de?rik=uKa81Br3B5kszQ&riu=http%3a%2f%2fsavvynetworkmarketingwomen.com%2fwp-content%2fuploads%2f2016%2f09%2fInstagram-logo-150x150.png&ehk=Qv7hx44mZws6ZiV5cOPdiZ7DDiEWHi88om87p8V2JJ0%3d&risl=&pid=ImgRaw&r=0"/></a>
            <a href="https://twitter.com/"> <ImagemRedes src="https://th.bing.com/th/id/R.18175cf35fd81ce71a4fcd35fc2650ae?rik=b4%2brm2mt9ubioQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fTwitter-PNG-File-180x180.png&ehk=Ehha2JpD8yHxILj3kp7Qp7xRV04YLMcE1nLyzrWildI%3d&risl=&pid=ImgRaw&r=0"/></a>
            </div>
            </DisplayFlexElemento>
            <DisplayFlexElemento>
            <p>Quem Somos</p>
            <p>Institucional</p>
            <p>Trabalhe conosco</p>
            <p>Política de Privacidade</p>
            </DisplayFlexElemento>
            </EstiloDisplayFlex>
            
            <div>
             <ImagemSiteSeguro src="https://lh3.googleusercontent.com/proxy/UAd7Szw0aj3PVWQvCfldJZJUoS7_DdoodMwUVoU1ErzXUHBEPt6sTltKmy5DvcqYeKng8Kp7qjZarsGEZhp5AnqDWTDdSVJRQY5Gj_2Fhw=s0-d"/>
            </div>
            <EstiloTexto>Todos os direitos reservados a LabeCommerce Inc.</EstiloTexto>
        </EstiloFooter>
    

        )  
}}
export default Footer;