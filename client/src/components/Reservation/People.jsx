import React from 'react';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <li className="people-picker yform">
        <span className="svg-icon"><i className="fas fa-user-ninja" /></span>
        <select className="reservation-input">
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
          <option value="7">7 people</option>
          <option value="8">8 people</option>
          <option value="9">9 people</option>
          <option value="10">10 people</option>
        </select>
        <span className="yselect_arrow"><i className="fas fa-caret-down" /></span>
      </li>
    );
  }
}

export default People;
