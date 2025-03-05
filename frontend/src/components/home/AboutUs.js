import React from 'react'
import "./AboutUs.css"; 

export default function AboutUs() {
  return (
    <div>
      <div className="card about-us-card">
      <div className="card-body d-flex justify-content-between">
        {/* Left Section */}
        <div className="left-section">
          <h5 className="card-title">About My Care</h5>
          <p className="card-text">
            Our mission is to provide mental health support through personalized
            care. We believe in fostering a safe space for individuals to share
            their emotions and seek guidance.
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section">
        <img src={`${process.env.PUBLIC_URL}/about.png`} alt="About Us" className="about-image" />
        <p className="card-text">
            We offer a range of mental health resources, therapy options, and
            community support to help you on your journey toward well-being.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
