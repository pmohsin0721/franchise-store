import React from 'react'
import { Button } from './Button';
import './TopFranchise.css';

function TopFranchise() {
    return (
    
        
      <div className='topfranchise__section'>
        <div className='topfranchise__wrapper'>
          <h1 className='topfranchise__heading'>Top Franchise</h1>
          <div className='topfranchise__container'>
            <a href='https://online.kfc.co.in/contact-us' target="_blank"  rel="noreferrer" className='topfranchise__container-card'>
              <div className='topfranchise__container-cardInfo'>
                <div className='icon'>
                    <img src="images/kfc.png" height="90px" alt="kfc"></img>
                </div>
                <h3>KFC</h3>
                <h4>Investment 1.5 cr-2 cr</h4>
                <p>Outlets: 400+</p>
                <ul className='topfranchise__container-features'>
                  <li>Operating Since: 1952</li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Click here
                </Button>
              </div>
            </a>
            <a href='https://www.mcdonaldsindia.com/reach-us.html' target="_blank"  rel="noreferrer" className='topfranchise__container-card'>
              <div className='topfranchise__container-cardInfo'>
                <div className='icon'>
                <img src="images/mcd.png" height="90px" alt="mcd"></img>
                </div>
                <h3>Mc Donald's</h3>
                <h4>Investment 6.6 cr-14 cr</h4>
                <p>Outlets: 400+</p>
                <ul className='topfranchise__container-features'>
                  <li>Operating Since: 1955</li>
                  <li>Space Required: 400-1500 sq.ft</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Click here
                </Button>
              </div>
            </a>
            <a href='https://www.pizzahut.co.in/aboutus' target="_blank"  rel="noreferrer" className='topfranchise__container-card'>
              <div className='topfranchise__container-cardInfo'>
                <div className='icon'>
                <img src="images/pizzahut.png" height="90px" alt="pizzahut"></img>
                </div>
                <h3>Pizza Hut</h3>
                <h4>Investment 80lacs-2.5 cr</h4>
                <p>Outlets: 350+</p>
                <ul className='topfranchise__container-features'>
                  <li>Operating Since: 1958</li>
                  <li>Space Required: 300-1500 sq.ft</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Click here
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    
  
    )
}

export default TopFranchise
