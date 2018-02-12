import React from 'react'
import { reduxForm } from 'redux-form'
import axios from 'axios'
import { RegisterContainer } from '../../component/register/register-container'
import { RegisterForm } from '../../component/register/register-form'

class Register extends React.Component {
    constructor(){
        super() 
        this.state = {
            isLoading: false,
            errorMessage:null
        }
    }

    componentWillMount() {
        if(localStorage.getItem("token")) {
            this.props.router.push('/income/add')
        }
    }


    onSubmit = ({email, password, fname, lname}) => {
        //this.fileUpLoad(image)
        this.setState({
            isLoading: true,
        })
        axios.post('https://backendjack.herokuapp.com/v1/register', { 
            email, 
            password,
            fname,
            lname,
         })
        .then(response => {
            this.setState({
                isLoading:false
            })

            if(!response.data.status) {
                this.setState({
                    errorMessage: response.data.message
                })
            }else {
                this.props.router.push('/')
            }


        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        })
    }
    render() {
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
                                isLoading={this.state.isLoading}
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

export default reduxForm(formConfiguration)(Register)