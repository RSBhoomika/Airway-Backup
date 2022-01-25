import React from "react";
import "./css/frame5.css";
import clone from "../images/Clone.svg";
import vector1 from "../images/Vector (1).svg";
import vector2 from "../images/Vector (2).svg";
import vector from "../images/Vector.svg";
import arrow from "../images/Arrow left 1 (1).svg";
import ellipse1 from "../images/Ellipse 1 (1).svg";
import ellipse2 from "../images/Ellipse 2 (3).svg";
import message from "../images/Message open.svg";
import rectangle6 from "../images/Rectangle 6.svg";
import rectangle7 from "../images/Rectangle 7 (3).svg";
import rectangle13 from "../images/Rectangle 13.svg";
import rectangle14 from "../images/Rectangle 14 (1).svg";
import ellipse4 from "../images/Ellipse 4.jpg";
import settings from "../images/Settings.svg";
import user from "../images/User.svg";
import Frame7 from "../images/Frame 7.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import history from "./history";
import Navbar from "./Navbar";

const Account = () => {
  var name1 = "John Doe";
  var email1 = "johndoe@ypp.com";

  return (
    <div class="containerrr">
      <div>
        <nav>


          <img src={vector1} alt="Airway" className="logoo" />





          <div className="homee">

            <li>

              <a href="/booking">Home</a>
            </li>
          </div>

          <li>
            <a href="#History" className="historyy">
              History
            </a>
          </li>

          <div className="pointss">
            <li>
              <a href="/Points">Points</a>
            </li>
          </div>
          <div className="accountt">
            <li>
              <a href="/account">Account</a>
            </li>
          </div>

          <div className="photoo">

            <img src={ellipse1} alt="Photo" />

          </div>

          <div className="photoo2">

            <img src={ellipse2} alt="photo2" />

          </div>

          <div className="rectanglee14">
            <img src={rectangle14} />
          </div>
          <div className="rectanglee13">
            <img src={rectangle13} />
          </div>
          <div className="rectanglee61">
            <img src={rectangle6} />
          </div>
          <div className="rectanglee62">
            <img src={rectangle6} />
          </div>
          <div className="rectanglee63">
            <img src={rectangle6} />
          </div>
          <div className="rectanglee71">
            <img src={rectangle7} />
          </div>
          <div className="rectanglee72">
            <img src={rectangle7} />
          </div>
          <div className="rectanglee73">
            <img src={rectangle7} />
          </div>
          <div className="arroww1">
            <img src={arrow} />
          </div>
          <div className="arroww2">
            <img src={arrow} />
          </div>
          <div className="arroww3">
            <img src={arrow} />
          </div>
          <div className="settingss">
            <p>
              <img src={settings} alt="settings" />
            </p>
          </div>
          <div className="clonee">
            <p>
              <img src={clone} />
            </p>
          </div>
          <div className="userr">
            <p>
              <img src={user} />
            </p>
          </div>

          <div className="edit_infoo">

            <a href="/Account">Edit info</a>
          </div>
          <div className="transactionn">
            <a href="#">Transaction History</a>
          </div>
          <div className="helpp">
            <a href="/FAQ">Get Help</a>
          </div>
          <div className="log_outt">
            <a href="/Login">Log out</a>
          </div>
          <div className="photoo1">
            <a href="#">
              <img src={ellipse1} />
            </a>
          </div>

          <div className="photoo21">
            <a href="#"></a>
            <a href="#">
              <img src={ellipse2} />
            </a>
          </div>
          <a href="#"></a>
          <div className="Nameee">
            <a href="#"></a>
            <p>{name1}</p>
          </div>
          <div className="Emaill">
            <p>{email1}</p>
          </div>
          <div className="policyy">
            <a href="#policy">Privacy Policy</a>
          </div>
          <div className="termss">
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
          <div className="dott">
            <img scr={ellipse4} />
          </div>
          <div className="airr">
            <a href="#air">©Airway 2020</a>
          </div>
        </nav>
        <form action="#">
          <div className="conn">
            <div className="con1" />
            <header className="head-form">
              <h2>Edit Account</h2>
            </header>
            <br />
            <div className="field-set">
              <div className="input_box">
                <label htmlFor="full_name">Full name</label>
                <br />
                <input
                  className="full_name"
                  id="full_name"
                  placeholder="John Doe"
                  type="text"
                  required
                />
                <br />
                <div className="icon1">
                  <img src={user} />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="email"
                  id="email"
                  placeholder="johndoe@ypp.com"
                  type="text"
                  required
                />
                <br />
                <div className="icon2">
                  <img src={message} />
                </div>
              </div>
              <div className="input_box">
                <label htmlFor="phone_no">Phone no'</label>
                <br />
                <input
                  className="phone_no"
                  id="phone_no"
                  placeholder={9535616743}
                  type="text"
                  required
                />
                <br />
                <div className="icon3">
                  <img src={vector} />
                </div>
              </div>
              <br />
              <div className="buttonn">
                <ul>
                  <li>
                    <a className="save" href="/Login">
                      {" "}
                      Save{" "}
                    </a>
                  </li>
                  <a
                    className="cancel"
                    href="/Account"
                  >
                    {" "}
                    Cancel{" "}
                  </a>

                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
