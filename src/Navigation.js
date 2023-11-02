import neflixlogo from './images/netflix_logo.png'
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import './styles/navigation.css'
 
function Navigation() {
    return ( 
        <div>
            <ul className='navigation-ul'>
                <li className='navigation-img'><img src={neflixlogo} className='netflix-logo' alt='netflix-logo' /></li>
                <li className='navigation-li'>
                    <Link to={'/'} className='navigation-li-Link'>Movies</Link>
                </li>
                <li className='navigation-li'>
                    <Link to={'/newmovies'} className='navigation-li-Link'>New Movies</Link>
                </li>
                <li className='navigation-li'>
                    <Link to={'/mycollections'} className='navigation-li-Link'>My Collections</Link>
                </li>
                <li className='navigation-li'>
                    <div style={{marginTop:"5px"}}><BsPersonCircle /></div>
                    <div><h3>John</h3></div>
                    
                </li>
            </ul>
        </div>
    )
}

export default Navigation