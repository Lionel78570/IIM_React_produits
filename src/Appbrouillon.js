import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import List from "./Components/List"
import styled from 'styled-components'

import { Link } from "react-router-dom"

function App() {

  let [users, setUsers] = useState([])

  function fetchRandomUser() {
    fetch("https://randomuser.me/api/").then((res) => {
      res.json().then((json) => {
        console.log(json.results[0])
        setUsers([...users, json.results[0]])
      })
    })
  }

  useEffect(() => {
    fetchRandomUser()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      {
        users.map((user) => {
          return (<RandomUserCard>
            <img src={user.picture.large} />
            {user.name.first} {user.name.last}
            {/* <img src={user.} */}
          </RandomUserCard>)
        })
      }
      <Button className="danger" onClick={() => fetchRandomUser()} > Add User </Button>
      
      {/* import { Link } from "react-router-dom" */}

      <Link to="/about">Go To About</Link>
      </header>
    </div>
  );
}

const RandomUserCard = styled.div`
width: 800px;
border: 1px solid red;
border-radius: 5px;
`


const Button = styled.button`
  color: blue;
  background-color: red;
  border-radius: 15px;
  &:hover {
    background-color: green;
  }
  &.danger {

  }
`

export default App;