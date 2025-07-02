import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions

  if (user) {
    userOptions = (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/carts">Cart</Link>
        <Link to="/account">Account</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/account">Account</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <img className="logo" src="/images/logo.png" alt="logo" height="100px"
        width= "200px"/>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
