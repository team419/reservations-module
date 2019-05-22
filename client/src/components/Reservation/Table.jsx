import React from 'react';

const Table = () => (
  <div className="reservation-popup-date-picker js-reservation-popup-date-picker hidden">
    <div className="drop-menu-arrow">
    </div>
    <div className="goog-date-picker">

      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="goog-date-picker-head">
            <td colSpan="1">
              <button className="goog-date-picker-btn goog-date-picker-previousMonth" type="button">
                «
              </button>
            </td>
            <td colSpan="5" className="goog-date-picker-monthyear">
              May 2019
            </td>
            <td>
              <button className="goog-date-picker-btn goog-date-picker-nextMonth" type="button">
                »
              </button>
            </td>
          </tr>
        </thead>
        <tbody role="grid" tabIndex="0">
          <tr>
            <th></th>
            <th className="goog-date-picker-wday" role="columnheader">S</th>
            <th className="goog-date-picker-wday" role="columnheader">M</th>
            <th className="goog-date-picker-wday" role="columnheader">T</th>
            <th className="goog-date-picker-wday" role="columnheader">W</th>
            <th className="goog-date-picker-wday" role="columnheader">T</th>
            <th className="goog-date-picker-wday" role="columnheader">F</th>
            <th className="goog-date-picker-wday" role="columnheader">S</th>
          </tr>
          <tr>
            <th></th>
            <td id=":0" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":1" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":2" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":3" role="gridcell" className="goog-date-picker-date">1</td>
            <td id=":4" role="gridcell" className="goog-date-picker-date">2</td>
            <td id=":5" role="gridcell" className="goog-date-picker-date">3</td>
            <td id=":6" role="gridcell" className="goog-date-picker-date">4</td>
          </tr>
          <tr>
            <th></th>
            <td id=":7" role="gridcell" className="goog-date-picker-date">5</td>
            <td id=":8" role="gridcell" className="goog-date-picker-date">6</td>
            <td id=":9" role="gridcell" className="goog-date-picker-date">7</td>
            <td id=":10" role="gridcell" className="goog-date-picker-date">8</td>
            <td id=":11" role="gridcell" className="goog-date-picker-date">9</td>
            <td id=":12" role="gridcell" className="goog-date-picker-date">10</td>
            <td id=":13" role="gridcell" className="goog-date-picker-date">11</td>
          </tr>
          <tr>
            <th></th>
            <td id=":14" role="gridcell" className="goog-date-picker-date">12</td>
            <td id=":15" role="gridcell" className="goog-date-picker-date">13</td>
            <td id=":16" role="gridcell" className="goog-date-picker-date">14</td>
            <td id=":17" role="gridcell" className="goog-date-picker-date">15</td>
            <td id=":18" role="gridcell" className="goog-date-picker-date">16</td>
            <td id=":19" role="gridcell" className="goog-date-picker-date">17</td>
            <td id=":20" role="gridcell" className="goog-date-picker-date">18</td>
          </tr>
          <tr>
            <th></th>
            <td id=":21" role="gridcell" className="goog-date-picker-date">19</td>
            <td id=":22" role="gridcell" className="goog-date-picker-date">20</td>
            <td id=":23" role="gridcell" className="goog-date-picker-date">21</td>
            <td id=":24" role="gridcell" className="goog-date-picker-date">22</td>
            <td id=":25" role="gridcell" className="goog-date-picker-date">23</td>
            <td id=":26" role="gridcell" className="goog-date-picker-date">24</td>
            <td id=":27" role="gridcell" className="goog-date-picker-date">25</td>
          </tr>
          <tr className="goog-date-picker-last-week-of-month">
            <th></th>
            <td id=":28" role="gridcell" className="goog-date-picker-date">26</td>
            <td id=":29" role="gridcell" className="goog-date-picker-date">27</td>
            <td id=":30" role="gridcell" className="goog-date-picker-date">28</td>
            <td id=":31" role="gridcell" className="goog-date-picker-date">29</td>
            <td id=":32" role="gridcell" className="goog-date-picker-date">30</td>
            <td id=":33" role="gridcell" className="goog-date-picker-date">31</td>
            <td id=":34" role="gridcell" className="goog-date-picker-date"></td>
          </tr>
          {/* <tr>
            <th></th>
            <td id=":35" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":36" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":37" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":38" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":39" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":40" role="gridcell" className="goog-date-picker-date"></td>
            <td id=":41" role="gridcell" className="goog-date-picker-date"></td>
          </tr> */}
        </tbody>
        {/* <tfoot>
          <tr className="goog-date-picker-goot">
            <td colSpan="3" className="goog-date-picker-today-cont">
              <button className="goog-date-picker-btn goog-date-picker-today-btn" type="button">
                Today
              </button>
            </td>
            <td colSpan="3"></td>
            <td colSpan="2" className="goog-date-picker-none-cont">
              <button className="goog-date-picker-btn goog-date-picker-none-btn" type="button">
                None
              </button>
            </td>
          </tr>
        </tfoot> */}
      </table>
    </div>

  </div>
);

export default Table;
