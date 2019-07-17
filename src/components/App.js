import React, { Component } from 'react';
import User from './User';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component{

    state={
      Country: 'English'
    }

 
  
  onCountryChange=(Country)=>this.setState({ Country})

  render(){

    console.log(this.state.Country)

    return (
      <div className="ui container">
        <div>
          Select a Langauage:
          <i className="flag us" onClick={()=>this.onCountryChange('English')} />
          <i className="flag nl" onClick={()=>this.onCountryChange('Dutch')}/>
        </div>   
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.Country}>
            <User />
          </LanguageContext.Provider> 
        </ColorContext.Provider>
             
      </div>
    )
  }
}



export default App;
