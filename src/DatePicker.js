import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DatePicker = React.createClass({
  propTypes: {
    bounded: React.PropTypes.bool
  },
  render () {
    return (
      <div>
        <ReactDatePicker
          tetherConstraints={[]}
          filterDate={date => date.day() === 1}
          minDate={this.props.bounded ? moment('20170101') : null}
          maxDate={this.props.bounded ? moment('20171231') : null}
          openToDate={moment('20170424')}
          onChange={() => console.log('changed')}
        />
      </div>
    );
  }
});

export default DatePicker
