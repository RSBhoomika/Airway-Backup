import React from 'react';
import Popup from './Popup';
import { useState } from 'react';
import Check from '../image_resources/check.png';
import Account from '../image_resources/Ellipse 1.png';
import Logo from '../image_resources/Vector.png';
import './css/Info.css';
import Arrow from '../image_resources/Group 1953.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function Info() {
    const [buttonPopup, setButtonPopup] = useState(false);
    var flight = "SpiceJet Airways";
    var source = "Bangalore";
    var destination = "Chennai";
    var duration = "8:00 hrs";
    var date = "30th March";
    var time = "7:30 A.M";
    var passengerName = "Aditya K";
    var flightNo = "ISPC108";
    var price = "Rs.3670";
    var points = "32";
    return (
        <div className='info'>
            {/* <div>
                <h1>React PopUps</h1>
                <br /><br />
                <button onClick={() => setButtonPopup(true)}>Open PopUp</button>
                <br />
           </div>*/}
            <img src={Logo} alt="vector" className="logo" />
            <ul className='nav-bar'>
                {/*<li><a href="#" className='home'>Home</a></li>
                <li><a href="#" className='history'>History</a></li>
                <li><a href="#" className='points'>Points</a></li>
                <li><a href="#" className='account'>Account</a></li> */}
                <li><Navbar /></li>

                <li><img src={Account} alt="ellipse" className="ellipse" /></li>
            </ul>
            {/* <Navbar/> */}
            <div className='container'>
                <div className='card'>
                    <article className='card-content'>
                        <h2 className='title' >Flight Information</h2>
                        <h3 className='secondary-title'>{flight}</h3>
                        <div className='flight-info'>
                            <p>Flight info</p>
                            <div className="place-info">
                                <h7 ><span>{source}</span><small>Source</small></h7>
                                <img src={Arrow} alt="Arrow" className='arrow' />
                                <h7 ><span>{destination}</span><small>Destination</small></h7>
                                <p className='duration'>{duration}</p>
                            </div>
                            <div className='date-time'>
                                <h7><span>{date}</span><small>Date</small></h7>
                                <h7><span>{time}</span><small>Departure Time</small></h7>
                            </div>
                            <div className='Passenger-info'>
                                <h7><span>{passengerName}</span><small>Passenger Name</small></h7>
                                <h7><span>{flightNo}</span><small>Flight No</small></h7>
                            </div>

                        </div>
                        <div className='class'>
                            <h5>Select Class</h5>
                            <h7><button className='first'>A</button><small>First Class</small></h7>
                            <h7><button className='business'>B</button><small>Business Class</small></h7>
                            <h7><button className='economy'>C</button><small>Economy Class</small></h7>
                        </div>
                        <div className='price-info'>
                            <h7>{price}</h7>
                            <p>Price</p>
                        </div>
                        <div className='footer'>
                            <div className='buttons'>
                                <button className='submit' onClick={() => setButtonPopup(true)}>Book</button>
                                <button className='back'>Back</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img src={Check} alt="Check"></img>

                <h2>Sucess</h2>
                <p >Your booking is confirmed and you've earned</p>
                <h1>{points}</h1>
                <h5>Points</h5>
            </Popup>




        </div>


    )
}

export default Info;
