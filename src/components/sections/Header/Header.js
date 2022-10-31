import './Header.css'
import logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className='container'>
            <a className="navbar-brand" href="#"><img className='logo' src={logo} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Servies">Servies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header