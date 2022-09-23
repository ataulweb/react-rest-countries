import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Loadcountries></Loadcountries>

    </div>
  );
}

function Loadcountries (){
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
  }, [])

  return(
    <div>
      <h2>Visiting Every country in the world</h2>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population} region={country.region} area={country.area}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
      <h4>Region: {props.region}</h4>
      <h4>Area: {props.area}</h4>
    </div>
  )
}

export default App;
