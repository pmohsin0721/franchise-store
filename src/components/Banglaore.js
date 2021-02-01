import React from 'react'
import './Cities.css';
// import { Link } from 'react-router-dom';

function Bangalore() {
    return (
  
      <div className='Cities__section'>
        <div className='Cities__wrapper'>
          <h1 className='Cities__heading'>Franchise in Bangalore</h1>
          <div className='Cities__container'>

            <a href='https://uspizza.in/contact_us' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/uspizza.png" height="90px" alt="US PIZZA"></img>
                </div>
                <h3>U.S PIZZA</h3>
                <h4>25L - 1Cr</h4>
                <p>Outlets: 30+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1998</li>
                  <li>Quick Bites - Pizza, Fast Food, Beverages </li>
                  <li>Space Required: 2500-4000 sq.ft</li>
                </ul> 
              </div>
            </a>


            <a href='https://www.franchiseindia.com/brands/so-cheesy.33934' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/socheesy.png" height="70px" alt="So cheesy"></img> 
                </div>
                <h3>SO CHEESY</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 10+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2019</li>
                  <li>  Quick Bites - Fast Foods, Beverages, Deserts</li>
                  <li>Space Required: 400-1500 sq.ft</li>
                </ul>
              </div>
            </a>


            <a href='https://www.franchiseindia.com/brands/papa-louies-pizza.43779' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/papalouies.png" height="90px" alt="papa louies pizza"></img>
                </div>
                <h3>PAPA LOUIES PIZZA</h3>
                <h4>30L - 50L</h4>
                <p>Outlets: 5+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2019</li>
                  <li>Quick Bites - Pizza, Fast Food</li>
                  <li>Space Required: 300-1500 sq.ft</li>
                </ul>
               </div>
            </a>
           
            <a href='https://chickywok.com/kernal.html' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/chickywok.png" height="70px" alt="chicky wok"></img>
                </div>
                <h3>CHICKY WOK</h3>
                <h4>30L - 1Cr</h4>
                <p>Outlets: 10+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1953</li>
                  <li> Quick Bites - Fast Foods, Beverages, Deserts</li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='http://www.flechazo.in/contact-us.php' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/flechazo.png" height="70px" alt="flechazo"></img>
                </div>
                <h3>FLECHAZO</h3>
                <h4>1.5Cr - 2Cr</h4>
                <p>Outlets: 10+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2016</li>
                  <li>Casual Dining - Asian, Mediterranean, North Indian, Deserts</li>
                  <li>Space Required: 2500-3000 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='http://fromage.in/franchise.html' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/fromage.png" height="70px" alt="fromage"></img>
                </div>
                <h3>FROMAGE</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 5+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2017</li>
                  <li>Cafe - Cafe, Italian, European, American</li>
                  <li>Space Required: 2500-3000 sq.ft</li>
                </ul>  
              </div>
              </a>
              
          </div>
        </div>
      </div>
    
  
    )
}

export default Bangalore
