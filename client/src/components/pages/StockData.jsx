import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../layout/Navbar';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
  } from "reactstrap";

export const StockData = () => {

    const [stockData, setStockData] = useState([]);
    const { symbol } = useParams();
    const  { startDate } = useParams();
    const {endDate} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/stock-price-data/${symbol}/${startDate}/${endDate}`,{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            setStockData(res.data);
        })
        .catch(err => console.log("Error" + err.response))
    }, []);

    return (
        <div>
            <Header/>
            <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">.</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">{symbol.toUpperCase()}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped>
                  <thead className="text-primary">
                    <tr>
                      <th>Date</th>
                      <th className="text-right">Close Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        stockData.map((dayData) => {
                            return(
                                <tr>
                                <td className='text-left'>{dayData.TIMESTAMP}</td>
                                <td className='text-right'>{dayData.CLOSE}</td>
                            </tr>
                            )
                        })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        </div>
    );
}
