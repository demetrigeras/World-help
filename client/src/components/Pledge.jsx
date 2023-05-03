import { useState } from 'react';
import { updatePledge, deletePledge } from '../services/pledges.js';


export default function Pledge(props) {
    const {pledge, user, fetchPledges} = props
    const [pledgeUpdate, setUpdatePledge] = useState("")

    const handleUpdateChange = (e) => {
        setUpdatePledge({
            amount: e.target.value,
        })
    }
    
    const handleUpdate = async (e) => {
        e.preventDefault();
    await updatePledge(pledge._id, pledgeUpdate)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
    await deletePledge(pledge._id)
    }

    return (
        <div>{pledge.email} has donated ${pledge.amount}
        { user.email === pledge.email && 
          (<>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Enter your Amount" onChange={handleUpdateChange} />
                <input type="submit" value="Update Pledge!" />
            </form>
            <form onSubmit={handleDelete}>
                <input type="submit" value="Delete Pledge!" />
            </form>
            </>)
        }
        </div>
    )
}
