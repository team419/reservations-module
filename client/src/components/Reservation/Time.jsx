import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { restaurant } = this.props;

    if (restaurant) {
      const renderTimeSlot = () => {
        console.log('restaurant: ', restaurant);
        const amOpenTime = restaurant.hours.morning.opentime;
        const amCloseTime = restaurant.hours.morning.closetime;
        const pmOpenTime = restaurant.hours.afternoon.opentime;
        const pmCloseTime = restaurant.hours.afternoon.closetime;
        const amtimeLength = (amCloseTime - amOpenTime);
        const pmtimeLength = (pmCloseTime - pmOpenTime);
        const slotList = [];
        for (let i = 0; i < amtimeLength; i++) {
          slotList.push(<option value={`${amOpenTime}00`}>{`${amOpenTime + i}:00`}</option>);
          slotList.push(<option value={`${amOpenTime}30`}>{`${amOpenTime + 1}:30`}</option>);
        }
        for (let i = 0; i < pmtimeLength; i++) {
          slotList.push(<option value={`${pmOpenTime}00`}>{`${pmOpenTime + i}:00`}</option>);
          slotList.push(<option value={`${pmOpenTime}30`}>{`${pmOpenTime + i}:00`}</option>);
        }
        return slotList;
      };

      return (
        <li className="time-picker yform">
          <span className="svg-icon"><i className="far fa-clock" /></span>
          <select className="reservation-input">
            {renderTimeSlot()}
          </select>
          <span className="yselect_arrow"><i className="fas fa-caret-down" /></span>
        </li>
      );
    }
    return '';
  }
}

export default Time;
