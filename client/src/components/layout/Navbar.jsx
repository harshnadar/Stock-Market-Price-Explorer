import React, {useState} from "react";
import axios from 'axios';
import {
  Collapse,
  Navbar,
  Container,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import dateFormatter from '../utils/DateFormatter';
import DatePicker from "react-datepicker";


function Header(props) {
  
  const [symbol, setSymbol] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;


  const submitClicked = () => {
    axios.get(`http://localhost:8000/api/stock-price-data/${symbol}/${dateFormatter(startDate)}/${dateFormatter(endDate)}`,{headers: {
        'Content-Type': 'application/json',
    }})
    .then(res => {
        console.log(res);
        if(res.data.length === 0){
            alert("Pleast enter the correct company symbol");
            window.location = `/Home`;
        }
        else{
            window.location = `/stock-data/${symbol}/${dateFormatter(startDate)}/${dateFormatter(endDate)}`;
        }
    })
    .catch(err => console.log("Error" + err.response))
  }

  return (
    <Navbar
      color={
        "dark"
      }
      expand="lg"
      className={
        "navbar-absolute fixed-top "
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
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
        <Collapse navbar className="justify-content-end">
          <form>
            <InputGroup className="no-border">
              <Input placeholder="Search..." onChange = {(evt) => setSymbol(evt.target.value)} value={symbol}/>
              <InputGroupAddon addonType="append">
                  <div>
                  <button class="btn btn-primary" type="button" onClick={() => submitClicked()}>Search</button>
                  </div>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;