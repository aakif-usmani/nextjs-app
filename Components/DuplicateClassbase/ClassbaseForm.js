import react from "react";

class ClassbaseForm extends react.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    };
  }
  showHideHandler = () => {
    this.setState({ showHide: !this.state.showHide });
  };
  titleChangeHandler = (event) => {
    this.setState({ enteredTitle: event.target.value });
  };
  amoumtChangeHandler = (event) => {
    this.setState({ enteredAmount: event.target.value });
  };
  dateChangeHandler = (event) => {
    this.setState({ enteredDate: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: this.state.enteredTitle,
      amount: this.state.enteredAmount,
      date: new Date(this.state.enteredDate),
    };
    console.log(expenseData);
  };

  render() {
    return (
      <div >
        <div>
          <h1 className="heading-expense">EXPENSE MANAGER</h1>
        </div>
        <div className="form-main">
          <form onSubmit={this.submitHandler}>
            {this.state.showHide === false ? (
              <div>
                <button className="input" onClick={this.showHideHandler}>
                  Add New Expense
                </button>
              </div>
            ) : (
              <div>
                <label>Expense</label>
                <input
                  className="text-input  input"
                  type="text"
                  placeholder="Enter Title "
                  value={this.state.enteredTitle}
                  onChange={this.titleChangeHandler}
                ></input>
                <label>Amount</label>
                <input
                  className="amount-input classsbase-input"
                  placeholder="Add Amount"
                  type="number"
                  min="1"
                  step="1"
                ></input>
                <label>Date</label>
                <input
                  className="date-input classsbase-input"
                  placeholder="Add Date"
                  type="date"
                ></input>
                <div>
                  <button className="classsbase-input" onClick={this.showHideHandler}>
                    cancel
                  </button>
                  <button className="classsbase-input" onClick={this.expenseData}>
                    Add Expense
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default ClassbaseForm;
