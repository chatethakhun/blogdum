import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import RegisterForm from '../../component/register/register-form'


class EditProfile extends React.Component {
    onSubmit = () => {

    }
    render(){
        console.log( ' edit profile props' , this.props)
        return (
            <div>
                <RegisterForm 
                    handleSubmit={this.props.handleSubmit}
                    onSubmit={this.onSubmit}
                    defaultValue = {this.props.me}
                    />
            </div>
        )
    }
}

const formConfiguration = {
    form: 'edit-form'
}

const mapStateToProps = (state) => ({
    me: state.me
})

export default connect(mapStateToProps, null)(reduxForm(formConfiguration)(EditProfile))


// InitializeFromStateForm = reduxForm({
//     form: 'initializeFromState' // a unique identifier for this form
//   })(InitializeFromStateForm)
  
//   // You have to connect() to any reducers that you wish to connect to yourself
//   InitializeFromStateForm = connect(
//     state => ({
//       initialValues: state.account.data // pull initial values from account reducer
//     }),
//     { load: loadAccount } // bind account loading action creator
//   )(InitializeFromStateForm)
  
//   export default InitializeFromStateForm