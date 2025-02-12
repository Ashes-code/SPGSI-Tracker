import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import overview from "./images/overview-icon.png";
import balances from "./images/balances-icon.png";
import collections from "./images/collections-icon.png";
import payout from "./images/payout-icon.png";
import customer from "./images/customer-icon.png";
import settlement from "./images/settlement-icon.png";
import conversion from "./images/conversion-icon.png";
import settings from "./images/settings-icon.png";
import card1 from "./images/card-1.png";
import card2 from "./images/card-2.png";
import {LineChart} from "./Charts.jsx";
import {PieChart} from "./Pie.jsx";
import CoinBarChart from "./Bar.jsx";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <a href="#" >
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <nav className="nav-menu">
          <a href="#" className="nav-link">
            <img src={overview} alt="Overview" className="nav-link-icons"/> Overview
          </a>
          <a href="#" className="nav-link">
            <img src={balances} alt="Balances" className="nav-link-icons"/> Balances
          </a>
          <a href="#" className="nav-link">
            <img src={collections} alt="Collections" className="nav-link-icons"/> Collections
          </a>
          <a href="#" className="nav-link">
            <img src={payout} alt="Payouts" className="nav-link-icons"/> Payouts
          </a>
          <a href="#" className="nav-link">
            <img src={customer} alt="Customers" className="nav-link-icons"/> Customers
          </a>
          <a href="#" className="nav-link">
            <img src={settlement} alt="Settlements" className="nav-link-icons"/> Settlements
          </a>
          <a href="#" className="nav-link">
            <img src={conversion} alt="Conversion" className="nav-link-icons"/> Conversion
          </a>
          <a href="#" className="nav-link">
            <img src={settings} alt="Settings" className="nav-link-icons"/> Settings
          </a>
        </nav>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <section className="dashboard-header">
      <div className="header-container">
        <div className="header-right">
          <div className="profile">
            <button className="profile-btn">S</button>
            <div className="profile-info">
              <h3>Santex Enterprise</h3>
              <p>Merchant ID: 333455677</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-greeting">
        <h1>Hi Akachukwu</h1>
        <p>Here's an overview of your account.</p>
      </div>
    </section>
  );
};


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <Header />
        <section className="balance-section">
          <div className="balance-card">
            <div className="balance-header">
              <h5>Available Balance</h5>
              <select defaultValue="USD">
                <option value="NGA">NGA</option>
                <option value="CAM">CAM</option>
                <option value="TUN">TUN</option>
                <option value="UGA">UGA</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <h1>$1,000.00</h1>
            <div className="payment-btn">
            <button className="fund-btn">Fund Balance</button>
            <button className="payout-btn">Make Payout</button>
            </div>
          </div>
          <div className="payment-card">
            <img src={card1} alt="Payment Card" className="card1" />
            <img src={card2} alt="Payment Card" className="card2" />
          </div>
        </section>
        <div>
        <LineChart />
        <PieChart />
        <CoinBarChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
