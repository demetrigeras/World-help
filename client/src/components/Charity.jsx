import { Link } from "react-router-dom";
import { React, useState, useEffect } from 'react';


export default function Charity({charity}) {
    return (
        <div className="grid-container">
            <Link to={`/charity/${charity._id}`} >
                <div className="logo-container">
                <img  className={charity.name} src={charity.logo} alt={charity.name} />
                </div>
            </Link>
        </div>
    )
}
