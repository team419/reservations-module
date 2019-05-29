import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Reservation from './components/Reservation/Reservation.jsx';
import ReservationTop from './components/Reservation/ReservationTop.jsx';
import Order from './components/Order/Order.jsx';
import BusinessInfo from './components/BusinessInfo/BusinessInfo.jsx';
import Hours from './components/Hours/Hours.jsx';

import style1 from '../style/style.css';
import style2 from '../style/calendar.css';
import style3 from '../style/modal.css';
import style4 from '../style/table.css';
import style5 from '../style/sticky.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      resId: 1,
    };
  }

  componentDidMount() {
    const { resId } = this.state;
    axios.get(`http://127.0.0.1:5555/all/${resId}`)
      .then((data) => {
        this.setState({
          restaurant: (data.data)[0],
        });
        console.log('DATA: ', data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  topsticker() {
    const header = $(".reservations-sticky-bar");
    $(window).scroll(() => {
      const scroll = $(window).scrollTop();

      if (scroll >= 240) {
        header.removeClass('hidden');
      } else {
        header.addClass('hidden');
      }
    });
  }

  render() {
    const { restaurant } = this.state;
    if (restaurant) {
      console.log(restaurant);
      return (
        <div>
          {this.topsticker()}
          <ReservationTop />
          <div className="column column-beta sidebar">
            <h3>{restaurant.name}</h3>
            <Reservation restaurant={restaurant} />
            <Order />
            <BusinessInfo restaurant={restaurant} />
            <Hours restaurant={restaurant} />
          </div>
        </div>
      );
    }
    return '';
  }
}

ReactDOM.render(<App />, document.getElementById('hi'));
