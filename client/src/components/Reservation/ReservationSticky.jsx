import React from 'react';
import Calender from '../Reservation/Calendar.jsx';
import People from '../Reservation/People.jsx';
import Time from '../Reservation/Time.jsx';

class ReservationSticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="island reservations-sticky-bar--top reservations-sticky-bar">
        <h3 className="reservations-title reservation-header-black">
          <span className="svg-icon"><i className="far fa-calendar-minus" /></span>
          <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz">Make a Reservation</a>
        </h3>
        <div className="make-reservation-form-container">
          <form className="reservation-availability-search-form" name="reservation-availability-search-form">
            <ul className="inline-layout reservation-fields clearfix">
              <Calender />
              <div className="box">
                <Time />
                <People />
              </div>
            </ul>
            <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="ybtn ybtn--small ybtn--green ybtn-full">
              Find a Table
            </a>
            <p className="text-error js-reservations-error-message u-hidden">
              <span className="svg-icon"><i className="fas fa-bolt" /></span>
              Only 3 time slots left!
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default ReservationSticky;
