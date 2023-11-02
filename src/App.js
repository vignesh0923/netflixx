import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMovie from './MainMovie'
import Navigation from './Navigation';
import Footer from "./Footer";
import PlayMovies from "./Playmovies"
import NewMovies from "./NewMovies";
import MyCollections from "./MyCollections";
import { useState } from "react";
function App() {
  var [favoriteMovie,setfavoriteMovie] = useState([])
  return (
    <BrowserRouter >
      <Navigation />
      <Routes >
        <Route path="/" element={<MainMovie favoriteMovie = {favoriteMovie} setfavoriteMovie= {setfavoriteMovie}/>} /> 
        <Route path="/playmovies/:id" element={<PlayMovies />} /> 
        <Route path="/newmovies" element={<NewMovies />} /> 
        <Route path="/mycollections" element={<MyCollections favoriteMovie = {favoriteMovie} setfavoriteMovie= {setfavoriteMovie} />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
