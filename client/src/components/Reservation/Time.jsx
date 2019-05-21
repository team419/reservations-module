import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <li className="time-picker yform">
        <span className="svg-icon"><i className="far fa-clock" /></span>
        <select className="reservation-input">
          <option value="0800">8:00 am</option>
          <option value="0800">8:00 am</option>
          <option value="0800">8:00 am</option>
          <option value="0800">8:00 am</option>
          <option value="0800">8:00 am</option>
          <option value="0800">8:00 am</option>
          <option value="0800">8:00 am</option>
        </select>
        <span className="yselect_arrow"><i className="fas fa-caret-down" /></span>
      </li>
    );
  }
}

export default Time;
