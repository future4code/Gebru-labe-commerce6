import React from "react";
import styled from "styled-components"
import ItemCarrinho from "./ItemCarrinho";
const ContainerdoCarrinho = styled.div`
  height: 110px;
  background-color: #A0C3FA;
  display: flex;
  align-items: center;
  padding: 0px;
  margin-top: -72px;
  
`;
// Adicionei cor de Fundo Azul no Container do Carrinho
const ContainerLista = styled.div`
 
  gap: 4px;
  margin-left: 2%;
`
const EstiloCarrinho = styled.h3`
display: flex;
margin-left:10%;
`
const EstiloValorTotal = styled.h4`
display: flex;
margin-left:15%;
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