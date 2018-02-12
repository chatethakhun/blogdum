import React from 'react'
import { LoginForm } from '../../component/login/login-form'
import {
    LoginContainer,
    LoginBox
} from '../../theme/login'
import { reduxForm } from 'redux-form'
import axios from 'axios'
import { Link} from "react-router"
import { PRODUCT_ENDPOINT,TOKEN } from '../../constant/apollo/constant'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            errorMessage: null
        }
    }
    componentWillMount() {
        if(localStorage.getItem('token')) {
            this.props.router.push('/profile')
        }
    }
    onSubmit = ({ email, password }) => {
        this.setState({
            isLoading: true
        })
        axios.post( PRODUCT_ENDPOINT +'v1/auth', { email: email, password: password })
            .then(response => {
                this.setState({
                    isLoading: false
                })
                if (response.data.status === 200) {
                    localStorage.setItem('token', response.data.token)
                        window.location.reload()
                        this.props.router.push('/profile')

                }
                if(response.data.status === 401) {
                    this.setState({
                        errorMessage: response.data.message
                    })
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })
    }

    render() {
        const { handleSubmit } = this.props
        console.log(this)
        return (
            <LoginContainer>
                <LoginBox>
                    <div>
                        <h1>Member Login</h1>
                    </div>
                    <LoginForm
                        onSubmit={this.onSubmit}
                        handleSubmit={handleSubmit}
                        disabledButton={this.state.disabledButton}
                        errorMessage={this.state.errorMessage}
                        isLoading={this.state.isLoading}
                    />
                    <div>
                        <Link to='/register'>Register Now!</Link>
                    </div>
                </LoginBox>
            </LoginContainer>
        )
    }
}

const formConfiguration = {
    form: 'login-form'
}

export default reduxForm(formConfiguration)(Login)
// export default connect(null, mapDispatchToProps)(reduxForm(formConfiguration
// )(Login));


