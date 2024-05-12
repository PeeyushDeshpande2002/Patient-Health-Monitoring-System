import React from 'react'

const About = () => {
  return (
    <div>
      <div className="About">
      <section className="content">
        <div className="container">
          <h2>About Us</h2>
          <p>Patient Health Tracker is a platform designed to monitor and track patient health data in real-time. Our mission is to provide healthcare professionals with a reliable tool to improve patient care and outcomes.</p>
          <h3>Our Team</h3>
          <p>We are a dedicated team of developers and healthcare experts committed to building innovative solutions for the healthcare industry.</p>
          <h3>Contact Us</h3>
          <p>If you have any questions or feedback, please don't hesitate to contact us at <a href="mailto:info@patienthealthtracker.com">info@patienthealthtracker.com</a>.</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Patient Health Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default About
