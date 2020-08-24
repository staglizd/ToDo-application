import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';
import Todo from './Components/Todo';
import db from './firebase'
import firebase from 'firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState('');

  // When the app loads, listen to the database and fetch new todos
  useEffect(() => {
    // this code here fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({
        id:doc.id, todo:doc.data().todo})))
      })
  }, []);

  const addTodo = (event) => {
    // Event onclick button
    event.preventDefault(); // Will prevet refreshing page
    //console.log('LOG', 'Button clicked!');

    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setinput(''); // Clear input field
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <form>
        <FormControl>
        
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setinput(event.target.value)}/>
        
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add ToDo
        </Button>
        
        {/*<Button type="submit" onClick={addTodo}>Add Todo</Button>*/}
        
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
