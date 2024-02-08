import React from "react";
import { Link } from "react-router-dom";


const NavBar = ()=>{
    return (
      <>
        <header>
          <div className="nav-bar">
            <Link to={'/'} className="brand">E-commerce</Link>
            <div className="brand">E-Cart</div>
            <div className="search-bar">
              <input type="text" placeholder="Search Products" />
            </div>
            <Link to={'./cart'} className="cart">Cart</Link>
          </div>

          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div className="items">No filter</div>
            <div className="items">Mobiles</div>
            <div className="items">Laptops</div>
            <div className="items">Tablets</div>
            <div className="items">{"->"}20000</div>
            <div className="items">{"->"}25000</div>
          </div>
        </header>
      </>
    );
}
export default NavBar;