import React from 'react'
import { reduxForm } from 'redux-form'
import { connect }  from 'react-redux'
import { RegisterContainer } from '../../component/register/register-container'
import RegisterForm from '../../component/register/register-form'
import { bindActionCreators } from "redux";
import { register } from '../../action/login'
import { SET_INITTAIL,
         REQUEST_FETCH_SERVER } from '../../constant/redux/constant'

class Register extends React.Component {
    constructor(){
        super() 
        this.state = {
            isLoading: false,
            errorMessage:''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillMount() {
        this.props.dispatch({
            type:SET_INITTAIL
        })
        if(localStorage.getItem('token')) {
            this.props.router.push('/income/add')
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextporop ==========> ', nextProps.registerProps.errorMessage)
        if (nextProps.registerProps.errorMessage !== null) {
            console.log('enter')
          this.setState({
            errorMessage: nextProps.registerProps.errorMessage,
          })
        }
      }

    onSubmit = ({email, password, fname, lname}) => {
        this.props.dispatch({
            type: REQUEST_FETCH_SERVER
        })
        this.props.register({email, password, fname, lname})
    }
    render() {
        console.log('STATE FROM REDUCER', this.props.registerProps)
        return (
            <RegisterContainer>
                <div>
                    <div className="image-intro">
                    </div>
                    <div className="register-form">
                        <div className="intro-register">
                            <div>
                                <h2>Register</h2>
                            </div>
                            <div>
                                <p>
                                    Don't have an account?. <span>Create your account.</span> It takes less than a minute
                                </p>
                            </div>
                        </div>
                        <div className="form">
                            <RegisterForm
                                onSubmit={(data) => this.onSubmit(data)}
                                handleSubmit={this.props.handleSubmit}
                                errorMessage={this.state.errorMessage}
                                isLoading={this.props.registerProps.isLoading}
                                 />
                        </div>
                    </div>
                </div>
            </RegisterContainer>
        )
    }
}
const formConfiguration = {
    form: 'register-form'
}

const mapDispatchToProps = (
    dispatch //use when use asycn in action
  ) =>
    bindActionCreators(
      {
        register
      },
      dispatch
    );
const mapStateToProps = (state) => ({
    registerProps: state.login
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfiguration)(Register))