import React from "react"
import DatePicker from "react-datepicker"
import moment from "moment"
import 'react-datepicker/dist/react-datepicker.css'
import { DatepickerContainer } from "../../theme/common/datepicker/date-picker-theme";

export default class Datepicker extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultDate: moment()
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (date) => {
    this.setState({
      defaultDate: date
    })
  }

  render() {
    console.log('props datepicker ====> ', this.props)
    return (
      <DatepickerContainer>
        <DatePicker 
          selected={this.state.defaultDate} 
          onChange={this.handleChange}
          //placeholderText="&#61447;""
          dateFormat="DD/MM/YYYY"
          />
          <i className="far fa-calendar-alt"></i>
      </DatepickerContainer>
    );
  }
}
