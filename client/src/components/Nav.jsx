import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/sign-in">Sign In</NavLink>
      <NavLink to="/sign-out">Sign Out</NavLink>
    </nav>
  )
}
