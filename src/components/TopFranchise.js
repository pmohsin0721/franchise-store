import React from 'react'
// import { Button } from './Button';
import './TopFranchise.css';

function TopFranchise(props) {
    return (
    
        
      <div className='topfranchise__section'>
        <div className='topfranchise__wrapper'>
          <h1 className='topfranchise__heading'>Top Franchise</h1>
          <div className='topfranchise__container'>

          {props.data.map((data) => (
            <a href='/enquiry-form' target="_blank"  rel="noreferrer" className='topfranchise__container-card'>
              <div className='topfranchise__container-cardInfo'>
                <div className='icon'>
                    <img src={data.imgsrc} height="90px" alt="franchise"></img>
                </div>
                <h3>{data.title}</h3>
                <h4>{data.price}</h4>
                <p>{data.outlets}</p>
                <ul className='topfranchise__container-features'>
                <li>{data.since}</li>
                  <li>{data.items} </li>
                  <li>{data.space}</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Click here
                </Button> */}
              </div>
            </a>
          ))}          
          </div>
        </div>
      </div>
    
  
    )
}

export default TopFranchise
