import React from 'react';
import Eight from '../../assets/images/8.svg';
import Bottle from '../../assets/images/bottle.png';
import SilverGoldBadge from '../../assets/images/gold-silver-badge.svg';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Product from '../../components/Product';

const ProductDetails = () => {
  const options = [
    {value: 'Bottle A', selected: false},
    {value: 'Bottle B', selected: false},
    {value: 'Bottle C', selected: false},
    {value: 'Bottle D', selected: false}
  ]

  return (
    <div>
      <div className="mt-20 grid-cols-3 gap-12 mb-28 w-full bg-yellow">
        <div className="w-full relative">
          <img className="absolute top-1/2 absolute-center-y left-0 -mr-10" src={Eight} alt='eigth'/>
          <div className="container mx-auto flex relative z-10 h-full">
            <div className="-mb-28 mt-28 ml-32 mr-14 flex-shrink-0">
              <img src={Bottle} alt="bottle"/>
            </div>
            <div className="flex-grow h-full">
              <div className="flex flex-grow h-40">
                <div className="w-3/5 ">
                  <div className="align-end flex flex-grow h-full items-end border-double border-r-4 border-black">
                    <img className="h-20 -mb-14" src={SilverGoldBadge} alt="silver-gold-badge"/>
                  </div>
                </div>
                <div className="w-2/5 pt-18 pl-11">
                  <p className="text-sm leading-loose text-brown">
                    HARVEST DATE: 26th February <br/>
                    BAUMÉ: 10.8˚ <br/>
                    BLEND: 98% Pinot Noir 2% Pinot Meunier <br/>
                    AGING REGIME: Stainless Steel <br/>
                    SITE: Point Leo <br/>
                    METHOD: Disgorged May 2013 <br/>
                  </p>
                </div>
              </div>
              <div className="flex flex-grow pt-12 mt-4 mb-12">
                <h1 className="text-7xl font-bold w-3/5 text-white">
                  2008 Trofeo Estate Cuvée
                </h1>
                <div className="w-32 mt-8 mr-0 mt-auto ml-auto">
                  <Select options={options} className="bg-yellow"/>
                </div>
              </div>
              <div className="flex flex-grow">
                <p className="w-3/5 text-base leading-loose text-brown  border-double border-r-4 border-black pr-14">
                  5 years in the making, our Cuvee offers a fine beaded mousse that is persistent until the very last
                  drop. The delightful blend of 98% Pinot Noir and 2% Pinot Meunier create subtle red fruit aromas
                  complimented on the palate by a touch of creaminess. A perfect balance between dryness and acidity
                  results in a bright, crisp bubbly that can be enjoyed anywhere, anytime.
                </p>
                <div className="w-2/5 text-base leading-loose text-brown pl-11 pb-12">
                  <div className="border-b border-solid  border-black  pb-4">
                    GOLD medal 2014 Mornington
                    <br/>
                    <p className="text-sm ml-4 pt-2">Peninsula Vignerons Wine Show</p>
                  </div>
                  <div className="border-b border-solid  border-black pb-4 mt-4">
                    SILVER medal, 2016 International
                    <br/>
                    <p className="text-sm ml-4 pt-2">Cool Climate Wine Show</p>
                  </div>

                  <p className="text-2xl text-right mt-16 mb-8"><sub>$</sub>38.<sup>00</sup></p>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <div className="text-2xl">-</div>
                      <div className="text-base px-4">QTY: 6</div>
                      <div className="text-2xl">+</div>
                    </div>
                    <Button value="ADD TO CART"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="text-center max-w-max m-auto mb-5 font-family: 'PTSerif-Regular';">
            YOU MIGHT ALSO LIKE
            <span className="w-16 block border-b border-black pt-8 m-auto"></span>
        </h3>
        <div className="grid grid-cols-3 gap-16">
          <Product subTitle={'2014 Trofeo Estate Chardonnay'} price={45} small />
          <Product subTitle={'2014 Trofeo Estate Amphora Pinot Noir'}  price={45} small />
          <Product subTitle={'2014 Trofeo Estate Amphora Shiraz'}  price={45} small />
        </div>
        <div className="w-1/4 mx-auto">
          <Button classNames="mt-12 mb-32" value="View All Wines" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
