import React from 'react';
import Time from './Time';
import Partida from './Partida';
import BotaoGol from './BotaoGol';


const PlacarContainer = (Objeto) => {


    return(
        <div>
            <div style={{float: "left", 
                         padding: "10px", 
                         left: "10px", 
                         border: "1px solid #00F", 
                         margin: "right"}}>
                <h5>Casa</h5>
                <Time 
                    nome={Objeto.casa.nome} 
                    gols={Objeto.casa.gols} 
                    marcarGol={Objeto.marcar_gols_casa}/>
                <BotaoGol />
            </div>
            <div style={{float: "left", 
                         padding: "10px", 
                         left: "10px", 
                         border: "1px solid #00F", 
                         margin: "right"}}>
                <Partida 
                    estadio={Objeto.partida.estadio} 
                    data={Objeto.partida.data} 
                    hora={Objeto.partida.hora}/>
            </div>
            <div style={{float: "left", 
                         padding: "10px", 
                         left: "10px", 
                         border: "1px solid #00F", 
                         margin: "right"}}>
                <h5>Visitante</h5>
                <Time 
                    nome={Objeto.visitante.nome} 
                    gols={Objeto.visitante.gols} 
                    marcarGol={Objeto.marcar_gols_visitante}/>
                <BotaoGol />
            </div>
        </div>
        
    );
}

export default PlacarContainer;