import './Portfolio.css'

import {Sction} from '../index'
import Portfolio1 from '../../../assets/images/portfolio-1.jpg'
import Portfolio2 from '../../../assets/images/portfolio-2.jpg'
import Portfolio3 from '../../../assets/images/portfolio-3.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio pb-4' id='Portfolio'>
        <Sction title= 'Portfolio' para='If you do it right, it will last forever.' />
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card mb-3">
                        <img src={Portfolio1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Project Here</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card mb-3">
                        <img src={Portfolio2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Project Here</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className="card mb-3">
                        <img src={Portfolio3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Project Here</h5>
                            <p className="card-text">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio