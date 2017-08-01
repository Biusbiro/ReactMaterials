import React from 'react';

const Partida = (objeto) => {
    return(
        <div>
            <div>{objeto.estadio}</div>
            <spam>{objeto.data}</spam>
            <spam> - </spam>
            <spam>{objeto.hora}</spam>
        </div>
    );
}

export default Partida;