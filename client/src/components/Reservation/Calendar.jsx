import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <li className="date-picker js-data-picker yform">
        <div className="yselect">
          <span className="svg-icon">
            <i className="far fa-calendar-minus" />
          </span>
          <input className="date-input js-date-input reservation-input" value="Sunday, May 19, 2019" />
          <span className="yselect_arrow">
            <i className="fas fa-caret-down" />
          </span>
        </div>
      </li>
    );
  }
}

export default Calendar;
