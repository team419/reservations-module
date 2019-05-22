import React from 'react';
import Calender from './Calendar.jsx';
import People from './People.jsx';
import Time from './Time.jsx';

class ReservationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="island reservations-sticky-bar--top reservations-sticky-bar">
        <div className="make-reservation-form-container">
          <form className="reservation-availability-search-form" name="reservation-availability-search-form">
            <ul className="inline-layout reservation-fields clearfix reservations-top">
              <Calender />
              <Time />
              <People />
              <li>
                <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="ybtn ybtn--small ybtn--green ybtn-full">
                  Find a Table
                </a>
              </li>
              <li>
                <p className="text-error js-reservations-error-message u-hidden">
                  <span className="svg-icon"><i className="fas fa-bolt" /></span>
                  Only 3 time slots left!
                </p>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default ReservationTop;
