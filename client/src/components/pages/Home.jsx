import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from "../layout/Navbar";
import Header from '../layout/Navbar';

export const Home = () => {
    const [res, setRes] = useState([""]);

    return (
        <div>
            <Header/>
        </div>
    );

}