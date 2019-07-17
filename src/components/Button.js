import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    renderButtonText=(value)=>value==='English'?'Submit':'VoorLegen'

    renderButton=(color)=>{
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value)=>this.renderButtonText(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){ 
        return (
            <ColorContext.Consumer>
            {color=>this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
       

}

export default Button;