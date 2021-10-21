import React, { useState } from "react";
import CompleteTask from "../Components/todo-list/TaskShowComponent/CompleteTask"
import UncompleteTask from "../Components/todo-list/TaskShowComponent/UncompeleteTask";


const App = () => {
  const [taskValue, setTaskValue] = useState("");
  const [taskDate, steTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskList, setTaskList] = useState({
    "items": [
      {
        task: "something is wrong in main page",
        date: "02-09-2021",
        time: "05:35",

      },

    ]
  }
  );
  const [taskUList, setTaskUList] = useState({
    "items": [
      {
        task: "something is wrong in main page",
        date: "02-09-2021",
        time: "05:35",

      },

    ]
  }
  );

  const taskValueChangeHandler = (event) => {
    setTaskValueClass("noborder")
    setTaskValue(event.target.value);
  }
  
  const taskDateChangeHandler = (event) => {
    setTaskDateClass("noborder")
    steTaskDate(event.target.value);
  }
  
  const taskTimeChangeHandler = (event) => {
    setTaskTimeClass("noborder")
    setTaskTime(event.target.value);
  }

  const taskListClickHander = (event) => {
    let iswrong = false;
    if (taskValue === "") {
      setTaskValueClass("redBorder")
      // alert("please enter a  task");
      iswrong = true;
    }
    if (taskDate === "") {
      setTaskDateClass("redBorder")
      // alert("please enter a date of task");
      iswrong = true;
    }
    if (taskTime === "") {
      setTaskTimeClass("redBorder")
      // alert("please enter time of task");
      iswrong = true;
    }
    if (iswrong) {

      return;
    }
    var x = taskList.items;
    x.push({
      task: taskValue,
      date: taskDate,
      time: taskTime,

    })
    setTaskList({ "items": x })
    //setTaskValue("");
    //steTaskDate("");
    //setTaskTime("");
  }
  var removinghandler = (index) => {
    var a = taskList.items
    var removed = a.splice(index, 1)
    console.log(removed);
    setTaskList({ "items": a })
    var y = taskUList.items

    y.push(removed[0])
    setTaskUList({ "items": y })
  };


  var reverseHandler = (index) =>{
    var a = taskUList.items
    var removed = a.splice(index, 1)
    // console.log(removed);
    setTaskUList({ "items": a })
    var y = taskList.items

    y.push(removed[0])
    setTaskList({ "items": y })
  }

  const [taskValueClass,setTaskValueClass] = useState("noborder");
  const [taskTimeClass,setTaskTimeClass] = useState("noborder");
  const [taskDateClass,setTaskDateClass] = useState("noborder");

  return (
    <div className="App">
      <div className="main-2">
        <p><b>INPUT TASK HERE</b></p>
        <div className="taskInput1 main-2">
          <input
            type="text"
            className={"input-top "+taskValueClass}
            value={taskValue}
            onChange={taskValueChangeHandler}
            placeholder="ADD TASK"
          />
          <input
            type="date"
            className={"input-top "+taskDateClass}
            value={taskDate}
            onChange={taskDateChangeHandler}
          />
          <input
            type="time"
            className={"input-top "+taskTimeClass}
            value={taskTime}
            onChange={taskTimeChangeHandler}
          />
          <input
            type="submit"
            className="input-top"
            onClick={taskListClickHander}
          />

          {/* <TaskInput />
          <DateInput />
          <TimeInput />
          <AddTaskbutton/> */}
        </div>
        <p>
          <b>UNCOMPLETE TASK</b>
        </p>
        <div className=" main-2">
          <UncompleteTask items={taskList.items} itemsnumber={taskList.items.length} removinghandler={removinghandler} />
        </div>
        <p>
          <b>COMPLETE TASK</b>
        </p>
        <div className=" main-2">
          <CompleteTask items={taskUList.items} reverseHandler={reverseHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;