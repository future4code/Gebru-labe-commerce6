import React from "react";
import styled from "styled-components"

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
 

  img {
    display: flex;
    width: 50%;
    margin: 0 auto; 
    align-items: center;
   
  }
`

const CardInfos = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const AddCarrinho = styled.button`
  align-self: center;
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