import React from "react"
import styled from "styled-components";
const ContainerdoItem = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    align-items: center;
    
    p {
        margin: 0;
    }
    
`
const BotaoRemover = styled.button`

font-size: 16px;
margin: auto;
background-color: #52af26; /* Green */
  border-radius: 10px;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;   
    display: inline-block;
    font-size: 16px;
    
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    :hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
    
`
// Estilizei o botao remover
class ItemCarrinho extends React.Component {
    
    render() {
        return( 
        <ContainerdoItem>
            <p>{this.props.item.quantidade}</p>
            <p>{this.props.item.nome}</p>
            <BotaoRemover 
            onClick={() => this.props.removeProdutoCarrinho(this.props.item.cod)}>Remover</BotaoRemover>
        </ContainerdoItem>
        )}
};

export default ItemCarrinho;