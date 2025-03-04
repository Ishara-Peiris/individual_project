import React from 'react'
import Button from './Button';
import './NavBar.css'

export default function Navbar() {
  return (
    
      <div>
      <nav className="navbar navbar-expand-lg  shadow-sm nav justify-content-center">
      <div className="container-fluid">
      <a className="navbar-brand text-black fw-bold" href="#">
          MyCare
        </a>
        <div className="collapse navbar-collapse nav justify-content-center ">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
         
        
            <li className="nav-item">
              <a className="nav-link text-black" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#therapist">All Therapist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#forum">Forum</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#guidance">Guidance Hub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#contact">Contact</a>
            </li>
          </ul>
          
        </div>
        
        <Button text="Login"  />
        <Button text="Create Account"  />

        

        

       
      </div>
    </nav>
    </div>
  )
}
