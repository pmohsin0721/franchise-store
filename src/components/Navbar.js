import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaTimes, FaStore } from 'react-icons/fa';
import {GiCrystalBars} from 'react-icons/gi';
import { Button } from "./Button";
import './Navbar.css';
import { IconContext } from "react-icons/lib";
import DropDown from './DropDown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
          }  else  {
              setButton(true);
          }
        };

        useEffect(() => {
            showButton()
        }, []);

    window.addEventListener('resize', showButton);
    

    return (
        <>
        <IconContext.Provider value={{color:'#1c2237'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaStore className="nav-icon" />
              FRANCHISE STORE  
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <GiCrystalBars />}
          </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu} >
                      Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/topfranchise' className="nav-links" onClick={closeMobileMenu}>
                  Top Franchise
                  </Link>
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='/selectcities' className='nav-links' onClick={closeMobileMenu}>
              Select Cities <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <DropDown />}
              </li>
              
              <li className="nav-btn">
                  { button ? (
                      <Link to='/sign-up' className="btn-link" >
                      <Button buttonStyle="btn--outline">SIGN UP
                      </Button>
                      </Link>
                  ):(
                      <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                          <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                          >SIGN UP</Button>
                      </Link>
                  )} 
              </li>
              <li className="nav-btn">
                  { button ? (
                      <Link to='/sign-in' className="btn-link" >
                      <Button buttonStyle="btn--outline">SIGN IN
                      </Button>
                      </Link>
                  ):(
                      <Link to='/sign-in' className='btn-link' onClick={closeMobileMenu}>
                          <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                          >SIGN IN</Button>
                      </Link>
                  )} 
              </li>

              </ul>
        </div>
      </div>
      </IconContext.Provider>
        </>
    );
}

export default Navbar
