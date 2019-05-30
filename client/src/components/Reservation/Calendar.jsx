import React from 'react';
import $ from 'jquery';
import Table from './Table/Table.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      date: '',
    };
    this.onCalendar = this.onCalendar.bind(this);
    this.clickOndate = this.clickOndate.bind(this);
  }

  componentDidMount() {
    var modal = $('.calendar');

    $('input.show-calendar').click(() => {
      modal.fadeIn();
    });

    $('.calendar li').click(() => {
      modal.fadeOut();
    });


    const today = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const weekday = today.getDay();
    const month = today.getMonth();
    var todayStr = weekdays[weekday] + ', ' + months[month] + ' ' + today.getDate().toString() + ', ' + today.getFullYear().toString();

    this.setState({
      date: todayStr,
    });
  }

  onCalendar(e) {
    e.preventDefault();
    this.setState({
      done: !this.state.done,
    });
  }

  clickOndate(e, newDate) {
    e.preventDefault();
    this.setState({
      date: newDate,
    });
  }

  render() {
    return (
      <li className="date-picker js-data-picker yform" onClick={this.onCalendar}>
        <div className="yselect">
          <span className="svg-icon">
            <svg className="svg-18">
              <path d="M13.6 16H4.4C3.077 16 2 14.88 2 13.5v-9C2 3.12 3.077 2 4.4 2H5a1 1 0 0 1 2 0h4a1 1 0 0 1 2 0h.6C14.923 2 16 3.12 16 4.5v9c0 1.38-1.077 2.5-2.4 2.5zM15 7H3v6.5c0 .828.627 1.5 1.4 1.5h9.2c.773 0 1.4-.672 1.4-1.5V7zm-5 3h3v3h-3v-3z"></path>
            </svg>
          </span>
          <input className="date-input js-date-input reservation-input show-calendar" value={this.state.date} />
          <span className="yselect_arrow">
            <i className="fas fa-caret-down" />
          </span>
        </div>
        <Table date={this.state.date} clickOndate={this.clickOndate} />
      </li>
    );
  }
};

export default Calendar;
