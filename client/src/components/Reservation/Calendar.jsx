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
            <i className="far fa-calendar-minus" />
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
