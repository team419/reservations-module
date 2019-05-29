import React from 'react';
import $ from 'jquery';

import Calendar from '../Reservation/Calendar.jsx';
import People from '../Reservation/People.jsx';
import Time from '../Reservation/Time.jsx';

import Modal from '../Modal/Modal.jsx';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.popupModal = this.popupModal.bind(this);
  }

  componentDidMount() {
    const modal = $('.modal');
    $('.show-modal').click(() => {
      modal.fadeIn();
    });

    $('.close-modal').click(() => {
      modal.fadeOut();
    });
  }

  popupModal(e) {
    e.preventDefault();
  }

  render() {
    const { restaurant } = this.props;
    if (restaurant) {
      return (
        <div className="island">
          <h3 className="reservations-title reservation-header-black show-modal open-modal" onClick={this.popupModal}>
            <span className="svg-icon"><i className="far fa-calendar-minus" /></span>
            <a href="#" >Make a Reservation</a>
          </h3>
          <div className="make-reservation-form-container">
            <form className="reservation-availability-search-form" name="reservation-availability-search-form">
              <ul className="reservation-fields clearfix">
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date} />
                <div className="box inline-layout">
                  <Time restaurant={restaurant} />
                  <People />
                </div>
              </ul>
              <a className="ybtn ybtn--small ybtn--green ybtn-full show-modal open-modal" onClick={this.popupModal}>
                Find a Table
              </a>
            </form>
            <h4 id="widget_motivational_content" className="reservations-title reservation-header-black motivational-content u-text-centered">
              <span className="svg-icon"><i className="fas fa-bolt" /></span>
              Only 3 time slots left!
            </h4>
          </div>
          <Modal restaurant={restaurant} />

        </div>
      );
    }
    return '';
  }
}

export default Reservation;
