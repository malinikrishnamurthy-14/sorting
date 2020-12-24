import React from "react";
import { Link } from "react-router-dom";
import { response } from "../response";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortproperty: props.sortproperty || "rank",
    };
  }

  renderTableHeader() {
    return (
      <tr key="table-header" className="table-header">
        <th className="table-cell">Rank</th>
        <th className="table-cell">Name</th>
        <th className="table-cell">Points</th>
        <th className="table-cell">Age</th>
      </tr>
    );
  }

  renderTableData(sortproperty) {
    let sortedList;
    if (sortproperty === "name") {
      //sort function for strings
      sortedList = response.list.sort((a, b) => {
        if (a[sortproperty] > b[sortproperty]) return 1;
        if (a[sortproperty] < b[sortproperty]) return -1;
        return 0;
      });
    } else {
      //sort function for numbers
      sortedList = response.list.sort(
        (a, b) => a[sortproperty] - b[sortproperty]
      );
    }

    return sortedList.map((listitem, key) => {
      return (
        <tr key={`table-row ${key}`} className="table-data-row">
          <td className="table-cell">{listitem.rank}</td>
          <td className="table-cell">{listitem.name}</td>
          <td className="table-cell">{listitem.points}</td>
          <td className="table-cell">{listitem.age}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="main-container">
        <h1> Click on the button to sort in ascending order</h1>
        <div className="button-container">
          <div className="link-container">
            <Link to="/rank">
              <button className="button">Rank</button>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/name">
              <button className="button">Name</button>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/points">
              <button className="button">Points</button>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/age">
              <button className="button">Age</button>
            </Link>
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>{this.renderTableHeader()}</thead>
            <tbody>{this.renderTableData(this.state.sortproperty)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main;
