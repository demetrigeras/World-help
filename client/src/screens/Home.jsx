import React, { useState, useEffect } from 'react';
import Charity from "../components/Charity.jsx";
import { getCharities } from "../services/charities.js";

export default function Home() {
  const [charities, setCharities] = useState([])

  const [domesticOnly, setDomesticOnly] = useState(false);
  const [interOnly, setInterOnly] = useState(false);
  const [educateOnly, setEducateOnly] = useState(false);
  const [youthOnly, setYouthOnly] = useState(false);  

  const fetchCharities = async () => {
    const allCharities = await getCharities()
    setCharities(allCharities)
  }

  useEffect(() => {
    fetchCharities()
  }, [domesticOnly, interOnly, educateOnly, youthOnly])

  const handleDomestic = () => {
    setDomesticOnly(!domesticOnly);
  }

  const handleInter = () => {
    setInterOnly(!interOnly);
  }

  const handleEducate = () => {
    setEducateOnly(!educateOnly);
  }

  const handleYouth = () => {
    setYouthOnly(!youthOnly);
  }

  const filteredList = (domesticOnly || interOnly || educateOnly || youthOnly)
  ? charities.filter((charity) => 
  (domesticOnly && charity.category === "Domestic Needs") ||
  (interOnly && charity.category === "International Needs") ||
  (educateOnly && charity.category === "Education") ||
  (youthOnly && charity.category === "Youth")
  ) 
  : charities;

  return (
    <div>
        <div className="header">
          <h1>Welcome to World Help!</h1>
          <p>Click on any chairitable organization below to get more information!</p>
        </div>

        <div className='browse-button'>
            <button onClick={handleDomestic}>
              {domesticOnly ? "Show All" : "Domestic Needs"}
            </button>
            <button onClick={handleInter}>
              {interOnly ? "Show All" : "International Needs"}
            </button>
            <button onClick={handleEducate}>
              {educateOnly ? "Show All" : "Education"}
            </button>
            <button onClick={handleYouth}>
              {youthOnly ? "Show All" : "Youth"}
            </button>
        </div>

        <div className="charities">
          {filteredList.map((charity) => (
            <Charity key={charity._id} charity={charity} />
          ))}
        </div>
    </div>
  )
}