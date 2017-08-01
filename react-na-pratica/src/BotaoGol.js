import React from 'react';

const BotaoGol = () => {

    
    handleClick(){
        event.eventDefault();
        this.props.marcarGol();
    }
    return(
        
        <button onClick={this.handleClick.bind(this)}>Gol</button>
    );
    
}

export default BotaoGol;