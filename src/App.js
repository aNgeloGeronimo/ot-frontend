import Navbar from './components/Navbar'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import AboutUs from './AboutUs'
import Highlight from './components/Highlight'
import {useState} from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Store from './Store'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields : {
        clients : {
          merge(existing, incoming){
            return incoming;
          }
        },
        products : {
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
});


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: cache,
});

function App() {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [highlights, setHighlights] = useState();

  return (
    <>
      <ApolloProvider client={client}>
        <Navbar loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} loggedIn={loggedIn}/>}/>
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUser={setUser} loggedIn={loggedIn}/>}/>
          <Route path="/highlight" element={<Highlight highlights={highlights}/>}/>
          <Route path="/store" element={<Store highlights={highlights} setHighlights={setHighlights}/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;