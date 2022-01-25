import React from "react";
import "./css/frame8.css";
import { useState } from "react";

import calendar from "../images/calendar.jpg";
import arrow1 from "../images/Arrow left 1.svg";
import ellipse1 from "../images/Ellipse 1.svg";
import ellipse2 from "../images/Ellipse 2.svg";
import ellipse137 from "../images/Ellipse 137.svg";
import ellipses from "../images/Ellipse s.svg";
import ellipsexs from "../images/Ellipse xs.svg";
import line1 from "../images/Line 1.svg";
import line4 from "../images/Line 4.svg";
import rect14 from "../images/Rectangle 14.svg";
import vectarrow from "../images/Vector arrow.svg";
import vector1 from "../images/Vector (1).svg";
import history from "./history";
import Navbar from "./Navbar";

const Frame = () => {
  var name = "Adi";
  var srcplace = "Bangalore";
  var destplace = "Chennai";
  var date = "30 March";
  var time1 = "08:00";
  var flight1 = "Jet Airways";
  var time2 = "09:30";
  var flight2 = "Trial Airways";
  var time3 = "09:30";
  var flight3 = "Spice Airways";

  return (
    <div className="info8">
      <div>
        <nav>
          <div className="logo8">
            <p>

              <img src={vector1} alt="Airway" />

            </p>

          </div>

          <div className="home8">

            <a href="/booking">Home</a>
          </div>
          <div className="history8">
            <a href="#History">History</a>
          </div>
          <div className="points8">
            <a href="/Points">Points</a>
          </div>
          <div className="account8">
            <a href="/account">Account</a>
          </div>

          <div className="photo8">

            <img src={ellipse1} alt="Photo" />

          </div>

          <div className="photo28">


            <img src={ellipse2} alt="photo2" />

          </div>

          <form action="#">
            <div className="con18">
              <header className="head-form8">
                <h3>Hey {name}, Where to next?</h3>
              </header>
              <br />
              <div className="field-set8">
                {/*<header className="head-form8">
                  <h3>Hey {name}, Where to next?</h3>
                </header> */}
                <div className="line8">
                  <img src={line4} />
                </div>
                <div className="input_box8">
                  <label htmlFor="source">Source</label>
                  <br />
                  <input
                    className="source8"
                    id="source"
                    placeholder="Eg. Bangalore"
                    type="text"
                    required
                  />
                  <br />
                  {/*<div class="icon1"><img src="images/User.svg"/></div>*/}
                </div>
                <div className="input_box8">
                  <label htmlFor="destination">Destination</label>
                  <br />
                  <input
                    className="destination8"
                    id="destination"
                    placeholder="Eg. Pune"
                    type="text"
                    required
                  />
                  <br />
                  {/*<div class="icon2"><img src="images/Message open.svg"/></div>*/}
                </div>
                <div className="input_box8">
                  <label htmlFor="date">Date</label>
                  <br />
                  <input
                    className="date8"
                    id="date"
                    placeholder="30-03-2021"
                    type="text"
                    required
                  />
                  <br />
                  <div className="calendar8">
                    <img src={calendar} />
                  </div>
                </div>
                <br />
              </div>
              <a href="/booking"><button className="find_tickets8" type="submit">
                Find tickets
              </button></a>

              <div className="con28">
                <header className="head-form8">
                  <h2>Search Results:</h2>
                </header>
                <div className="con218">
                  <p className="bangalore18">{srcplace}</p>
                  <p className="chennai18">{destplace}</p>
                  <p className="march18">{date}</p>
                  <p className="hr18">{time1} hr estimated time</p>
                  <p className="jet18">{flight1}</p>
                  <div className="ellipse13718">
                    <img src={ellipse137} />
                  </div>
                  <div className="line118">
                    <img src={line1} />
                  </div>
                  <div className="xs118">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs218">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs318">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs418">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs518">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs618">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs718">
                    <img src={ellipsexs} />
                  </div>
                  <div className="xs818">
                    <img src={ellipsexs} />
                  </div>
                  <div className="s118">
                    <img src={ellipses} />
                  </div>
                  <div className="s218">
                    <img src={ellipses} />
                  </div>
                  <div className="arr18">
                    <img src={vectarrow} />
                  </div>
                  <div className="arrbox18">

                    <a href="/Info">
                      <img src={arrow1} alt="Arrow" />
                    </a>


                  </div>
                  <a href="#"></a>
                </div>
                <a href="#"></a>
                <div className="con228">
                  <a href="#">
                    <p className="bangalore28">{srcplace}</p>
                    <p className="chennai28">{destplace}</p>
                    <p className="march28">{date}</p>
                    <p className="hr28">{time2} hr estimated time</p>
                    <p className="jet28">{flight2}</p>
                    <div className="ellipse13728">
                      <img src={ellipse137} />
                    </div>
                    <div className="line128">
                      <img src={line1} />
                    </div>
                    <div className="xs128">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs228">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs328">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs428">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs528">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs628">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs728">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs828">
                      <img src={ellipsexs} />
                    </div>
                    <div className="s128">
                      <img src={ellipses} />
                    </div>
                    <div className="s228">
                      <img src={ellipses} />
                    </div>
                    <div className="arr28">
                      <img src={vectarrow} />
                    </div>
                  </a>
                  <div className="arrbox28">

                    <a href="/Info">
                      <img src={arrow1} alt="Arrow" />
                    </a>
                  </div>
                  <a href="#"></a>
                </div>
                <a href="#"></a>
                <div className="con238">
                  <a href="#">
                    <p className="bangalore38">{srcplace}</p>
                    <p className="chennai38">{destplace}</p>
                    <p className="march38">{date}</p>
                    <p className="hr38">{time3} hr estimated time</p>
                    <p className="jet38">{flight3}</p>
                    <div className="ellipse13738">
                      <img src={ellipse137} />
                    </div>
                    <div className="line138">
                      <img src={line1} />
                    </div>
                    <div className="xs138">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs238">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs338">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs438">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs538">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs638">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs738">
                      <img src={ellipsexs} />
                    </div>
                    <div className="xs838">
                      <img src={ellipsexs} />
                    </div>
                    <div className="s138">
                      <img src={ellipses} />
                    </div>
                    <div className="s238">
                      <img src={ellipses} />
                    </div>
                    <div className="arr38">
                      <img src={vectarrow} />
                    </div>
                  </a>
                  <div className="arrbox38">

                    <a href="/Info">
                      <img src={arrow1} alt="Arrow" />
                    </a>


                  </div>

                  <div className="seemore8">

                    <a href="#">See_more</a>
                  </div>
                  <div className="seemorearr8">
                    <a href="#">&gt;</a>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </form>
        </nav>
      </div >
    </div >
  );
};

export default Frame;
