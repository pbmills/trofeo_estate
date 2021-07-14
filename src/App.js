import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details'>
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
