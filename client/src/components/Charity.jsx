import { Link } from "react-router-dom";

export default function Charity({charity}) {
    return (
        <div>
            <Link className="logo" to={`/charity/${charity._id}`} >
                <img  src={charity.logo} alt={charity.name} />
            </Link>
        </div>
    )
}
