import { useState } from 'react'
// import './App.css'
function App() {
  // const [count,setCount] = useState(0);
  const [todos,setTodos] = useState([
    {
      title: "Go to gym",
      description:"Go to gym from 7 to 8",
      completed: false
    },
    {
      title: "Study DSA",
      description:"Study dsa from 10 to 12",
      completed: true
    },
    {
      title: "Study Web Dev",
      description:"Study Web from 12 to 2 ",
      completed: true
    }

  ])
  // console.log(count);
  // console.log(setCount);
  function addTodo(){
    setTodos([...todos,{
      title:"New Todo",
      description:"desc of new todo"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add to do</button>
      {todos.map((item,index)=>{
        return <Todo title={item.title} description={item.description}></Todo>
      })}
      {/* {JSON.stringify(todos)} */}
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
    </div>
  )
}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1);
//   }
//   return <button onClick={onClickHandler}>Counter {props.count}</button>
// }


export default App
