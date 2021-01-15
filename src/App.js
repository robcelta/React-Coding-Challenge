import React, {useEffect, useState } from 'react'
import './App.css';

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'


function App() {

  const [popular, setPopular] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=67349d4aecf040b639d88fa295115406')
      .then(response => response.json())
      .then(data => setPopular(data.results))
    }, [])

  return (
    <div className="App">
      <Header />
      <Main popular={popular} />
      <Footer />
    </div>
  );
}

export default App;
