import React from 'react'
import './Cities.css';
//import { Link } from 'react-router-dom';

function Mumbai() {
    return (
  
      <div className='Cities__section'>
        <div className='Cities__wrapper'>
          <h1 className='Cities__heading'>Franchise in Mumbai</h1>
          <div className='Cities__container'>

            <a href='https://www.frozenbottle.in/franchise.aspx' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/frozenbottle.png" height="90px" alt="frozen bottle"></img>
                </div>
                <h3>FROZEN BOTTLE</h3>
                <h4>20L - 30L</h4>
                <p>Outlets: 100+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2017</li>
                  <li>Desert Parlour - Beverages, Deserts, Ice-creams </li>
                  <li>Space Required: 2500-4000 sq.ft</li>
                </ul> 
              </div>
            </a>


            <a href='https://www.subway.com/en-IN/OwnAFranchise' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/subway.png" height="70px" alt="subway"></img> 
                </div>
                <h3>SUBWAY</h3>
                <h4>35L - 80L</h4>
                <p>Outlets: 600+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1966</li>
                  <li>  Quick Bites - Rolls, Wraps, Sandwich, Salad, Fast Foods</li>
                  <li>Space Required: 170-350 sq.ft</li>
                </ul>
              </div>
            </a>


            <a href='http://kathijunction.com/franchisee.html' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'>
                <div className='icon'>
                <img src="images/kathi.png" height="90px" alt="kathi junction"></img>
                </div>
                <h3>KATHI JUNCTION</h3>
                <h4>7L - 30L</h4>
                <p>Outlets: 100+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2019</li>
                  <li>Quick Bites - Rolls, North Indian, Fast Food</li>
                  <li>Space Required: 300-1500 sq.ft</li>
                </ul>
               </div>
            </a>
           
            <a href='http://www.gianiicecream.in/franchise.php' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/giani.png" height="70px" alt="giani's"></img>
                </div>
                <h3>GIANI'S</h3>
                <h4>10L - 15L</h4>
                <p>Outlets: 50+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1956</li>
                  <li> Deserts - Ice-creams, Deserts</li>
                  <li>Space Required: 200-500 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='https://ghasitaram.in/partner-with-us.php' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/ghasitaram.png" height="70px" alt="ghasitaram"></img>
                </div>
                <h3>GHASITARAM HALWAI</h3>
                <h4>20L - 30L</h4>
                <p>Outlets: 10+</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 1950</li>
                  <li>Sweet Shop - Mithai, Street Food</li>
                  <li>Space Required: 500-600 sq.ft</li>
                </ul>  
              </div>
              </a>


              <a href='http://fromage.in/franchise.html' target="_blank" rel="noreferrer" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                <div className='icon'>
                    <img src="images/tasim.png" height="70px" alt="tasim"></img>
                </div>
                <h3>TASIM</h3>
                <h4>10L - 20L</h4>
                <p>Outlets: 1</p>
                <ul className='Cities__container-features'>
                  <li>Operating Since: 2019</li>
                  <li>Casual Dining - Asian, Thai, Japanese, Seafood, Shushi, Chinese</li>
                  <li>Space Required: 500-700 sq.ft</li>
                </ul>  
              </div>
              </a>
              
          </div>
        </div>
      </div>
    
  
    )
}

export default Mumbai
