import react from "react";

class ClassbaseList extends react.Component {
  render() {
    return (
      <div className="listed-main">
        <table  className="table">
        <tbody>
          <tr className="tr">
            <th>Title</th>
            <th>Date</th>
            <th>amoumt</th>
          </tr>
          {this.props.ClassbaseExpense.map((listed, index) => {
            return (
              <tr key={index}>
                <td>{listed.title}</td>
                <td>
                  {listed.date.toLocaleString("default", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td>{listed.amount}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassbaseList;
