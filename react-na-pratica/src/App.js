import React, { Component } from 'react';
import PlacarContainer from './PlacarContainer';
import './App.css';

class App extends Component {

  marcar_gols_casa(){
      this.setState({
        gols_casa: this.state.gols_casa + 1,
      });
  }

  marcar_gols_visitante(){
      this.setState({
        gols_visitante: this.state.gols_visitante + 1,
      });
  }

  render() {

    const dados = {
      partida: {
          estadio: "Maracanã - RJ",
          data: "10/12/2017",
          hora: "12:30",
      },
      casa: {
          nome: "Vasco",
          gols: 0,
      },
      visitante: {
          nome: "Flamengo",
          gols: 0,
      }
    }

    

    return (
      <div>
        <PlacarContainer 
          partida={dados.partida}
          casa={dados.casa}
          visitante={dados.visitante}
        />
      </div>
    );
  }
}

export default App;
