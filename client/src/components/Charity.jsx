import { Link } from "react-router-dom";

export default function Charity({charity}) {
    return (
        <div>
            <Link to={`/charity/${charity._id}`} >
                <img className="logo" src={charity.logo} alt={charity.name} />
            </Link>
        </div>
    )
}
