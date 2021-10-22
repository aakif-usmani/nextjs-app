import React from "react";
import ClassbaseChart from "../Components/CourseProject/charts/Chart";
import ClassbaseFilter from "../Components/DuplicateClassbase/ClassbaseFilter"
import ClassbaseForm from "../Components/DuplicateClassbase/ClassbaseForm"
import ClassbaseList from "../Components/DuplicateClassbase/ClassbaseList";

class Classbase extends React.Component {
    ClassbaseDUMMY_ESPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  constructor() {
    super();
    this.state = {
      expense:this.ClassbaseDUMMY_ESPENSES,
    };
  }

 
 

  render() {
    return (
      <div className="App">
        <div className="main2" >
        <ClassbaseForm />
        <ClassbaseChart ClassbaseExpense={this.state.expense} />
        <ClassbaseFilter ClassbaseExpenses={this.state.expense}/>
        <ClassbaseList ClassbaseExpense={this.state.expense} />
        </div>
      </div>
    );
  }
}

export default Classbase;
