import { GET_CLIENTS } from './queries/clientQueries'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useState } from 'react'

const Login = ({setLoggedIn, setUser, loggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loading, error, data} = useQuery(GET_CLIENTS);

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  const onSubmit = (e) => {
    e.preventDefault();

    let login = loggedIn;
    if(username === '' || password === ''){
      return alert("Please fill in all fields")
    }

    data.clients.forEach(client => {
      if(client.username === username && client.password === password){
        login = true;
        setUser(client);
        setLoggedIn(true);
        navigate('/', { replace: true });
        return;
      }
    });

    if(!login) alert("Invalid Username or Password");
  }

  return (
    <div className="flex login-container">
      <form className="login-form flex" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input 
            type="text" 
            id='username'
            placeholder='Sandra' 
            value={username} 
            onChange={(e) => {
              setUsername(e.target.value);
          }}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input 
            type="password" 
            id='password'
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
          }}
          />
        </div>

        <input type="submit" value='Login' className="signup"/>
      </form>
    </div>
  )
}

export default Login