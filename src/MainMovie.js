import kushi from './images/kushi-bg.jpg'
import kushiLogo from './images/kushi-logo.png'
import './styles/mainmovie.css'
import { AiFillPlayCircle, AiFillHeart } from 'react-icons/ai';
import kushivideo from './videos/kushi.mp4'
import moviearray from './mainmoviearray';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MainMovie({ setfavoriteMovie, favoriteMovie }) {

    var [movieChck, setmovieChck] = useState(true);

    function favoriteClick(e) {
        const isDuplicate = favoriteMovie.some(data => Number(e.id) === Number(data.id));

        if (!isDuplicate) {
            setfavoriteMovie([...favoriteMovie, e]);
        }

    }

    function movieChange() {
        if (movieChck) {
            setmovieChck(false)
        }
        else {
            setmovieChck(true)
        }
    }
    return (
        <>
            <div className='main-movie'>
                {movieChck ?
                    <img src={kushi} alt='' className='main-movie-img' /> :
                    <video src={kushivideo} className='main-movie-img' type="video/mp4" autoPlay />
                }
                {/* <img src={kushi} alt='' className='main-movie-img' /> */}
                <div className='main-movie-content'>
                    <img src={kushiLogo} alt='' className='main-movie-content-img' />
                    <h2>Watch in Telugu,Tamil, Hindi, Malayalam,<br /> Kannada</h2>
                    <p>Worlds and families collide when the son of a prominent atheist falls
                        head over heels for the daughter of his
                        father’s nemesis, a revered Hindu leader.
                    </p>
                    <button onClick={movieChange}><AiFillPlayCircle /> Play</button>
                </div>
            </div>

            <div className='trending-now'>
                <h1>Trending Now</h1>
                <div className='main-movie-container'>
                    {
                        moviearray.map(function (movie) {
                            return (
                                <div key={movie.id} className='trending-div'>
                                    {movie.type === "Trending" ?
                                        <>
                                            <Link to={"/playmovies/" + movie.id}>
                                                <img src={movie.movieimg} alt={movie.moveiname} className='trending-img-div' />
                                            </Link>
                                            <AiFillHeart className='trending-img-div-heart' onClick={() => favoriteClick(movie)}></AiFillHeart>
                                        </> : ""
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='trending-now'>
                <h1>New Movies</h1>
                <div className='new-movie-container'>
                    {
                        moviearray.map(function (movie) {
                            return (
                                <div key={movie.id} className='trending-div'>
                                    {movie.type === "New" && movie.id <= 10 ?
                                        <>
                                            <Link to={"/playmovies/" + movie.id}>
                                                <img src={movie.movieimg} alt={movie.moveiname} className='trending-img-div' />
                                            </Link>
                                            <AiFillHeart className='trending-img-div-heart' onClick={() => favoriteClick(movie)}></AiFillHeart>
                                        </>
                                        : <span style={{ paddingLeft: "-100px" }}></span>
                                    }

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default MainMovie