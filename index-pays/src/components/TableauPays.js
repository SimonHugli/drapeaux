import React, { Component } from 'react';
import Paysrow from './Paysrow';

class TableauPays extends Component {

    constructor(props) {

        super(props)





    }
    render() {

        const TableauPaysComplet = []
        this.props.listePays.forEach(pays => {

            TableauPaysComplet.push(<li><Paysrow pays={pays} ></Paysrow></li>)





        });


        return (
            <div className="container">
                <div className="shadow">



                    <ul className="liste-pays">



                        {TableauPaysComplet}
                    </ul>
                </div>

            </div>


        );
    }
}

export default TableauPays;
