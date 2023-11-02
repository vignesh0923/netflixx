import { useParams } from "react-router-dom";
import moviearray from "./mainmoviearray"

import './styles/playmovies.css'
function PlayMovies(){
    var {id} = useParams()

    var data = moviearray.filter((data)=>{
        return Number(data.id) === Number(id)
    })[0]

    return (
        <div className="play-movies">
            <video src={data.movievideo} controls/>
        </div>
    )
}

export default PlayMovies