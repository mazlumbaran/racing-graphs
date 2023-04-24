import React, { useState, useEffect } from "react";
import "./App.css";
import RacingCart from "./components/RacingCart";

function App() {
  const [year, setYear] =useState(2019)
  const [data, setData] = useState([
    { name: "Microsoft", value: 0.40, color: "#F65314" },
    { name: "Apple", value: 1.25, color: "#A8B6D5" },
    { name: "Amazon", value: 0.50, color: "#FFC857" },
    { name: "Google", value: 0.80, color: "#1BB55C" },
    { name: "Facebook", value: 0.60, color: "#3B5998" }
    
  ]);

  useEffect(() => {
    if (year<2023){ 
    const intervalYear = setInterval(() => {
      
      const newYear= year + 1;
      setYear(newYear);
      
    }, 6000);

    return () => clearInterval(intervalYear);}
    else {
      return year;  
    }
  }, [year]);

  useEffect(() => {
    if (year<2023){
      const intervalId = setInterval(() => {
      const newData = data
        .sort((a, b) => b.value - a.value)
        .map((company, index) => ({
          ...company,
          value: company.value + Math.random() * 0.04,
          rank: index + 1,
        }));

      setData(newData);
    }, 100);


    return () => clearInterval(intervalId);
  }else {
    return data;
  }}, [data]);




  return (
    <div className="App">
    <h1 className="header">BEST 5 COMPANIES OF WORLD</h1>
      {data.map((company, index) => (
        <RacingCart company={company} index={index} key={index}></RacingCart>
      ))}
      <div className="year"><span>{year}</span></div>
    </div>
  );
}

export default App;
