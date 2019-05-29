import React from 'react';
import $ from 'jquery';

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'close',
    };
  }

  componentDidMount() {
    this.openStatus();
  }


  addOpenNow(i, todayDay) {
    if (i === (todayDay - 1)) {
      return (
        <span className="extra">
          {this.renderStatus()}
        </span>
      );
    }
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
      // console.log('inRange', inRange);
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

  renderHoursTable() {
    const { restaurant } = this.props;
    const today = new Date();
    const todayDay = today.getDay();

    if (restaurant) {
      const table = [];
      const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      for (let i = 0; i < 7; i++) {
        table.push(
          <tr>
            <th scope="row">{weekdays[i]}</th>
            <td>
              <span className="nowrap">{`${restaurant.hours.morning.opentime}:00`}</span>
              -
          <span className="nowrap">{`${restaurant.hours.morning.closetime}:00`}</span>
              <br />
              <span className="nowrap">{`${restaurant.hours.afternoon.opentime}:00`}</span>
              -
          <span className="nowrap">{`${restaurant.hours.afternoon.closetime}:00`}</span>
            </td>
            {this.addOpenNow(i, todayDay)}
          </tr>
        )
      }
      return table;
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
    return (
      <div className="bordered-rail">
        <div className="ywidget biz-hours">
          <h3>Hours</h3>
          <table className="table table-simple hours-table">
            <tbody>
              {this.renderHoursTable()}
            </tbody>
          </table>
          <a href="/biz_attribute?biz_id=i09UMzccKgyLwGYKDVP28w">
            <span className="svg-icon">
              <i className="fas fa-pencil-alt" />
            </span>
            Edit business info
          </a>

        </div>
        <div className="ywidget">
          <h3>More business info</h3>
          <ul className="ylist">
            <li>
              <div className="short-def-list">
                <dl>
                  <dt className="attribute-key">
                    High Chairs
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>
                <dl>
                  <dt className="attribute-key">
                    Vegan Options
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>
                <dl>
                  <dt className="attribute-key">
                    Happy Hour Specials
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>
                <dl>
                  <dt className="attribute-key">
                    Kids Menu
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>


                <dl>
                  <dt className="attribute-key">
                    Takes Reservations
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Delivery
                  </dt>
                  <dd>
                    No
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Take-out
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Accepts Credit Cards
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Accepts Apple Pay
                  </dt>
                  <dd>
                    No
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Accepts Google Pay
                  </dt>
                  <dd>
                    No
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Good For
                  </dt>
                  <dd>
                    Breakfast, Brunch, Lunch
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Parking
                  </dt>
                  <dd>
                    Street
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Bike Parking
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Wheelchair Accessible
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Good for Kids
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Good for Groups
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Ambience
                  </dt>
                  <dd>
                    Casual, Trendy, Classy
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Noise Level
                  </dt>
                  <dd>
                    Average
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Alcohol
                  </dt>
                  <dd>
                    Beer & Wine Only
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Good For Happy Hour
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Outdoor Seating
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Wi-Fi
                  </dt>
                  <dd>
                    Free
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Has TV
                  </dt>
                  <dd>
                    No
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Waiter Service
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

                <dl>
                  <dt className="attribute-key">
                    Caters
                  </dt>
                  <dd>
                    Yes
                  </dd>
                </dl>

              </div>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Hours;

