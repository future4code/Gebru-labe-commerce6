import React from "react";
import styled from "styled-components"
import ItemCarrinho from "./ItemCarrinho";
const ContainerdoCarrinho = styled.div`
  /* border: 1px solid black; */
  background-color: #06aed5;
  padding: 0px;
`;
// Adicionei cor de Fundo Azul no Container do Carrinho
const ContainerLista = styled.div`
  display: grid;
  gap: 4px;
`
const EstiloCarrinho = styled.h3`
margin-left:5%;
`
const EstiloValorTotal = styled.h4`
margin-left:5%;
`
// recuei a margem do texto carrinho e valor total
class Carrinho extends React.Component {
  calculaValorTotal = () => {
    let valorTotal = 0;
    for(let produto of this.props.produtosNoCarrinho){
        valorTotal += produto.valor * produto.quantidade
    }
    return valorTotal
}
  render(){
    return <ContainerdoCarrinho>
      <EstiloCarrinho>Carrinho:</EstiloCarrinho>
      <ContainerLista>
        {this.props.produtosNoCarrinho.map((produto) => {
          return <ItemCarrinho 
            item={produto}
            removeProdutoCarrinho={this.props.removeProdutoCarrinho}
          />
        })}
        
      </ContainerLista>
      <EstiloValorTotal>Valor total: R${this.calculaValorTotal()},00</EstiloValorTotal>
    </ContainerdoCarrinho>
  }
}

export default Carrinho;