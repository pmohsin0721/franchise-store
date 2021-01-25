import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Pages/HomePage/Home'
import Footer from './components/Pages/Footer/Footer'
import TopFranchise from './components/TopFranchise';
import Hyderabad from './components/Hyderabad';
import Bangalore from './components/Banglaore';
import Mumbai from './components/Mumbai';
import Chennai from './components/Chennai';
import SelectCities from './components/SelectCities';





function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/topfranchise' component={TopFranchise} />
            <Route path='/hyderabad' component={Hyderabad} />
            <Route path='/bangalore' component={Bangalore} />
            <Route path='/mumbai' component={Mumbai} />
            <Route path='/chennai' component={Chennai} />
            <Route path='/selectcities' component={SelectCities} />
              
            {/* <Route path='/sign-up' component={TopFranchise} />
            <Route path='/sign-in' component={TopFranchise} /> */}
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;
