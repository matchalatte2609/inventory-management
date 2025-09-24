import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [motivationalQuote, setMotivationalQuote] = useState('');

  const quotes = [
    "Great jewelry starts with great organization! ✨",
    "Every piece tells a story, every inventory counts! 💎",
    "Sparkle and shine with organized design! ⭐",
    "Quality gems deserve quality management! 💍",
    "Your inventory is your treasure chest! 🏆",
    "Excellence in every detail, brilliance in every piece! 💫",
    "Organized today, successful tomorrow! 🎯",
    "Making jewelry management a gem! 💎✨"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Set random quote on load
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setMotivationalQuote(randomQuote);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    // Get Saigon time hour
    const saigonTime = new Date(currentTime.toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"}));
    const hour = saigonTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="welcome-section">
          <div className="greeting-card">
            <div className="greeting-content">
              <h1 className="greeting-title">{getGreeting()}! 🌟</h1>
              <p className="current-time">
                {currentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'Asia/Ho_Chi_Minh'
                })}
              </p>
              <p className="live-time">
                {currentTime.toLocaleTimeString('en-US', {
                  hour12: true,
                  hour: 'numeric',
                  minute: '2-digit',
                  second: '2-digit',
                  timeZone: 'Asia/Ho_Chi_Minh'
                })} SGT
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-header">
          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="action-btn products-btn">
                <span className="action-icon">💍</span>
                <span>View Products</span>
              </button>
              <button className="action-btn category-btn">
                <span className="action-icon">🏷️</span>
                <span>Categories</span>
              </button>
              <button className="action-btn inventory-btn">
                <span className="action-icon">📦</span>
                <span>Inventory</span>
              </button>
            </div>
          </div>

          <div className="motivation-card">
            <h2>Daily Inspiration</h2>
            <div className="quote-content">
              <p className="motivational-quote">{motivationalQuote}</p>
              <button
                className="new-quote-btn"
                onClick={() => {
                  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                  setMotivationalQuote(randomQuote);
                }}
              >
                New Quote ✨
              </button>
            </div>
          </div>
        </div>

        <div className="fun-stats">
          <h2>Your Tierra Journey</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-value">Ready</div>
              <div className="stat-label">To Organize</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💪</div>
              <div className="stat-value">Efficient</div>
              <div className="stat-label">Workflow</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌟</div>
              <div className="stat-value">Amazing</div>
              <div className="stat-label">Results</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
