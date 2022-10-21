import axios from 'axios';
import React, { useState } from 'react';
import './Navbar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navbar = () => {

    const [symbol, setSymbol] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    

    const getDateInString = (date) => {
        date.setTime(date.getTime() - date.getTimezoneOffset() * 60000);
        let dateValue = date.toISOString().split("T")[0];
        return dateValue;
    }

    const submitClicked = () => {
        axios.get(`http://localhost:8000/api/stock-price-data/${symbol}/${getDateInString(startDate)}/${getDateInString(endDate)}`,{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            console.log(res);
            if(res.data.length === 0){
                alert("Pleast enter the correct company symbol");
                window.location = `/Home`;
            }
            else{
                window.location = `/stock-data/${symbol}/${getDateInString(startDate)}/${getDateInString(endDate)}`;
            }
        })
        .catch(err => console.log("Error" + err.response))
    }

    return <div>
        <div className="navbar-topnav">
            <a className="navbar-active" href="#home">Home</a>
            <div>
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    withPortal
                    placeholderText='Select Date Range'
                />
            </div>
            <div className='navbar-search'>
                <input type="text" placeholder="Search Company Symbol.." onChange = {(evt) => setSymbol(evt.target.value)} value={symbol} />
                <span onClick={() => submitClicked()}>Search</span>
            </div>
        </div>
    </div>;
};

export default Navbar;