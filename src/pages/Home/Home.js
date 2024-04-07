import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="dashboard-header">
          <div className="total-sales">
            <h2>Total Sale</h2>
            <p className="total-sales-value">$100.20</p>
            {/* Placeholder for graph */}
            <div className="graph-placeholder">Graph</div>
          </div>
          <div className="sales-variations">
            <h2>Sale Variations</h2>
            {/* Placeholder for variations chart */}
            <div className="chart-placeholder">Chart</div>
          </div>
        </div>
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          {/* Placeholder for orders list */}
          <div className="orders-placeholder">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
