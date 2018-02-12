import React from "react";
import { IncomeContainer } from "../../theme/income/income-theme";

import { Field } from "redux-form";
import Datepicker from "../../component/common/datepicker";
import numeral from 'numeral'

const required = value => (value ? undefined : "Required");

class TextFieldPrice extends React.Component {
  constructor() {
    super()
    this.state = ({
      defaultText: '',
      blank: false
    })
  }

  handleValue = (event) => {
    this.setState({
      defaultText: event.target.value
    })
  }

  handleBlur = (event) => {
    const price = parseInt(event.target.value) 
    if(price  && price > 0 ) {
      this.setState({
        defaultText: numeral(price).format('0,0') + ' BAHT',
        blank: false
      })
    }
    else{
      this.setState({
        blank: true
      })
    }
  }

  render(){
    console.log('text fiels props ===>', this.props.meta.touched)
    return (
      <div>
        <input {...this.props.input} 
                placeholder={this.props.label} 
                type={this.props.type} 
                value={this.state.defaultText}
                onChange={this.handleValue.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                />
                { this.state.blank && <span>{this.props.meta.error}</span>}
      </div>
    )
  }
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

// const renderFieldWithoutValidate = ({ input, label, type }) => (
//   <div>
//     <input {...input}  placeholder={label} type={type}/>
//   </div>
// )

const renderTextArea = ({
  textarea,
  label,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <textarea {...textarea} placeholder={label} rows="10" cols="40" />
    </div>
  </div>
);

export const Income = ({ children, otherProps }) => (
  <IncomeContainer>{children}</IncomeContainer>
);

export const AddIncomeForm = ({
  onSubmit,
  handleSubmit,
  disabledButton,
  errorMessage
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="date">
      <h3>Date</h3>
      <hr />
      <Datepicker placeholder="Select Date" />
    </div>
    <div className="income">
      <h3>Income</h3>
      <hr />
      <div>
        <Field
          name="indetail"
          component={renderField}
          label="&#xf249;  Description"
          type="text"
          validate={[required]}
        />

        <Field
          name="inamounet"
          component={TextFieldPrice}
          label="&#xf3d1; Price"
          type="text"
          validate={[required]}
          value=''
        />
      </div>
    </div>
    <div className="income">
      <h3>Outcome</h3>
      <hr />
      <div>
        <Field
          name="outdetail"
          component={renderField}
          label="&#xf249;  Description"
          type="text"
          placeholder="Description"
          validate={[required]}
        />

        <Field
          name="outamounet"
          component={TextFieldPrice}
          label="&#xf3d1; Price"
          type="text"
          placeholder="Amount"
          validate={[required]}
        />
      </div>
    </div>

    <div className="note">
      <h3>Note</h3>
      <hr />
      <Field
        name="note"
        component={renderTextArea}
        label="Note"
        type="text"
        placeholder="Note"
        validate={[required]}
      />
    </div>

    <button type="submit" disabled={disabledButton}>
      Add
    </button>
    {errorMessage && <p>{errorMessage}</p>}
  </form>
);
