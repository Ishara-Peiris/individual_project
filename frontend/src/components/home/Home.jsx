import React from 'react'
import NavBar from './NavBar';
import Banner from './Banner';
import AboutUs from "./AboutUs";
import CreateAccountForm from "./CreateAccountForm";
import Footer from './Footer';
function Home() {
  return (
    <div>
    
      <NavBar/>
      <Banner/>
      <AboutUs/>
      <CreateAccountForm/>
      <Footer/>
    </div>
  )
}

export default Home
