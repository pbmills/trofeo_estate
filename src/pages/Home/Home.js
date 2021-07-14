import React from 'react';
import Product from "../../components/Product";

const Home = () => {
  return (
    <>
      <div className="container grid mx-auto mt-20 grid-cols-3 gap-12 mb-28">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  )
}

export default Home;
