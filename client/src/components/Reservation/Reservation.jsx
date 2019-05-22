import React from 'react';
import Calender from '../Reservation/Calendar.jsx';
import People from '../Reservation/People.jsx';
import Time from '../Reservation/Time.jsx';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="island">
        <h3 className="reservations-title reservation-header-black">
          <span className="svg-icon"><i className="far fa-calendar-minus" /></span>
          <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz">Make a Reservation</a>
        </h3>
        <div className="make-reservation-form-container">
          <form className="reservation-availability-search-form" name="reservation-availability-search-form">
            <ul className="reservation-fields clearfix">
              <Calender />
              <div className="box inline-layout">
                <Time />
                <People />
              </div>
            </ul>
            <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="ybtn ybtn--small ybtn--green ybtn-full">
              Find a Table
            </a>
          </form>
          <h4 id="widget_motivational_content" className="reservations-title reservation-header-black motivational-content u-text-centered">
            <span className="svg-icon"><i className="fas fa-bolt" /></span>
            Only 3 time slots left!
          </h4>
        </div>
      </div>
    );
  }
}

export default Reservation;
