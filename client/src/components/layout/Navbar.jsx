import axios from 'axios';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [symbol, setSymbol] = useState('');

    const submitClicked = () => {
        // window.location = `/customer/${customerId}`;
        axios.get(`http://localhost:8000/api/stock-price-data/${symbol}`,{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            console.log(res.data);
            if(res.data.length === 0){
                alert("Pleast enter the right symbol");
                window.location = `/Home`;
            }
            else{
                window.location = `/stock-data/${symbol}`;
            }
        })
        .catch(err => console.log("Error" + err.response))
    }

    return <div>
        <div className="navbar-topnav">
            <a className="navbar-active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div className='navbar-search'>
                <input type="text" placeholder="Search Company Symbol.." onChange = {(evt) => setSymbol(evt.target.value)} value={symbol} />
                <span onClick={() => submitClicked()}>Search</span>
            </div>
        </div>
    </div>;
};

export default Navbar;