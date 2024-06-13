import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/navbar.module.css';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  const handleSearchClick = () => {
    if (window.innerWidth > 550) {
      setIsSearchActive(true);
    }
  };

  const handleCancelClick = (e) => {
    e.stopPropagation();
    setIsSearchActive(false);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMenuActive(!isMenuActive);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    if (isMenuActive) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuActive]);

  return (
    <>
      <div className={`${styles.main_container} ${isSearchActive ? styles.search_active : ''}`}>
        <Link to="/">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-png-transparent.png"
          alt="logo"
          className={styles.logo}
        />
        </Link>

        <span className={styles.routes_maincontainer}>
          <ul className={`${isSearchActive ? styles.hidden : styles['fade-in']}`}>
            <Link to='/home'><li>New & Featured</li></Link>
            <Link to='/mens'><li>Mens</li></Link>
            <Link to='/womens'><li>Womens</li></Link>
            <Link to='/gift'><li>Gift</li></Link>
            <Link to='/about'><li>About</li></Link>
            
            
            
           
            
          </ul>

          <div
            className={`${styles.search_container} ${isSearchActive ? styles.expanded : ''}`}
            onClick={handleSearchClick}
          >
            <CiSearch style={{ color: "black", fontSize: "2rem", fontWeight: "bolder" }} />
            <input type="text" placeholder="Search..." />
            {isSearchActive && (
              <span className={styles.cancel_button} onClick={handleCancelClick}>Cancel</span>
            )}
          </div>

          {!isSearchActive && (
            <>
             <span className={styles.ham_icon}>
             <FaUser className="user_cart_icons" style={{ fontSize: "2rem", fontWeight: "bolder" }} />
             <FaShoppingCart className="user_cart_icons" style={{ fontSize: "2rem", fontWeight: "bolder" }} />
             </span>
              <GiHamburgerMenu className={styles.hamburger} onClick={handleMenuClick} />
            </>
          )}
        </span>
      </div>

      {isSearchActive && <div className={styles.background_blur} onClick={handleCancelClick}></div>}

      <div ref={menuRef} className={`${styles.hamburger_menu} ${isMenuActive ? styles.active : ''}`}>
      <span className={styles.mobile_ham_icon}>
      <FaUser  style={{ fontSize: "2rem", fontWeight: "bolder" }} />
      <FaShoppingCart  style={{ fontSize: "2rem", fontWeight: "bolder" }} />
      </span>
        <ul>
        <Link to='/home'><li>New & Featured</li></Link>
            <Link to='/mens'><li>Mens</li></Link>
            <Link to='/womens'><li>Womens</li></Link>
            <Link to='/gift'><li>Gift</li></Link>
            <Link to='/about'><li>About</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
