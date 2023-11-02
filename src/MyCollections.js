import './styles/mycollections.css'
import { Link } from 'react-router-dom'
function MyCollections({ favoriteMovie }) {
    return (
        <div className="my-collections">
            {
                favoriteMovie.map((movie, index) => {
                    return (
                        <div key={index} >
                            <Link to={"/playmovies/" + movie.id}>
                                <img src={movie.movieimg} className='my-collection-img' />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyCollections