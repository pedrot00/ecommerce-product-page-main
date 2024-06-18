import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

function Navbar(){
    return (
        <Router>
         <nav className='navbar'>
            <img src ={logo}/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <img className = 'cart' src = {cart}></img>
            <img className = 'avatar' src = {avatar}></img>
        </nav>
        <div className='lineBar'></div>  
      </Router>
    )
}

export default Navbar;