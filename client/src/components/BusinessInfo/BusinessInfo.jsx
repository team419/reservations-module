import React from 'react';

class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="island summary">
        <div className="make-reservation-form-container">
          <ul className="iconed-list">
            <li>
              <div className="iconed-list-avatar">
                <span className="svg-icon">
                  <i className="far fa-clock" />
                </span>
              </div>
              <div className="iconed-list-story">
                <dl className="short-def-list">
                  <dt className="attribute-key">Today</dt>
                  <dd>
                    <strong className="u-space-r-half">
                      <span className="nowrap">8:00 am</span>
                      -
                      <span className="nowrap">2:30 pm</span>
                      <br />
                      <span className="nowrap">5:00 pm</span>
                      -
                      <span className="nowrap">10:00 pm</span>
                    </strong>
                    <span className="nowrap extra open">Open now</span>
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
}

export default BusinessInfo;
