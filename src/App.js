import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoItem from './components/TodoItem';

function App() {
  const [items, setItems] = useState([])

  const addItems = (inputData) => {
    console.log(inputData)
    // setItems((preItem)=>{
    //   console.log(typeof(preItem),typeof(inputData))
    //   console.log(preItem,inputData)
    //   return [...preItem, inputData]
     
    //   // return preItem;
      
    // })
    setItems([...items,inputData])
  }
for(let i=0;i<items.length;i++){
  console.log(typeof(items[i]))
}

  const deleteItem = (id) => {
    setItems((preItem)=>{
      return preItem.filter((item, index) => {
        return id !== index
      })
    })
  }
  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <InputForm addItems={addItems}/>
      <div>
        <ul>
          {items.map((item, index) =>{
            return <TodoItem key={index} text={item} deleteItem={deleteItem} id={index}/>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
