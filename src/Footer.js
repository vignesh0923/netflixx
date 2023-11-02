import './styles/footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <span><FaFacebookF /> </span>
                <span><AiOutlineInstagram /> </span>
                <span><AiOutlineTwitter /> </span>
                <span><AiOutlineYoutube /> </span>
            </div>
            <div className='footer-link'>
                <div className='footer-down1'>
                    <p>Audio description</p>
                    <p>Investors Relations</p>
                    <p>Legel Notices</p>
                    <button>Service Code</button>
                    <p>© 1997-2023 Netflix, Inc.</p>
                </div>
                <div className='footer-down2'>
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Perfomance</p>
                </div>
                <div className='footer-down3'>
                    <p>Gift Cards</p>
                    <p>Terms of use</p>
                    <p>Corporate Information</p>
                </div>
                <div className='footer-down4'>
                    <p>Media Centre</p>
                    <p>Privacy</p>
                    <p>Contact us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer