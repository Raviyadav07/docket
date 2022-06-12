import React, { useState } from 'react'
import todo from '../image/logo.jpg';
import './Todo.css'
export default function Todolist() {
  const[input, setInput] = useState('');
  const[items, setItems] = useState([]);
  const addItem =()=>{
    if(!input){

    }else{
      setItems([...items, input]);
      setInput('');
    }   
  }

  const deleteItem=(id)=>{
    const updatedItems = items.filter((element, index)=>{
      return index !== id;
    })
    setItems(updatedItems);
  }

  const removeAll = ()=>{
    setItems([]);
  }
  return (
    <div className='parent-div'>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="Docket logo" />
            <figcaption>Add Your List Here ✍️</figcaption>
          </figure>
          <div className="add-items">
            <input type="text" placeholder='Add Items...' 
            value={input} 
              onChange={(e)=>setInput(e.target.value)}
            />
            <i className="fa-solid fa-plus add-btn" title='Add item' onClick={addItem}></i>
          </div>

          <div className="show-items">
          {
          items.map((element,index)=>{
            return(
              <div className="each-item" key={index}>
              <p>{element} </p>
              <i className="fa-solid fa-trash" title='Delete item' onClick={()=>deleteItem(index)}></i>
            </div>
            )
          })
          }   
          </div>

          <div className="show-items">
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  )
}
