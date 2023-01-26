import React from "react";
import Linegraph from "./Linegraph";
import "./Newsfeed.css";
import Timeline from "./Timeline";
import { RiMacbookFill } from "react-icons/ri";
import { BiMovie, BiBuildingHouse } from "react-icons/bi";
import { FaCannabis, FaBitcoin, FaEthereum } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { TbVaccine } from "react-icons/tb";
import { GiNuclearBomb, GiOilDrum } from 'react-icons/gi'

export default function Newsfeed() {

  return (
    <div className=" newsfeed">
      <div className=" newsfeed-container">
        <div className="newsfeed-chart-section">
          <div className="newsfeed-portfolio">
            <h1>$121,596</h1>
            <p>$303.99 (+0.25%) Today</p>
          </div>
          <div className=" newsfeed-chart">
            <Linegraph />
            <Timeline />
          </div>
        </div>
        <div className="newsfeed-buying-section">
          <h2>My Wallet</h2>
          <h2>$4.11</h2>
        </div>
        <div className="newsfeed-market-section">
          <div className="newsfeed-market-box">
            <p>Markets Closed</p>
            <h1>Check back here for updates on the market!</h1>
          </div>
        </div>
        <div className="newsfeed-popularlists-section">
          <div className="newsfeed-popularlists-intro">
            <h1>Hot Topics</h1>
            {/* <p>Show More</p> */}
          </div>
          <div className="popular-cards">
            <div className="popular-card">
              <RiMacbookFill className="popular-card-icon" />
              <p>Technology</p>
            </div>
            <div className="popular-card">
              <BiMovie className="popular-card-icon" />
              <p>Hollywood</p>
            </div>
            <div className="popular-card">
              <FaCannabis className="popular-card-icon" />
              <p>Cannabis</p>
            </div>
            <div className="popular-card">
              <FaBitcoin className="popular-card-icon" />
              <p>Crypto</p>
            </div>
            <div className="popular-card">
              <AiOutlineStock className="popular-card-icon" />
              <p>Upcoming Earnings</p>
            </div>
            <div className="popular-card">
              <BiBuildingHouse className="popular-card-icon" />
              <p>Real Estate</p>
            </div>
            <div className="popular-card">
              <TbVaccine className="popular-card-icon" />
              <p>Pharma</p>
            </div>
              <div className="popular-card">
                <GiNuclearBomb className="popular-card-icon" />
                <p>Military</p>
                </div>
              <div className="popular-card">
                <GiOilDrum className="popular-card-icon" />
                <p>Oil</p>
            </div>
            <div className="popular-card">
                <FaEthereum className="popular-card-icon" />
                <p>Ethereum Family</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
