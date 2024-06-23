import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import ListTodo from './components/ListTodo';
import { useState } from 'react';
function App() {

  const [listTodo, setListTodo]=useState([])
  let addList = (inputText) =>{
    if(inputText !== '')
    setListTodo([...listTodo,inputText])
  }

  const deleteListItems = (key) =>{
    let newListItems = [...listTodo];
    newListItems.splice(key,1)
    setListTodo([...newListItems])
  }
  return (
    <div className="master-container">
      <div className="center-container">

      <TodoInput addList={addList}/>
      <h1 className="add-heading">TODO</h1>
      <hr />
      {
        listTodo.map((listItem,i)=>{
          return (
            <ListTodo key={i} index={i} items={listItem} deleteItem={deleteListItems}/>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;