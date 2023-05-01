import { useState, useEffect } from 'react';
import { getCharity } from '../services/charities.js';
import { useParams } from "react-router-dom";

export default function Charity() {
  const [charity, setCharity] = useState({})

  let { id } = useParams()

  const fetchCharity = async () => {
    const oneCharity = await getCharity(id)
    setCharity(oneCharity)
  }

  useEffect(() => {
    fetchCharity()
  }, [])

  return (
    <div>
      <h1>{charity.name}</h1>
      <p>{charity.mission_statement}</p>
      <div className='charityInfo'>
        <p>Mission Statement: {charity.mission_statements}</p>
        <p>Cause Category: {charity.category}</p>
        <p>Private Donations: {charity.private_donations}</p>
        <p>Total Revenue: {charity.total_revenue}</p>
        <p>Fundrising Efficiency: {charity.fundraising_efficiency}%</p>
        <p>Charitable Commitments: {charity.charitable_commitment}%</p>
        <p>Click the link below to donate!</p>
        <a href={charity.website}>{charity.website}</a>
      </div>
    </div>
  )
}
