import React from 'react';
import Calendar from './Calendar.jsx';
import People from './People.jsx';
import Time from './Time.jsx';

import cssSticky from '../../../style/sticky.css';

class ReservationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div id="reservations-sticky-bar" className="island reservations-sticky-bar--top reservations-sticky-bar hidden">
        <div className="make-reservation-form-container">
          <form className="reservation-availability-search-form" name="reservation-availability-search-form">
            <ul className="ulelement inline-layout reservation-fields clearfix reservations-top">
              <li className="date-picker js-data-picker yform" onClick={this.onCalendar}>
                <div className="yselect">
                  <span className="svg-icon">
                    <i className="far fa-calendar-minus" />
                  </span>
                  <input className="date-input js-date-input reservation-input show-calendar" value="Monday, May 27, 2019" />
                  <span className="yselect_arrow">
                    <i className="fas fa-caret-down" />
                  </span>
                </div>
              </li>
              <Time restaurant={restaurant} />
              <People />
              <li>
                <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="atag ybtn ybtn--small ybtn--green ybtn-full">
                  Find a Table
                </a>
              </li>
              {/* <li>
                <p className="text-error js-reservations-error-message u-hidden">
                  <span className="svg-icon"><i className="fas fa-bolt" /></span>
                  Only 3 time slots left!
                </p>
              </li> */}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default ReservationTop;
