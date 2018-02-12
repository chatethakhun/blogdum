import React from 'react'
import { Income, AddIncomeForm } from '../../component/income/income'
import { reduxForm } from 'redux-form'

class AddIncome extends React.Component {
    onSubmit= (event, data) => {
        event.preventDefault()
        console.log('data from submit ====>', data)
    }
    render() {
        return (
            <Income>
                <div className="add-box">
                    <div>
                        <h1>Add Income</h1>
                    </div>
                    <AddIncomeForm  
                    handleSubmit={this.props.handleSubmit}
                    onSubmit={this.onSubmit}
                                   />
                </div>
            </Income>
        )
    }
}

const formConfiguration = {
    form: 'add-form'
}

export default reduxForm(formConfiguration)(AddIncome)