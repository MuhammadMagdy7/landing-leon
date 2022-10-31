import './Servies.css'

import img1 from '../../../assets/images/services.jpg'

import {Sction} from '../index'

import { MdPalette } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import { FaVectorSquare } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";



const Servies = () => {
  return (
    
    <div className='servies' id='Servies'>
            <Sction title='Servies' para="Don't be busy, be productive" />
        <div className='container'>

            <div className='row'>
                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-6 text-s-center'>
                            <div className='row'>
                                <div className='col-lg-2 icon-servies'>
                                    <MdPalette />
                                </div>
                                <div className='col-lg-10 pt-4'>
                                    <h4>Graphic Design</h4>
                                    <p> Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 text-s-center'>
                            <div className='row'>
                                <div className='col-lg-2 icon-servies'>
                                    <FaVectorSquare />
                                </div>
                                <div className='col-lg-10 pt-4'>
                                    <h4>Web Design</h4>
                                    <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 text-s-center'>
                            <div className='row'>
                                <div className='col-lg-2 icon-servies '>
                                    <GiCutDiamond />
                                </div>
                                <div className='col-lg-10 pt-4'>
                                    <h4>UI & UX</h4>
                                    <p> Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction. </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 text-s-center'>
                            <div className='row'>
                            <div className='icon-servies col-lg-2'>
                                <FaPencilRuler />
                            </div>
                            <div className='col-lg-10 pt-4'>
                                <h4>Web Development</h4>
                                <p> Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. </p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                <img className='col-lg-4 w-25 d-none d-lg-block' src={img1} />

            </div>
        </div>
    </div>
  )
}

export default Servies