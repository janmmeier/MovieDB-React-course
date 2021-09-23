import React from 'react';
// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Header from './Components/Header';
import Home from './Components/Home';
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';

//styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:movieId' element={<Movie/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>

);

export default App;
