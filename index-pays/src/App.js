import logo from './logo.svg';
import './App.css';



import React, { Component } from 'react';
import FiltrePays from './components/FiltrePays';



const PAYS = []


class App extends Component {



  fetchCountries() {

    fetch("https://restcountries.eu/rest/v2/all")
      .then(reponse => reponse.json())
      .then((allCountries) => {



        allCountries.forEach((pays) => {




          PAYS.push(pays)


        });
      })

  }



  componentDidMount() {

    this.fetchCountries();

  }

  constructor(props) {
    super(props)


  }
  render() {


    console.log(PAYS)


    return (

      <div className="App">
        <header className="App-header">

          <FiltrePays listePays={PAYS} >   </FiltrePays>

        </header>



      </div>


    );
  }
}

export default App;




