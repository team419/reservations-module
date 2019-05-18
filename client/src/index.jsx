import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar.jsx';
import Time from './components/Time.jsx';
import People from './components/People.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="island-item">
        <h3>Make a Reservation</h3>
        <form className="reservation-availability-search-form">
          <ul>
            <li><Calendar /></li>
            <li><Time /></li>
            <li><People /></li>
          </ul>
          <button type="submit">Find a Table</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('hi'));
