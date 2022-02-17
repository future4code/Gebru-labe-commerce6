import React from "react";
import styled from "styled-components"


const DivFiltro = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: #7FFF00;
`

const DivInput = styled.label`
  display: flex;
`

class Filtro extends React.Component {
  render() {
    return (

      <DivFiltro>    
       
        <div>
          <DivInput>
            <input className="inputValores" 
            type="number"
            placeholder="Valor mínimo"
            value={this.props.filtroMin}
            onChange={this.props.onChangeFiltroMin}
            />
          </DivInput>
        </div>

        <div>
          <DivInput>
            <input className="inputValores" 
            type="number"
            placeholder="Valor máximo"
            value={this.props.filtroMax}
            onChange={this.props.onChangeFiltroMax}
            />
          </DivInput>
        </div>

        <div>
          <DivInput>
            <input className="inputBusca" 
            type="text"
            placeholder="Buscar"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
            />
          </DivInput>
        </div>
      </DivFiltro>
    );
  }
}

export default Filtro;