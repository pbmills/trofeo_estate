import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <ul className="flex items-center">
            <li className="block lg:inline-block lg:mt-0 text-teal-200 mr-14" ><Link to="/wine" rel="noopener">Wine</Link></li>
            <li className="block lg:inline-block lg:mt-0 text-teal-200 mr-14"><Link to="/food" rel="noopener">Food</Link></li>
            <li className="block lg:inline-block lg:mt-0 text-teal-200 mr-14" ><Link to="/weddings" rel="noopener">Weddings</Link></li>
          </ul>
          <Link to="/" rel="noopener">
            <img className="w-80" src={Logo} alt="Logo" />
          </Link>
          <ul className="flex items-center">
            <li className="block lg:inline-block lg:mt-0 text-teal-200 mr-14" ><Link to="/visits&stay" rel="noopener">Visit & Stay</Link></li>
            <li className="block lg:inline-block lg:mt-0 text-teal-200 mr-14"><Link to="/about" rel="noopener">About</Link></li>
            <li className="block lg:inline-block lg:mt-0 text-teal-200 mr-14" ><Link to="/contact" rel="noopener">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
