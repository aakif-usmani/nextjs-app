import react from "react";

class ClassbaseFilter extends react.Component {
  constructor() {
    super();
    this.state = {
      expensesYears: [],
    };
  }
  componentDidMount = async () => {
    console.log("state changed");
    let xYears = [];
    this.props.ClassbaseExpense.filter((item) => {
      if (xYears.indexOf(item.date.getFullYear()) === -1) {
        xYears.push(item.date.getFullYear());
      }
      return true;
    });

    await this.setState({ expensesYears: xYears });
  };

  render() {
    let p = this.state.expensesYears.length;
    console.log(this.state.expensesYears.length);
    return (
      <div className="classsbase-filter-main">
        <p className="classsbase-filter-text">
          <b>Filter Year </b>
        </p>
        {p > 0 ? (
          <select className="classsbase-select-filter-year">
            <option className="classsbase-select-option" value={"all"}>
              all
            </option>
            {this.state.expensesYears.map((e, index) => {
              var ey = e.toString();
              return (
                <option key={index} className="classsbase-select-option" value={ey}>
                  {ey}
                </option>
              );
            })}
          </select>
        ) : (
          <p>kghhjk{p}hjkhjk</p>
        )}
      </div>
    );
  }
}

export default ClassbaseFilter;
