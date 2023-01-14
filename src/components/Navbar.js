import { Link } from "react-router-dom"

const Navbar = ({loggedIn, user, setLoggedIn, setUser}) => {

  const logout = e => {
    setLoggedIn(false);
    setUser('');
  }

  return (
    <nav className="navbar flex">
        <div className="container flex">
          <div className="logo">
            <Link className="link flex" to='/' 
              onClick={(e) => {
              const docBody = document.querySelector('body');
              docBody.classList.remove('body-style-2');
            }}>
              <h1>Only</h1>
              <h1>Teens</h1>
            </Link>
          </div>
          
          <div className="navigation">
            <Link className="link" to="/store">STORE</Link>
            <Link className="link" to="/aboutus">ABOUT US</Link>
          </div>


          {loggedIn 
          ? <div className="message flex">
              <h5>Hello, {user.username}</h5>
              <button class="btn" onClick={logout}>Logout</button>
            </div>
          
          : <div className="something">
              <Link to="/login" className='btn' onClick={(e) => {
                const docBody = document.querySelector('body');
                docBody.classList.add('body-style-2');
              }}>
                Login
              </Link>
              <Link to="/register" className='btn' onClick={(e) => {
                const docBody = document.querySelector('body');
                docBody.classList.add('body-style-2');
              }}>
                Register
              </Link>
            </div>
          }

          
        </div>
    </nav>
  )
}

export default Navbar
