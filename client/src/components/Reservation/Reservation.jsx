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
    const modal = $('.modal-modal');
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
          <h3 className="h3element reservations-title reservation-header-black show-modal open-modal" onClick={this.popupModal}>
            <span className="svg-icon">
              <svg className="svg-24">
                <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-6 5h4v4h-4v-4z">
                </path>
              </svg>
            </span>
            <a href="#" className="atag">Make a Reservation</a>
          </h3>
          <div className="make-reservation-form-container">
            <form className="reservation-availability-search-form" name="reservation-availability-search-form">
              <ul className="ulelement reservation-fields clearfix">
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date} />
                <div className="tp-box inline-layout">
                  <Time restaurant={restaurant} />
                  <People />
                </div>
              </ul>
              <a className="atag ybtn ybtn--small ybtn--green ybtn-full show-modal open-modal" onClick={this.popupModal}>
                Find a Table
              </a>
            </form>
            <h4 id="widget_motivational_content" className="h4element reservations-title reservation-header-black motivational-content u-text-centered">
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
