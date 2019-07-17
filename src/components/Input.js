import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Input extends Component{

    renderText=(value)=>value==='English'?'Name':'Naam'

    render(){
      
            return (
                <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value)=>this.renderText(value)}
                    </LanguageContext.Consumer>
                </label>    
                <input  /> 
                </div>
            )
    }

}


export default Input;