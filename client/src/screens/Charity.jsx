import { useState, useEffect } from 'react';
import { getCharity } from '../services/charities.js';
import { useParams } from "react-router-dom";
import { getPledges, createPledge, updatePledge, deletePledge } from '../services/pledges.js';
import Pledge from '../components/Pledge.jsx';


export default function Charity(props) {
  const { user } = props
  const [charity, setCharity] = useState({})
  const [pledge, setPledge] = useState({
    email: '',
    amount: '',
    charity: ''
  })
  const [pledges, setPledges] = useState([])

  let { id } = useParams()

  const fetchCharity = async () => {
    const oneCharity = await getCharity(id)
    setCharity(oneCharity)
  }

  useEffect(() => {
    fetchCharity()
    fetchPledges()
  }, [])

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pledge)
    await createPledge(pledge)
  }

  const handleChange = (e) => {
    setPledge({email: user.email,
      amount: e.target.value,
      charity: charity.name
    })
  }
  
  const fetchPledges = async () => {
    const allPledges = await getPledges()
    setPledges(allPledges)
  }
  const filteredPledges = pledges.filter(pledge => pledge.charity === charity.name)

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
        <div className='Pledges'>
        <header>Pledges</header>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Enter your Amount" onChange={handleChange}/>
          <input type="submit" value="Pledge!" />
        </form>
        
        <div>World-Help User Pledges</div>
        <div>{filteredPledges.map((pledge) => (
          <Pledge key={pledge._id} pledge={pledge}/>
        ))}
        </div>
      </div>
    </div>
  )
}
