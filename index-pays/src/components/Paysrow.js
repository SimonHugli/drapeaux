import React, { Component } from 'react';

class Paysrow extends Component {

    constructor(props) {



        super(props);
        console.log(  "row", props.pays.translations.fr)
       
        }

    render() {

   let nom = this.props.pays.translations.fr
   let flag =  this.props.pays.flag

 
        return (
            <div>
                 
                  <img src={flag} alt= "" /> 
                 <h5>{nom}</h5> 
                  
                  
                  
            </div>
        );
    }
}

export default Paysrow;
