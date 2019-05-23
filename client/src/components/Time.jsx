import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <select>
        <option value="2">2 people</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
        <option value="5">5 people</option>
        <option value="6">6 people</option>
        <option value="7">7 people</option>
        <option value="8">8 people</option>
        <option value="9">9 people</option>
        <option value="10">10 people</option>
      </select>
    );
  }
}

export default Time;
