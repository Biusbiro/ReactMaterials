import React from 'react';
import BotaoGol from './BotaoGol';

const Time = (objeto) => {
    return(
        <div>
            <h3>{objeto.nome}</h3>
            <h4>{objeto.gols}</h4>
            <botaoGol marcarGol={objeto.marcarGol}/>
        </div>
    );
}

export default Time;