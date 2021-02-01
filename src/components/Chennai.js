import React from 'react'
import './Cities.css';
//import { Link } from 'react-router-dom';

function Chennai() {
    return (
  
      <div className='Cities__section'>
        <div className='Cities__wrapper'>
          <h1 className='Cities__heading'>Franchise in Chennai</h1>
          <div className='Cities__container'>

            <a href='https://www.duckdonuts.com/about-us/franchising-info/international-franchising/' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/duckdonuts.png" height="90px" alt="duckdonuts"></img>
                </div>
                <h3>DUCK DONUTS</h3>
                <h4>50L - 1Cr</h4>
                <p>Outlets: 50+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2007</li>
                  <li>Donuts - Donuts, Sandwich, Sundaes, Beverages </li>
                  <li>Space Required: 500-600 sq.ft</li>
                </ul> 
              </div>
            </a>


            <a href='https://www.zwarma.in/' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/zwarma.png" height="70px" alt="zwarma"></img> 
                </div>
                <h3>ZWARMA</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 75+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2010</li>
                  <li> QUick Bites - Shawarma, Grill, BBQ, Kebab, Beverages</li>
                  <li>Space Required: 400-600 sq.ft</li>
                </ul>
              </div>
            </a>


            <a href='http://mrconsultant.co.in/contact.php' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/mrburger.png" height="90px" alt="mr burger"></img>
                </div>
                <h3>MR. BURGER</h3>
                <h4>5L - 15L</h4>
                <p>Outlets: 5+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2019</li>
                  <li>Quick Bites - Burger, Fast Food</li>
                  <li>Space Required: 300-1500 sq.ft</li>
                </ul>
               </div>
            </a>
           
            <a href='https://www.go69pizza.co.in/career/c' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/go69.png" height="70px" alt="go 69 pizza"></img>
                </div>
                <h3>GO 69 PIZZA</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 65+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2015</li>
                  <li> Quick Bites - Pizza, Burger, Pasta, Fastfood, Beverages</li>
                  <li>Space Required: 600-1000 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='http://www.theredbox.in/franchise-model' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/theredbox.png" height="70px" alt="the red box"></img>
                </div>
                <h3>THE RED BOX</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 10+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2018</li>
                  <li>Indochinese - Noodles, Momos, Fastfood, </li>
                  <li>Space Required: 200-300 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='https://www.franchiseindia.com/brands/beyond-temptation.29974' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/beyondtemp.png" height="70px" alt="Beyond Temptation"></img>
                </div>
                <h3>BEYOND TEMPTATION</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 150+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2016</li>
                  <li>Cafe - Cafe, Fastfood, Beverages</li>
                  <li>Space Required: 1500-2000 sq.ft</li>
                </ul>  
              </div>
              </a>
              
          </div>
        </div>
      </div>
    
  
    )
}

export default Chennai
