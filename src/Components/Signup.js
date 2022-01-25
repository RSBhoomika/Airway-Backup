import React, { useState } from 'react'
import Logo from '../image_resources/Vector.png';
import image1 from '../image_resources/image 1.png'
import image2 from '../image_resources/image 2.png'
import image3 from '../image_resources/image 3.png'
import image4 from '../image_resources/image 4.png'
import image5 from '../image_resources/image 5.png'
import image6 from '../image_resources/image 6.png'
import One from '../image_resources/1.png'
import './css/Login.css'
import axios from "axios";
import { Button } from 'react-bootstrap'
import history from './history'

export default function Signup() {
    const [email, changeEmail] = useState('')
    const [name, changeName] = useState('')
    const [phoneNo, changePhone] = useState('')
    const [password, changePassword] = useState('')

    // const client = axios.create({
    //     baseURL: "https://jsonplaceholder.typicode.com/posts"
    // });

    // const newUser = {
    //     method: 'POST',
    //     data: {
    //         name: name,
    //         mobile_no: phoneNo,
    //         password: password,
    //         email: email
    //     }
    // }

    // const postSignup = (event) => {
    //     event.preventDefault();
    //     axios.defaults.port = 3001;

    //     axios.post('http://localhost:3001/users/signup', {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //         }, proxy: {
    //             host: 'http://localhost',
    //             port: 3001
    //         },
    //     },

    //         newUser).then(
    //             async (response) => {
    //                 console.log(response.data)
    //             }
    //         )

    // }

    const postSignup = (event) => {
        event.preventDefault();

        const body = {
            name: name,
            mobile_no: phoneNo,
            password: password,
            email: email
        }

        fetch('http://0.0.0.0:8080/http://localhost:3001/users/signup', {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(data => console.log(data))

    }


    return (
        <div className='body'>
            <div className='login'>
                <img src={Logo} alt='Logo' className='logo' />
                <img src={One} alt="scene7" className="One" />
                <img src={image6} alt="scene6" className="image6" />
                <img src={image1} alt="scene1" className="image1" />
                <img src={image5} alt="scene5" className="image5" />
                <img src={image4} alt="scene4" className="image4" />
                <img src={image3} alt="scene3" className="image3" />
                <img src={image2} alt="scene2" className="image2" />
                <h1 className='text'>The Journey is our home</h1>
            </div>
            <div className="form-container">
                <form onSubmit={postSignup}>
                    <h2 className="text-center">One Last Step.</h2>
                    <h5>Fill these essential details and you're good to go</h5>
                    <div className="form-group"><input className="form-control1" type="text" name="name" placeholder="Name" value={name}
                        onChange={(e) => {
                            changeName(e.target.value)
                        }}
                    /></div>
                    <div className="form-group"><input className="form-control2" type="email" name="email" placeholder="Email" value={email}
                        onChange={(e) => {
                            changeEmail(e.target.value)
                        }}
                    /></div>
                    <div className="form-group"><input className="form-control3" type="tel" name="phone_no" placeholder="Phone no" value={phoneNo}
                        onChange={(e) => {
                            changePhone(e.target.value)
                        }}
                    /></div>
                    <div className="form-group"><input className="form-control4" type="password" name="password" placeholder="password" value={password}
                        onChange={(e) => {
                            changePassword(e.target.value)
                        }}
                    /></div>
                    <div className="form-group">
                        <div className="form-check">By clicking the following button you accept the terms and conditions</div>
                    </div>
                    <div className="form-group">
                        <ul>
                            <li>
                                <a className="btn btn-success btn-block" href="/booking">Sign Up</a>
                            </li>
                        </ul>

                        {/*  <button className="btn btn-success btn-block" type="submit">Let's go</button>*/}

                    </div>
                </form>
            </div>
        </div>

    )
}
