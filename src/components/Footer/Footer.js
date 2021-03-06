import React from 'react';
import TripAdvisor from '../../assets/images/tripadvisor.svg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/insta.svg';
import twitter from '../../assets/images/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-brown">
      <div className="container pt-14 px-14  m-auto text-white">
        <h2 className="font-bold text-center text-base">TROFEO ESTATE</h2>
        <div className="my-20 flex">
          <img src={TripAdvisor} alt="Trip-advisor" />
          <div className="flex justify-start ml-28 ">
            <Link to="https://www.facebook.com" target="_blank" className="w-11 h-11 border mr-3.5 border-solid border-white rounded-full flex" rel="noreferrer">
              <img className="m-auto" src={Facebook} alt="facebook" />
            </Link>
            <Link to="https://www.twitter.com" target="_blank"  className="w-11 h-11 border mr-3.5  border-solid border-white rounded-full flex" rel="noreferrer">
              <img className="m-auto"  src={twitter} alt="twitter"  />
            </Link>
            <Link to="https://www.instagram.com" target="_blank" className="w-11 h-11 border border-solid border-white rounded-full flex" rel="noreferrer">
              <img className="m-auto"  src={Instagram} alt="instgram"  />
            </Link>
          </div>
          <button className="border-2 border-solid border-white text-white text-sm h-14 py-4 w-2/6 ml-auto mr-0">
            BOOK & ENQUIRE
          </button>
        </div>
      </div>
      <div className="bg-darkBrown w-full m-auto">
        <div className="w-footer mx-auto h-24 flex items-center text-gray-500 text-xs">
          <p className="mr-14">Liquor Act 1982: It is an offence to sell or supply to or to obtain liquor on behalf of a person under age of 18 years.</p>
          <Link className="block mr-8 flex-shrink-0" to="/"  rel="noreferrer" >Privacy Policy</Link>
          <Link className="block flex-shrink-0" to="/"  rel="noreferrer">Site by Evolution</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
