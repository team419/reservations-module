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
          slotList.push(<option value={`${amOpenTime}30`}>{`${amOpenTime + i}:30`}</option>);
        }
        for (let i = 0; i < pmtimeLength; i++) {
          slotList.push(<option value={`${pmOpenTime}00`}>{`${pmOpenTime + i}:00`}</option>);
          slotList.push(<option value={`${pmOpenTime}30`}>{`${pmOpenTime + i}:30`}</option>);
        }
        return slotList;
      };

      return (
        <li className="time-picker yform">
          <span className="svg-icon">
            <svg className="svg-18">
              <path d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.223 10.098a.998.998 0 0 1-.588-.192L8 9.256V5a1 1 0 0 1 2 0v3.24l2.812 2.05a1 1 0 0 1-.59 1.808z">
              </path>
            </svg>
          </span>
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
