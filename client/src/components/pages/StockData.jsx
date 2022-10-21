import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './StockData.css';

export const StockData = () => {

    const [stockData, setStockData] = useState([]);
    const { symbol } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/stock-price-data/${symbol}`,{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            setStockData(res.data);
        })
        .catch(err => console.log("Error" + err.response))
    }, []);

    return (
        <div>
            <h1>{symbol}</h1>
            {console.log(stockData)}
            <table>
                <tr>
                    <th>Date</th>
                    <th>Closing Price</th>
                </tr>
                {stockData.map((dayData) =>{
                    return(
                        <tr>
                            <td>{dayData.TIMESTAMP}</td>
                            <td>{dayData.CLOSE}</td>
                        </tr>
                    );
                })}
            </table>
            
        </div>
    );
}
