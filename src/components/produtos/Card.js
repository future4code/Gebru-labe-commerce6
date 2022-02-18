import React from "react";
import styled from "styled-components"

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center; 
  /* border: 1px solid; */
  margin:10px 10px;
  border-radius:20px;
  box-shadow: 2px 2px 9px grey;
  background-color:white;
  /* Adicionei cantos arredondados nos cards e um pouco de sombra */

  img {
    display: flex;
    /* width: 40%; */
    margin-top: 10px;
    margin-bottom: 30px;
    width: 40%!important;
    height: 50%!important;
    :hover{
    -webkit-transform: scale(0.2);
-ms-transform: scale(1.2);
transform: scale(1.1);
transition: 0.3s ease;
  }
    

 

  img {
    display: flex;
    width: 50%;
    margin: 0 auto; 
    align-items: center;
   

  }
`
            // adicionei efeito hover as imagens
            // e setei tamanho unico para todas as imagens
const CardInfos = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
// estilizei os botões Adicionar ao Carrinho
const AddCarrinho = styled.button`
  align-self: center;

  background-color: #52af26; /* Green */
  border-radius: 10px;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;   
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    :hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

  margin-bottom: 60px;
  

`

class Card extends React.Component {
  render() {
    const produto = this.props.produto
    return (
      <CardsContainer>
        <img src={produto.img} />
        <CardInfos>
          <p><strong>{produto.nome}</strong></p>
          <p>R${produto.valor},00</p>
          <AddCarrinho onClick={() => this.props.adicionaProdutoNoCarrinho(produto.cod)}>
            Adicionar ao carrinho
          </AddCarrinho>
        </CardInfos>
      </CardsContainer>
    )    
  }
}
  
export default Card;