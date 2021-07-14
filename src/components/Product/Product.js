import React from 'react';
import dummyProduct from '../../assets/images/product.png';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Link to={'/details'}>
      <div className="h-100 flex">
        <img className="m-auto" src={dummyProduct} alt="product" />
      </div>
      <h2 className="font-bold mt-2 text-2xl">2013 Trofeo Estate Pinot Noir</h2>
      <p className="mt-5 text-xl">45$</p>
      <p className="mt-5 mt-12 text-sm ">GOLD  medal  2014 Mornington Peninsula Vignerons Wine Show</p>
    </Link>
  )
}

export default Product;
