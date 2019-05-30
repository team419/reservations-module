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
        <h3 className="h3element reservations-title reservation-header-black">
          <span className="svg-icon">
            <svg className="svg-24">
              <g><path d="M19 10V4h-6v10H9.444a3.485 3.485 0 0 0-4.888 0H2v3h1.55A3.49 3.49 0 0 0 7 20a3.49 3.49 0 0 0 3.45-3h3.1c.24 1.69 1.69 3 3.45 3 1.76 0 3.21-1.31 3.45-3H22v-5l-3-2zM7 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8-12h2v3h-2V6zm2 12c-.83 0-1.5-.67-1.5-1.5S16.17 15 17 15s1.5.67 1.5 1.5S17.83 18 17 18z"></path><path d="M6 7V6c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1H6m2-4H7a3 3 0 0 0-3 3v1H2v7h11V7h-2V6a3 3 0 0 0-3-3" opacity=".502"></path></g>
            </svg>
          </span>
          <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="atag">Order Food</a>
        </h3>
        <div className="make-reservation-form-container">
          <form className="reservation-availability-search-form" name="reservation-availability-search-form">
            <small>
              <span className="pickup-close-time">
                This business is closing for pickup in
                <b> 54 minutes</b>
              </span>
            </small>
            <a href="https://www.yelp.com/reservations/surisan-san-francisco?source=yelp_biz" className="atag ybtn ybtn--small ybtn--green ybtn-full">
              Start Order
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Order;
