import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './components/Reservation/Reservation.jsx';
import ReservationSticky from './components/Reservation/ReservationSticky.jsx';
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
      <div className="column column-beta sidebar">
        <Reservation />
        <ReservationSticky />
        <Order />
        <BusinessInfo />
        <Hours />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('hi'));
