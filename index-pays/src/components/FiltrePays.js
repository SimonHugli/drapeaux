

import React, { Component } from 'react';
import Recherche from './recherche';
import TableauPays from './TableauPays';



class FiltrePays extends Component {

    constructor(props) {



super(props);

this.state = {

filterText : ''
}

this.handleFilterText1= this.handleFilterText1.bind(this)


    }
    handleFilterText1(e){

       this.setState({filterText:e})         
        console.log(e)

    }


    render() {

     

        
        return (
            <div> filtre
              <Recherche  filterText = {this.state.filterText}
                handleFilterText1={this.handleFilterText1}
              
              ></Recherche>
              <TableauPays
              filterText ={this.state.filterText}
              listePays = {this.props.listePays}
              
              ></TableauPays>
            </div>
        );
    }
}

export default FiltrePays;
