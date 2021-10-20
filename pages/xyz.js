import React, { useState } from "react";
import Link from 'next/link'
// import TaskInput from "./Components/InputComponents/TaskInput";
// import DateInput from "./Components/InputComponents/DateInput";
// import TimeInput from "./Components/InputComponents/TimeInput";
import CompleteTask from "./Components/TaskShowComponents/CompleteTask";
import UncompleteTask from "./Components/TaskShowComponents/UncompeleteTask";
// import AddTaskbutton from "./Components/InputComponents/AddTaskButton";


const xyz = () => {
  const [taskValue,setTaskValue] = useState("")
  const [taskTime,setTaskTime] = useState()
const [tastDate,setTaskDate] = useState(new Date())
const [tasklist,setTasklist] = useState({"items":[
  {
    task: "something is wrong in main page",
    date: "02-09-2021",
    time: "05:35"
  },
  
]});
    const taskValueChangeHandler = (event) =>{
      setTaskValue(event.target.value)
    }
    const dateChangeHandler = (event) => {
      setTaskDate(event.target.value);
    };
    const taskTimeChangeHandler = (event)=>{
      setTaskTime(event.target.value)
    }
    const addTask =(event)=>{
      event.preventDefault();

      var x= tasklist.items;
      x.push({
        task: taskValue,
        date: "12-8-2021",
        time: "11:45",
      })
      setTasklist({"items":x})
      
    }
  return (
    <div className="App">
        <h1>
      <Link href="/">
            <a>HOME</a>
      </Link>
      </h1>
      <div className="main-2">
        <p><b>INPUT TASK HERE</b></p>
        <div className="taskInput1 main-2">
        <input placeholder="ADD TASK" type="text" className="input-top" value={taskValue} onChange={taskValueChangeHandler} />
        <input type="date" className="input-top" value={tastDate}   onChange={dateChangeHandler}  />
        <input type="time" className="input-top" value={taskTime} onChange={taskTimeChangeHandler} />
        <input type="submit" className="input-top" placeholder="TIME" onClick={addTask} />
          {/* <TaskInput />
          <DateInput />
          <TimeInput />
          <AddTaskbutton/> */}
        </div>
        <p>
          <b>UNCOMPLETE TASK</b>
        </p>
        <div className=" main-2">
          <UncompleteTask items={tasklist.items} itemsnumber={tasklist.items.length}/>
        </div>
        <p>
          <b>COMPLETE TASK</b>
        </p>
        <div className=" main-2">
          <CompleteTask />
        </div>
      </div>
    </div>
  );
}

export default xyz;