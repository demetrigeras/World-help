import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  const { user } = props
  console.log({user}, user)

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      
      {user ?
      <NavLink to="/sign-out">Sign Out</NavLink>:(
      <>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/sign-in">Sign In</NavLink>
      </>)}
    </nav>

  )
}
