import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_CLIENT } from './mutations/clientMutations';
import { GET_CLIENTS } from './queries/clientQueries';

const Register = ({setLoggedIn, setUser}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [money, setMoney] = useState(0);
  
  const {loading, error, data} = useQuery(GET_CLIENTS);
  
  const navigate = useNavigate();

  const [addClient] = useMutation(ADD_CLIENT, {
    variables:{
      username,
      email,
      password,
      money
    },
    update(cache, {data: {addClient}}){
      const { clients } = cache.readQuery({query: GET_CLIENTS});
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {clients: clients.concat([addClient])},
      })
    }
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  const onSubmit = (e) => {
    e.preventDefault();

    let registered = true;

    if(username === '' || email === '' || password === ''){
      return alert("Please fill in all fields")
    }

    data.clients.forEach(client => {
      if(client.username === username) registered = false;
    });

    if(registered){
      addClient(username, email, password, 0.0);
      navigate('/login', { replace: true });
    }
    else{
      alert("Account is already in use!");
    }

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
          <label>Email</label>
          <input 
            type="email" 
            id='email'
            value={email} 
            onChange={(e) => {
              setEmail(e.target.value);
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

        <input type="submit" value='Sign Up' className="signup"/>
      </form>
    </div>

  )
}

export default Register