import React, { Component } from 'react';

class CountryFactory extends Component {

  constructor() {
    super();
    this.labels = [];
    this.countries = [];
    this.getLabels();
    this.getCountries();
  }

  getLabels = () => {
    var promise = fetch('http://localhost:3333/labels');
    promise.then(function (response) {
      return response.json();
    }).then(function (label) {
      var tableRows = label.map(function (labels) {
        return "<th>" + labels + "</th>";
      }).join("");
      document.getElementById("thead").innerHTML = tableRows;
    });
  }

  getCountries = () => {
    var promise = fetch('http://localhost:3333/countries');
    promise.then(function (response) {
      return response.json();
    }).then(function (country) {
      var tableRows = country.map(function (countries) {
        return "<tr><td>" + countries.name + "</td>"+
         "<td>" + countries.capital + "</td>"+
         "<td>" + countries.region + "</td>"+
         "<td>" + countries.population + "</td>"+
         "<td>" + countries.area + "</td>"+
         "<td>" + countries.timezones + "</td>"+
         "<td>" + countries.borders + "</td>"+
         "<td>" + countries.topLevelDomain + "</td>"+
         "<td>" + countries.currencies + "</td>"+
         "<td>" + countries.languages + "</td></tr>";
      }).join("");
      document.getElementById("tbody").innerHTML = tableRows;
    });
  }
}

export default new CountryFactory();