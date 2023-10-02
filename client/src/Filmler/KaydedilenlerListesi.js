import React from 'react';
import { Link } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <Link key={movie.id} to={"/filmler/${movie.id"}>
         <span className="saved-movie">{movie.title}</span>
        </Link> 
      ))}
      <Link to="/">
      <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}
