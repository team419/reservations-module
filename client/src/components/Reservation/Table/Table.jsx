import React from 'react';
import $ from 'jquery';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
    };
    this.selectDate = this.selectDate.bind(this);
  }

  componentDidMount() {

  }

  selectDate(e) {
    e.preventDefault();
    const newDate = 'Wednesday, May ' + e.target.value + ', 2019';

    this.props.clickOndate(e, newDate);
  }

  render() {
    const firstDay = (month, year) => (
      new Date(year, month, 1).getDay()
    );

    const numDays = (month, year) => (
      new Date(year, month, 0).getDate()
    );

    const d = new Date();
    const today = d.getDate();
    const year = d.getFullYear();
    // let currentMonth = d.getMonth() + themonth;
    const currentMonth = d.getMonth() + 1;
    const days = numDays(currentMonth, d.getYear());
    const fDay = firstDay(currentMonth, d.getYear());
    const currentMonthNum = d.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // month names

    const currentMonthStr = months[currentMonthNum] + ' 2019';

    const createFrontRow = () => {
      const firstrow = [];
      for (let i = 0; i < fDay - 1; i += 1) {
        firstrow.push(<li>&nbsp;</li>);
      }
      return firstrow;
    }

    const createEachDay = () => {
      const cal = [];
      for (let i = 1; i <= days + 1; i += 1) {
        cal.push(<li className={`eachday day${i}`} onClick={(e) => this.selectDate(e)} value={`${i}`}>{i}</li>);

        if (i === today && currentMonth === 5) {
          $('li.day' + i).addClass('focusnow');
        }

        if (i > 31) {
          $('li.day' + i).addClass('noshow');
        }

        if (i > 0 && i < today) {
          $('li.day' + i).addClass('noselect');
        }

        if (i >= today) {
          $('li.day' + i).addClass('okselect');
        }
      }

      return cal;
    };

    return (
      <div className="calendar reservation-popup-date-picker js-reservation-popup-date-picker" onClick={this.createCalender}>
        <div className="drop-menu-arrow">
        </div>
        <div className="topgroup">
          <p className="left monthname center pointer">{currentMonthStr}</p>
          <button className="left pointer minusmonth">&laquo;</button>
          <button className="right pointer addmonth">&raquo;</button>
        </div>
        <ul className="group">
          <li className="weekday">S</li>
          <li className="weekday">M</li>
          <li className="weekday">T</li>
          <li className="weekday">W</li>
          <li className="weekday">T</li>
          <li className="weekday">F</li>
          <li className="weekday">S</li>
          {createFrontRow()}
          {createEachDay()}
        </ul>
      </div>
    );
  }
}

export default Table;
