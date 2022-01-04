import React, {useState, useEffect} from 'react';
import '../App.css';

function HooksTest() {
  const [state, setState] = useState({
    count:4, 
    theme: 'blue', 
    ressourceTypes: 'posts',
    windowWidth: window.innerWidth
  });

  const count = state.count;
  const theme = state.theme;
  const ressourceTypes = state.ressourceTypes;
  const windowWidth = state.windowWidth;

  function decrement(){
    setState(prevState => {
      return {...prevState, count: prevState.count - 1}
    })
  }

  function increment(){
    setState(newCount => {
      return {...newCount, count: newCount.count + 1}
    })
  }

  function setRessourceType(name){
    setState(prevState => {
      return {ressourceTypes: name};
    })
  }

  const handleWindow = () => {
    setState(prevState => {
      return {windowWidth: window.innerWidth}
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindow);
    
    fetch(`https://jsonplaceholder.typicode.com/${ressourceTypes}`)
      .then(response => response.json())
      .then(json => console.log(json))
    console.log('render ressource type was changed ')
  }, [ressourceTypes])

  return (
    <div className="App">
      <h1>First app</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => setRessourceType('posts')}>Posts</button>
      <button onClick={() => setRessourceType('users')}>Users</button>
      <button onClick={() => setRessourceType('comments')}>Comments</button>
      <h1>{ressourceTypes}</h1>
      <h1>{windowWidth}</h1>
    </div>
  );
}

export default HooksTest;