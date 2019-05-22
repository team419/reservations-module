import React from 'react';
import Table from './Table.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
    this.onCalendar = this.onCalendar.bind(this);
  }

  onCalendar(e) {
    e.preventDefault();
    this.setState({
      done: !this.state.done,
    });
  }

  render() {
    if (this.state.done) {
      return (
        <li className="date-picker js-data-picker yform" onClick={this.onCalendar}>
          <div className="yselect">
            <span className="svg-icon">
              <i className="far fa-calendar-minus" />
            </span>
            <input className="date-input js-date-input reservation-input" value="Sunday, May 19, 2019" />
            <span className="yselect_arrow">
              <i className="fas fa-caret-down" />
            </span>
          </div>
          <Table />
        </li>
      );
    } else {
      return (
        <li className="date-picker js-data-picker yform" onClick={this.onCalendar}>
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
}

export default Calendar;
