import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './components/Reservation/Reservation.jsx';
import ReservationTop from './components/Reservation/ReservationTop.jsx';
import Order from './components/Order/Order.jsx';
import BusinessInfo from './components/BusinessInfo/BusinessInfo.jsx';
import Hours from './components/Hours/Hours.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {/* <ReservationTop /> */}
        <div className="column column-beta sidebar">
          <Reservation />
          <Order />
          <BusinessInfo />
          <Hours />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('hi'));
