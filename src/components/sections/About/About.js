import './About.css'

import {Sction} from '../index'

import aboutimg from '../../../assets/images/about.jpg'

const About = () => {
  return (
    <div className='about pb-3' id='About'>
        <div className='container'>
            <Sction title='About' para='Less is more work' />
            
            <div className='row'>
                <div className='col-lg-5 col-md-6'>
                    <img src={aboutimg} className=' aboutimg'/>
                </div>
                <div className='col-lg-7 col-md-6'>
                    <div className='row fw-bold h-50'>
                    <h5 className='headTitle'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!</h5>
                    </div>

                    <hr className='line' />

                    <div className='row'>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum officiis dolorum hic voluptate quaerat minima, similique inventore esse, alias, sed quo officia?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About