import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Navbar.scss'
import './scss/common.scss'
import mainlogo from '../Assets/mainlogo.jpg';

const Navbar = () => {
    return (
    <div className='navbar pt-5'>
        <nav className='coontainer'>
        <ul>
            <li className='d-flex navbar-brand'>
            <Link to="/"><img src={mainlogo} /><span>Marg</span>Dharsan</Link>
            </li>
            <li>
            <Link to="/about-us">About Us</Link>
            </li>
            <li>
            <Link to="/assessments">Assessments</Link>
            </li>
            <li>
            <Link to="/products">Products</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <a className='start-button'>Sign in</a>
        </nav>
    </div>
    )
}
export default Navbar;