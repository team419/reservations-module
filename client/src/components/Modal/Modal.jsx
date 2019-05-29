import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      date: '',
    };
    this.renderConfirmation = this.renderConfirmation.bind(this);
    this.renderReview = this.renderReview.bind(this);
  }

  renderConfirmation(e) {
    // e.preventDefault();
    this.setState({
      step: 1,
    });
  }

  renderReview(e) {
    this.setState({
      step: 2
    });
  }

  render() {
    const { restaurant } = this.props;
    const { step } = this.state;
    if (step === 1) {
      return (

        <div className="container-confirm">
          <div className="modal">
            <button className="close-modal" href="#" onClick={this.renderReview} type="button">X</button>
            <div className="confirm-box">

              <img className="box-item svg-item" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/reservation_pages/9594f2f4936f/assets/img/www_ResIllustration@2x.png" alt="" />
              <p className="noteforuser box-item">Hammer, your reservation has been confirmed! </p>

            </div>
          </div>
        </div>
      );
    }
    if (step === 0) {
      return (
        <div className="container">
          <div className="modal">
            <a className="close-modal" href="#">X</a>
            <h2 className="title-style">Confirm Reservation</h2>
            <div className="modal-detail">
              <div className="res-detail">
                <div className="detail-section">
                  <img className="res-img" src="https://media2.giphy.com/media/139UV14qWzeraE/giphy.gif" alt="" height="53" width="53" />

                </div>
                <div className="detail-section section-right">

                  <h2 className="title-style res-name">{restaurant.name}</h2>
                  <div className="edit-caption"><a className="linkinfoot">Edit Details</a></div>
                  <div className="res-item time-chosen">
                    <span className="svg-icon">
                      <i className="far fa-calendar-minus" />
                    </span>Wed, May 29 · 19:30</div>
                  <div className="res-item people-chosen">
                    <span className="svg-icon"><i className="fas fa-user-ninja" /></span>
                    3 guests
                  </div>
                </div>
              </div>
              <form className="form-detail">
                <div className="each-line">
                  <div className="input-detail">
                    <label>First Name</label>
                    <input />
                  </div>
                  <div className="input-detail">
                    <label>Last Name</label>
                    <input />
                  </div>
                </div>
                <div className="each-line">
                  <div className="input-detail">
                    <label>Email</label>
                    <input />
                  </div>
                  <div className="input-detail">
                    <label>Mobile Number</label>
                    <input />
                  </div>
                </div>
                <div className="input-detail">
                  <label>Notes (Optional)</label>
                  <input />
                </div>
              </form>
              <p className="tip">
                You’ll receive texts about your restaurant visit. By continuing below, you agree to Yelp’s
                <a href="#" className="linkinfoot">Terms of Service</a>
                and
                <a href="#" className="linkinfoot">Privacy Policy</a>
                .We’ll send your name, mobile number, and notes to the restaurant.
              </p>

              <p className="tip">
                <input type="checkbox" checked />
                Receive special offers and updates from Surisan
              </p>

              <button className="confirm-button" onClick={e => this.renderConfirmation(e)} type="button">Confirm Reservation</button>
            </div>

          </div>
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="review-append">
          <h4>Upcoming Reservations</h4>
          <div className="review-detail">May 29 · 19:30 · 3 people</div>
        </div>
      );
    }
  }
}

export default Modal;
