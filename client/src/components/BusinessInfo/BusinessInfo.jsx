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

  outputStatus() {
    if (this.state.status === "close") {
      $('svg.color-clock').addClass('close-status');
      return <span className="close-status">Closed now</span>;
    } else if (this.state.status === "open") {
      $('svg.color-clock').addClass('open-status');
      return <span className="open-status">Open now</span>;
    }
  }

  render() {
    const { restaurant } = this.props;

    if (restaurant) {
      return (
        <div className="island summary">
          <div className="make-reservation-form-container">
            <ul className="ulelement iconed-list">
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon">
                  <svg className="svg-24 color-clock"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3 11c-.19 0-.384-.055-.555-.168L11 12.535V7a1 1 0 0 1 2 0v4.465l2.555 1.703A1 1 0 0 1 15 15z"></path></svg>
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
                      <span className="nowrap extra">{this.outputStatus()}</span>
                    </dd>
                  </dl>
                </div>
              </li>
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon">
                    <svg className="svg-24"><path d="M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z"></path></svg>
                  </span>
                </div>
                <div className="iconed-list-story">
                  <b><a className="atag menu-explore js-menu-explore" href="/menu/surisan-san-francisco">Full menu</a></b>
                </div>
              </li>
              <li>
                <div className="iconed-list-avatar">
                  <span className="svg-icon">
                    <span className="price-range">$$$$</span>
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
                    <svg className="svg-24">
                      <path d="M15 9V4H9v5H4v6h5v5h6v-5h5V9h-5z"></path>
                    </svg>
                  </span>
                </div>
                <div className="iconed-list-story">
                  <div className="health-score-info">
                    <dl className="short-def-list">
                      <dt className="attribue-key">
                        <b>
                          <a href="/inspections/surisan-san-francisco" className="atag">Health Score</a>
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
