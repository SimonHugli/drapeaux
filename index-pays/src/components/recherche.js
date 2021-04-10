


import React, { Component } from 'react';

class Recherche extends Component {

    constructor(props) {

        super(props);


        console.log ( "filter" ,this.props.filterText )
        this.handleFilterText= this.handleFilterText.bind(this)
        
            }

            handleFilterText(e){

                this.props.handleFilterText1(e.target.value)


            }



    render() {




        return (
            <div  className = "recherche-pays" >
                <input type= "text" placeholder= "ta gueule"  onChange = {this.handleFilterText}></input>
            </div>
        );
    }
}

export default Recherche;
