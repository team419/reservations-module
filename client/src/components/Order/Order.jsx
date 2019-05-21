import React from 'react';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="island">
        <h3 className="reservations-title reservation-header-black">
          <span className="svg-icon"><i className="fas fa-truck-pickup" /></span>
          <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz">Order Food</a>
        </h3>
        <div className="make-reservation-form-container">
          <form className="reservation-availability-search-form" name="reservation-availability-search-form">
            <small>
              <span className="pickup-close-time">
                This business is closing for pickup in
                <b> 54 minutes</b>
              </span>
            </small>
            <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="ybtn ybtn--small ybtn--green ybtn-full">
              Start Order
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Order;
