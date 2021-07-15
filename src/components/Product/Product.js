import React from 'react';
import dummyProduct from '../../assets/images/product.png';
import label from '../../assets/images/label-bg.svg';
import { Link } from 'react-router-dom';

const Product = ({small, subTitle, price}) => {
  return (
    <Link to={'/details'} rel="noopener" className={`product p-12 ease-out border-2 border-white hover:border-black border-solid ${small ? ' text-center' : ''}`}>
      <div className={`${small ? 'h-56' : 'h-100'} flex relative`}>
        <img className={`m-auto ${small ? 'h-56' : ''}`} src={dummyProduct} alt="product" />
        {small && <div className="w-16 flex h-7 absolute right-0 top-0" style={{ background: `url(${label}) no-repeat` }}>
          <p className="m-auto text-white text-sm h-7 pt-1"><sub>$</sub>{price}.<sup>00</sup></p>
        </div>}
      </div>
      {!small && <h2 className="font-bold mt-2 text-2xl">2013 Trofeo Estate Pinot Noir</h2>}
      <p className="mt-5 text-xl w-full ">{subTitle}</p>
      {!small && <p className="mt-5 mt-12 text-sm ">GOLD medal 2014 Mornington Peninsula Vignerons Wine Show</p>}

      {small && <button className="learn-button text-sm leading-loose pt-3 border-b border-solid border-black mx-auto opacity-0">
        Learn More
      </button>}
    </Link>
  )
}

export default Product;
