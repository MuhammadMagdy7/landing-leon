import './Contact.css'

import {Sction} from '../index'

import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact pb-5' id='Contact'>
        <div className='container'>
            <Sction title='Contact' para='We are born to create' />
            <div className='text-center'>
                <h2 className='headcontact fw-bolder'>Feel free to drop us a line at:</h2>
                <h2><a href='#'>leonagency@mail.com</a></h2>
                <p> Find Us On Social Networks :</p>
                    <ul className='gap-3'>
                        <li><a href='www.youtube.com'><FaYoutube /></a></li>
                        <li><a href='www.facebook.com'><FaFacebookF /></a></li>
                        <li><a href='www.twitter.com'><FaTwitter /></a></li>
                    </ul>

            </div>

        </div>
    </div>
  )
}

export default Contact