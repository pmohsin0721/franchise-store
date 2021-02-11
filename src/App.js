import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Pages/HomePage/Home'
import Footer from './components/Pages/Footer/Footer'
import TopFranchise from './components/TopFranchise';
import Hyderabad from './components/Hyderabad';
import Bangalore from './components/Bangalore';
import Mumbai from './components/Mumbai';
import Chennai from './components/Chennai';
import SelectCities from './components/SelectCities';
import SignIn from './components/Pages/Authentication/SignIn'
import SignUp from './components/Pages/Authentication/Signup'
import EnquiryForm from './components/Pages/EnquiryForm/EnquiryForm.js'
import {TopFranchiseData,HyderabadData,MumbaiData,BangaloreData,ChennaiData} from "./components/FranData.json"




function App() {


  return (
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/topfranchise'  >
              <TopFranchise data={TopFranchiseData}/>
            </Route>
            <Route path='/hyderabad'  >
              <Hyderabad data={HyderabadData}/>
            </Route>
            <Route path='/Bangalore'  >
              <Bangalore data={BangaloreData}/>
            </Route>
            <Route path='/Mumbai'  >
              <Mumbai data={MumbaiData}/>
            </Route>
            <Route path='/Chennai'  >
              <Chennai data={ChennaiData}/>
            </Route>
            <Route path='/selectcities' component={SelectCities} />
            <Route path='/enquiry-form' component={EnquiryForm} />
              
             <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} /> 
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;
