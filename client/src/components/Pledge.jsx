import { useState } from 'react';
import { updatePledge, deletePledge } from '../services/pledges.js';


export default function Pledge({pledge}) {
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

    return (
        <>
        <div>{pledge.email} has donated ${pledge.amount}
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Enter your Amount" onChange={handleUpdateChange} />
                <input type="submit" value="Update Pledge!" />
            </form>
            <form>
                <input type="submit" value="Delete Pledge!" />
            </form>
        </div>
        </>
    )
}
