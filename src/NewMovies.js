
import "./styles/newmovies.css"
import moviearray from './mainmoviearray';

import { Link } from "react-router-dom";
function NewMovies() {
    return (
        <div className="new-movies-container">
            {moviearray.map(function (movie) {
                return (
                    <div className="new-movies-div">
                        <Link to={"/playmovies/" + movie.id}>
                            <img src={movie.movieimg} alt="" className="" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default NewMovies