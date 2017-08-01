import React, {Component} from 'react';
//import InputText from './Common/InputText';
//import CheckBox from './Common/CheckBox';
//import RadioButtonList from './Common/RadioButtonList';
//import Select from './Common/Select';

import {generoOptions, paisOptions} from '../Constants';

import {CheckBox, CheckBoxList, RadioButton, RadioButtonList, InputText, Select} from './Common';

class Formulario extends Component {
  
    state ={
      nome: '',
      cidades: [],
      genero: '',
      pais: 'us',
    }

    onNomeChange = (event) => {
      console.log(event.target.value);
      this.setState({nome: event.target.value})
    }

    onCidadesChange = (event) => {
      console.log(event.target.value, event.target.checked);

      const {value} = event.target;
      const index = this.state.cidades.indexOf(value);
    
      let newCidades;

      if (index === -1){
        newCidades = this.state.cidades.concat([ value ]);
      }
      else {
        newCidades = this.state.cidades.slice();

        newCidades.splice(index, 1);
      }

      this.setState({ cidades: newCidades}, () => console.log(this.state.cidades));
    }

    onGeneroChange = (event) =>{
      this.setState({ genero:  event.target.value }, () => {
        console.log(this.state.genero);
      });  
    }

    onPaisChange = (event) => {
      this.setState({pais: event.target.value}, () => {
        console.log(this.state.pais);
      });
    }

  render(){

    

    return (

      <form>
        <h4>Formulario</h4>

        Nome: <input type="text" name="nome" 
        value={this.state.nome} 
        onChange={this.onNomeChange}/>

        <InputText 
          name="nome"
          label="Nome: "
          value={this.state.nome} 
          onChange={this.onNomeChange}
        />

        <br/>
        <h4>Cidades</h4>
        <CheckBox 
          value="Maringa" 
          label="Maringa"
          onChange={this.onCidadesChange} 
          checked={this.state.cidades.indexOf('Maringa') !== -1} 
          name="cidades[]"
        />

        <CheckBox 
          value="Londrina" 
          label="Londrina"
          onChange={this.onCidadesChange} 
          checked={this.state.cidades.indexOf('Londrina') !== -1} 
          name="cidades[]"
        />

        <CheckBox 
          value="Curitiba" 
          label="Curitiba"
          onChange={this.onCidadesChange} 
          checked={this.state.cidades.indexOf('Curitiba') !== -1} 
          name="cidades[]"
        />

        <h4>Radio Button List</h4>
        <RadioButtonList
          name='genero'
          options={generoOptions}
          onChange={this.onGeneroChange}
          checkedOption={this.state.genero}
        />
        <h4>Genero</h4>

       <Select 
          name="pais"
          value={this.state.pais}
          onChange={this.onPaisChange}
          options={paisOptions}
       />

        <select name="pais" value={this.state.pais} onChange={this.onPaisChange}>
          <option value ="br">Brasil</option>
          <option value ="ar">Argentina</option>
          <option value ="us">EUA</option>
          <option value ="ch">China</option>
          <option value ="jp">Japão</option>
        </select>
        <br/>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    
    );
  }
}

export default Formulario;