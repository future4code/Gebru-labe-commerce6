import React from "react";
import styled from "styled-components"

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: flex;
    width: 40%;
    margin-top: 10px;
    margin-bottom: 30px;
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