import './Features.css'

import { FaMagic } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";

const Features = () => {
  return (
    <div className='features'>
        <div className='container'>
            <div className='row text-center py-5'>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                    <span className='icon'><FaMagic/></span>
                    <h3 className='title'>Tell Us Your Idea</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                    <span className='icon'><GiCutDiamond/></span>                        
                    <h3 className='title'>We Will Do All The Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <span className='icon'><GiEarthAmerica/></span>
                    <h3 className='title'>Your Product is Worldwide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features