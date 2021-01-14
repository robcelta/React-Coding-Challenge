import React, {useEffect, useState, useContext } from 'react'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'


function App() {

  const [popular, setPopular] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=67349d4aecf040b639d88fa295115406')
      .then(response => response.json())
      .then(data => setPopular(data.results))
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=67349d4aecf040b639d88fa295115406&sort_by=release_date.asc')
      .then(response => response.json())
      .then(data => setSearch(data.results))
    }, [])

  return (
    <div className="App">
      <Header />
      <Main popular={popular} search={search}/>
      <Footer />
    </div>
  );
}

export default App;
