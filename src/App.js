import React from "react";

import Produtos from "./components/produtos/Produtos";
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import styled from "styled-components";
import produto1 from "./img/produto1.jpg";
import produto2 from "./img/produto2.jpg";
import produto3 from "./img/produto3.jpg";
import produto4 from "./img/produto4.jpg";
import produto5 from "./img/produto5.jpg";
import produto6 from "./img/produto6.jpg";


const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  font-family: sans-serif;
  display: grid;
  grid-template-rows: 1fr 3fr;
  gap: 8px;
  background-color:#f7b900;
  
  
`;

const produtos = [
  {
    cod: 1,
    nome: "ESCOLHER O NOME",
    valor: 0,
    img: produto1,
  },
  {
    cod: 2,
    nome: "ESCOLHER O NOME",
    valor: 0,
    img: produto2,
  },
  {
    cod: 3,
    nome: "ESCOLHER O NOME",
    valor: 0,
    img: produto3,
  },
  {
    cod: 4,
    nome: "ESCOLHER O NOME",
    valor: 0,
    img: produto4,
  },
  {
    cod: 5,
    nome: "ESCOLHER O NOME",
    valor: 0,
    img: produto5,
  },
  {
    cod: 6,
    nome: "ESCOLHER O NOME",
    valor: 0,
    img: produto6,
  },
  
];
class App extends React.Component {
  state = {
    filtroMin: "",
    filtroMax: "",
    filtroNome: "",
    produtosNoCarrinho: [],
  };

  onChangeFiltroMin = (event) => {
    this.setState({ filtroMin: event.target.value });
  };

  onChangeFiltroMax = (event) => {
    this.setState({ filtroMax: event.target.value });
  };

  onChangeFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value.toUpperCase() });
  };

  adicionaProdutoNoCarrinho = (codProduto) => {
    const addNoCarrinho = this.state.produtosNoCarrinho.find(
      (produto) => codProduto === produto.cod
    );

    if (addNoCarrinho) {
      const novoProdutoAdd = this.state.produtosNoCarrinho.map((produto) => {
        if (codProduto === produto.cod) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }
        return produto;
      });
      this.setState({ produtosNoCarrinho: novoProdutoAdd });
    } else {
      const produtoNovo = produtos.find(
        (produto) => codProduto === produto.cod
      );

      const novoProdutoAdd = [
        ...this.state.produtosNoCarrinho,
        { ...produtoNovo, quantidade: 1 },
      ];

      this.setState({ produtosNoCarrinho: novoProdutoAdd });
    }
  };

  removeProdutoCarrinho = (codProduto) => {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho
      .map((produto) => {
        if (produto.cod === codProduto) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ produtosNoCarrinho: novoProdutoNoCarrinho });
  };
  render() {
    return (
      <AppContainer>
        <Filtro
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeFiltroMax={this.onChangeFiltroMax}
          onChangeFiltroNome={this.onChangeFiltroNome}
        />

        <Carrinho
          produtosNoCarrinho={this.state.produtosNoCarrinho}
          removeProdutoCarrinho={this.removeProdutoCarrinho}
        />

        <Produtos
          produtos={produtos}
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          adicionaProdutoNoCarrinho={this.adicionaProdutoNoCarrinho}
        />
      </AppContainer>
    );
  }
}

export default App;