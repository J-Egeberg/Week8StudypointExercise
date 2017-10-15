import React, { Component } from "react";

class CountryTable extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr id="thead"></tr>
        </thead>
        
        <tbody id="tbody">
        </tbody>
      </table>
    );
  }
}
export default CountryTable;