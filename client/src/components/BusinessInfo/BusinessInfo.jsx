import React from 'react';
import $ from 'jquery';

class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res_id: 1,
      status: 'close',
    };
  }

  componentDidMount() {
    this.openStatus();
  }

  openStatus() {
    const { restaurant } = this.props;
    if (restaurant) {
      const today = new Date();
      const rightnow = today.getHours();
      const amOpentime = restaurant.hours.morning.opentime;
      const amClosetime = restaurant.hours.morning.closetime;
      const pmOpentime = restaurant.hours.afternoon.opentime;
      const pmClosetime = restaurant.hours.afternoon.closetime;
      const inRange = (rightnow <= amClosetime && rightnow >= amOpentime) || (rightnow <= pmClosetime && rightnow >= pmOpentime);
      if (inRange) {
        this.setState({
          status: 'open',
        });
      } else {
        this.setState({
          status: 'close',
        });
      }
    }
  }

  renderStatus() {
    if (this.state.status === "close") {
      $('span.color-clock').addClass('close-status');
      return <span className="close-status">Closed now</span>;
    } else if (this.state.status === "open") {
      $('span.color-clock').addClass('open-status');
      return <span className="open-status">Open now</span>;
    }
  }

  render() {
    const { restaurant } = this.props;

    if (restaurant) {
      return (
        <div className="island summary">
          <div className="make-reservation-form-container">
            <ul className="iconed-list">
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon color-clock">
                    <i className="far fa-clock" />
                  </span>
                </div>
                <div className="iconed-list-story">
                  <dl className="short-def-list">
                    <dt className="attribute-key">Today</dt>
                    <dd>
                      <strong className="u-space-r-half">
                        <span className="nowrap">{`${restaurant.hours.morning.opentime}:00`}</span>
                        {' - '}
                        <span className="nowrap">{`${restaurant.hours.morning.closetime}:00`}</span>
                        <br />
                        <span className="nowrap">{`${restaurant.hours.afternoon.opentime}:00`}</span>
                        {' - '}
                        <span className="nowrap">{`${restaurant.hours.afternoon.closetime}:00`}</span>
                      </strong>
                      <span className="nowrap extra">{this.renderStatus()}</span>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon">
                    <i className="fas fa-utensils" />
                  </span>
                </div>
                <div className="iconed-list-story">
                  <b><a className="menu-explore js-menu-explore" href="/menu/surisan-san-francisco">Full menu</a></b>
                </div>
              </li>
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon">
                    <i className="fas fa-dollar-sign" />
                  </span>
                </div>
                <div className="iconed-list-story">
                  <dl className="short-def-list">
                    <dt className="attribute-key">Price range</dt>
                    <dd className="nowrap price-description"><b>$11-30</b></dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon">
                    <i className="far fa-plus-square" />
                  </span>
                </div>
                <div className="iconed-list-story">
                  <div className="health-score-info">
                    <dl className="short-def-list">
                      <dt className="attribue-key">
                        <b>
                          <a href="/inspections/surisan-san-francisco">Health Score</a>
                        </b>
                      </dt>
                      <dd className="nowrap health-score-description">
                        96 out of 100
                    </dd>
                      <br />
                      <dt className="nowrap u-text-subtle score-attribution">
                        Powered by HDScores
                    </dt>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return '';
  }
}

export default BusinessInfo;
