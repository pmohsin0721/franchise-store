import React from 'react'
import './Cities.css';
import { Link } from 'react-router-dom';

function Hyderabad() {
    return (
  
      <div className='Cities__section'>
        <div className='Cities__wrapper'>
          <h1 className='Cities__heading'>Franchise in Hyderabad</h1>
          <div className='Cities__container'>

            <a href='http://www.pistahousehaleem.in/contact.php' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/pistahouse.png" height="90px" alt="pista house"></img>
                </div>
                <h3>PISTA HOUSE</h3>
                <h4>1Cr - 2Cr</h4>
                <p>Outlets: 30+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1997</li>
                  <li>Casual Dining and Bakery - Haleem, Biryani, Biscuits, Cakes, Snacks, Kebabs, Indian, Chinese </li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul> 
              </div>
            </a>


            <a href='https://www.thechocolateroomindia.com/franchise/hyderabad/' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/chocroom.png" height="70px" alt="the chocolate room"></img> 
                </div>
                <h3>THE CHOCOLATE ROOM</h3>
                <h4>75L - 1Cr</h4>
                <p>Outlets: 400+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1955</li>
                  <li>Café - Cafe, Desserts</li>
                  <li>Space Required: 400-1500 sq.ft</li>
                </ul>
              </div>
            </a>


            <a href='https://www.zomato.com/hyderabad/shah-ghouse-hotel-restaurant-tolichowki' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/shahghouse.png" height="90px" alt="Shah Ghouse"></img>
                </div>
                <h3>SHAH GHOUSE</h3>
                <h4>1cr - 1.5cr</h4>
                <p>Outlets: 5+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2000</li>
                  <li>Casual Dining - Biryani, North Indian, Chinese, Seafood, Mughlai, Arabian</li>
                  <li>Space Required: 300-1500 sq.ft</li>
                </ul>
               </div>
            </a>
           
            <a href='https://www.paradisefoodcourt.in/' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/paradise.png" height="70px" alt="paradise"></img>
                </div>
                <h3>PARADISE</h3>
                <h4>1.5Cr - 2Cr</h4>
                <p>Outlets: 50+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1953</li>
                  <li>Casual Dining - Biryani, Mughlai, North Indian, Chinese</li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='https://online.kfc.co.in/contact-us' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/kfc.png" height="70px" alt="kfc"></img>
                </div>
                <h3>KFC</h3>
                <h4>1.5Cr - 2Cr</h4>
                <p>Outlets: 400+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1952</li>
                  <li>Quick bites - Burger, Fast Food, Finger Food, Beverages</li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='https://www.zomato.com/hyderabad/mehfil-2-hitech-city' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/mehfil.png" height="70px" alt="mehfil"></img>
                </div>
                <h3>MEHFIL</h3>
                <h4>50L - 1Cr</h4>
                <p>Outlets: 10+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1952</li>
                  <li>Casual Dining - Hyderabadi, Biryani, Mughlai, North Indian, Chinese, Deserts</li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul>  
              </div>
              </a>
              
          </div>
        </div>
      </div>
    
  
    )
}

export default Hyderabad
