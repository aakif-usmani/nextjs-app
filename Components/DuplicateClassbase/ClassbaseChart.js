import react from "react";

class ClassbaseChart extends react.Component {
  constructor(props) {
    super(props);
    this.state = { filteredYear: "" };
  }
  totalExpense = 0;
  monthCount = [
    { label: "Jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
 

  render() {
    let Expenses =
    this.state.filteredYear === "all"
      ? this.props.ClassbaseExpense
      : this.props.ClassbaseExpense.filter((filter1) => {
        if (filter1.date.getFullYear().toString() === this.state.filteredYear ) {
          let month = filter1.date.getMonth();
          this.monthCount[month].value += filter1.amount;
          this.totalExpense += filter1.amount;
          return true;
        }else{
          return false;
        }
      });
   
    return (
      this.state.filteredYear !== "all" &&(
      <div className="chart-main">
        <div className="chartDiv-binder">
        {this.monthCount.map((month, index) =>{ 
              return (
                <div className="chart-vertical-div" key={index}>
                  <div
                    className="chart-fill"
                    style={{ height: (month.value / this.totalExpense) * 10 + "%" }}
                  ></div>
                  <p className="month-name">{month.label}</p>
                </div>
              );
            })}
            </div>
      </div>
    ));
  }
};

export default ClassbaseChart ;
