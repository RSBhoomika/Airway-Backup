import React from "react";
import "./css/frame2.css";
import vector from "../images/Vector (1).svg";
import ellipse1 from "../images/Ellipse 1.svg";
import ellipse2 from "../images/Ellipse 2 (2).svg";
import rectangle14 from "../images/Rectangle 14.svg";
import rectangle13 from "../images/Rectangle 13.svg";
import arrow1 from "../images/Arrow left 1.jpg";
import leaves1 from "../images/leaves1.svg";
import number6543 from "../images/6543 1.jpg";
import ellipse4 from "../images/Ellipse 4.jpg";
import history from "./history";
import Navbar from "./Navbar";
import points from './userPoints'

const Points = () => {
  var total = "100";

  return (
    <nav>
      <div className="logo">
        <p>

          <img src={vector} alt="Airway" />

        </p>

      </div>

      <div className="home">

        <li>

          <a href="/booking">Home</a>
        </li>
      </div>
      <div className="history">
        <li>
          <a href="#History">History</a>
        </li>
      </div>
      <div className="points">
        <li>
          <a href="/Points">Points</a>
        </li>
      </div>
      <div className="account">
        <li>
          <a href="/account">Account</a>
        </li>
      </div>

      <div className="photo">
        <img src={ellipse1} alt="Photo" />
      </div>
      <div className="photo2">
        <img src={ellipse2} alt="photo2" />
      </div>
      <div className="rectangle14">
        <img src={rectangle14} />
      </div>
      <div className="earned">
        <img src={rectangle13} />
        <div className="earned1">Total Points earned</div>
      </div>
      <div className="intro">
        <form action="#">
          <div className="cont1">
            <p></p>
            <div className="container1">
              {points.map((point, index) => (
                <div key={index}>

                  <p className="place">{point.place}</p>



                  <p className="container12">{point.points}</p>




                  <img src={arrow1} className="container112" alt="arrow1" />


                </div>
              ))

            /*}
              
  </div>*/}

            </div>

          </div>
        </form>

        <div className="leaf">
          <img src={leaves1} alt="leaf" />
        </div>
        <div className="points_history">
          <p>Points History</p>
        </div>

        <div className="why">
          <a href="#"></a>
          <a href>Have negative points and don't know why?</a>
        </div>
        <div className="learn">
          <a href>Learn more</a>
        </div>
        <div className="photo1">
          <li>
            <img src={number6543} alt="Photo1" />
          </li>
        </div>
        <div className="number">
          <p>{total}</p>
        </div>
        <div className="policy">
          <a href="#policy">Privacy Policy</a>
        </div>
        <div className="terms">
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
        <div className="dot">
          <img scr={ellipse4} />
        </div>
        <div className="air">
          <a href="#air">©Airway 2020</a>
        </div>
      </div>
    </nav>
  );
};

export default Points;
