import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './HomePage';
import FindCatDogPage from './FindCatDogPage';
import PetCarePage from './PetCarePage';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/Q8HomePage">
          <HomePage />
        </Route>
        <Route path="/Q8FindCatDogPage">
          <FindCatDogPage />
        </Route>
        <Route path="/Q8PetCarePage"> 
          <PetCarePage />
        </Route>
        <Route path="/register"> 
        <Create an account/>
        </Route>


      </Switch>
      <Footer />
    </Router>
  )
}

export default App;