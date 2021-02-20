import React from 'react'
import './Cities.css';
//import { Link } from 'react-router-dom';

function Hyderabad(props) {
    return (
  
      <div className='Cities__section'>
        <div className='Cities__wrapper'>
          <h1 className='Cities__heading'>Franchise in Hyderabad</h1>
          <div className='Cities__container'>

            {props.data.map((data) => (
              <a href='/enquiry-form' target="_blank" className='Cities__container-card'>
              <div className='Cities__container-cardInfo'> 
                 <div className='icon'>
                    <img src={data.imgsrc} height="90px" alt="franchise"></img>
                </div>
                <h3>{data.title}</h3>
                <h4>{data.price}</h4>
                <p>{data.outlets}</p>
                <ul className='Cities__container-features'>
                  <li>{data.since}</li>
                  <li>{data.items}</li>
                  <li>{data.space}</li>
                </ul>  
              </div>
            </a> 

            ))}
          </div>
        </div>
      </div>
    
  
    )
}

export default Hyderabad
