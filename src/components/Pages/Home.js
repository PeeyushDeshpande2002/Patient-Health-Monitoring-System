import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <h2>Welcome to Patient Health Tracker</h2>
          <p>A simple tool to monitor and track patient health data in real-time.</p>
          <a href="login" className="btn">Get Started</a>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature">
            <h3>Real-time Monitoring</h3>
            <p>Track patient vitals including heart rate, temperature, and more in real-time.</p>
          </div>
          <div className="feature">
            <h3>Data Visualization</h3>
            <p>Visualize patient health data with easy-to-understand charts and graphs.</p>
          </div>
          <div className="feature">
            <h3>Secure and Reliable</h3>
            <p>Your data is securely stored in the cloud and accessible anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Patient Health Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
