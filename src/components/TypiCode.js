import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {getUsers} from '../actions/index'
import '../App.css';

function TypiCode() {
  const [state, setState] = useState({
    count:4, 
    theme: 'blue', 
    ressourceTypes: 'posts',
    windowWidth: window.innerWidth
  });

  const ressourceTypes = state.ressourceTypes;

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    
    dispatch(getUsers());
    
    fetch(`https://jsonplaceholder.typicode.com/${ressourceTypes}`)
      .then(response => response.json())
      .then(json => console.log(json))
    console.log('render ressource type was changed ')
  }, [ressourceTypes])

  return (
    <div className="App">
      <h1>Function GET</h1>
      {
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      }

    </div>
  );
}

export default TypiCode;