// import {React, useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

// export const StockData = ({symbol, startDate, endDate}) => {
//     const [stockPriceData, setStockPriceData] = useState([]);

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/stock-data/${symbol}/${startDate}/${endDate}`, {headers: {
//             'Content-Type': 'application/json',
//         }})
//         .then(res => {
//             console.log(res.data)
//             setStockPriceData(res.data);
//         })
//         .catch(err => console.log("Error" + err.response))
//     }, []);

//   return (
//     <div className="StockDetailCard">
//       <div>
//         <span className="vs">vs</span>
//         <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
//         <h2 className="match-date">{match.date}</h2>
//         <h3 className="match-venue">at {match.venue}</h3>
//         <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
//       </div>
//       <div className="additional-detail">
//         <h3>First Innings</h3>
//         <p>{match.team1}</p>
//         <h3>Second Innings</h3>
//         <p>{match.team2}</p>
//         <h3>Man of the match</h3>
//         <p>{match.playerOfMatch}</p>
//         <h3>Umpires</h3>
//         <p>{match.umpire1}, {match.umpire2}</p>
//       </div>
//     </div>
//   );
// }