import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { register } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import ApiCall from '../../../confiig/network';
import Url from '../../../confiig/api';
import {config} from '../../../confiig/env';
const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    email: '',
    loading: false
}
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    componentDidMount() {
        if (localStorage.userToken){
            Router.push('/');
        }
    }

    handleSubmit = async (values) => {
        let validation = this.handleValidations()
        if(validation.status){
             this.setState({ loading: true })
            let response = await ApiCall.post(Url.REGISTER_USER, {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                password: values.password,
                phone: values.phone,
                password_confirmation: values.confirmPassword,
            }, await config());
            if(response.status === 200){
                this.props.dispatch(register());
                localStorage.setItem('userToken', response.data.user.token);
                localStorage.setItem('currentUser', JSON.stringify(response.data.user));
                Router.push('/');
                this.setState({ loading: false });
                return  notification['success']({
                    message: 'Error',
                    description: `${response.data.user.first_name} ${response.data.user.last_name}  Registered Successfully`,
                    duration: 2
                });
            }else {
                this.setState({ loading: false })
            }

        }else{
            return  notification['error']({
                 message: 'Error',
                 description: validation.message,
                duration: 2
             });
        }

    };
    handleValidations = () => {
        const { firstName, lastName, phone, password, confirmPassword, email } = this.state;
        let firstNameValidation = {
            message: 'First Name Is Required',
            status: false
        };
        let lastNameValidation = {
            message: 'Last Name Is Required',
            status: false
        };
        let phoneValidation = {
            message: 'Phone Is Required',
            status: false
        };
        let emailValidation = {
            message: 'Email Is Required',
            status: false
        };
        let passwordValidation = {
            message: 'Password Is Required',
            status: false
        };
        let confirmPasswordValidation = {
            message: 'Confirm Password Is Required',
            status: false
        };
        let passwordLengthValidation = {
            message: 'Password Must Be Greater Than 8 Characters',
            status: false
        };
        let passwordCompareValidation = {
            message: 'Password & Confirm Password Does Not Match',
            status: false
        };
        let passed = {
            status: true
        };
        return firstName !== ''?
            lastName === ""? lastNameValidation :
                email === ""? emailValidation :
                    phone === ""? phoneValidation :
                        password === ""? passwordValidation :
                            confirmPassword === ""? confirmPasswordValidation :
                                password.legth< 8?  passwordLengthValidation :
                                password !== confirmPassword? passwordCompareValidation :
                passed
            : firstNameValidation
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        const {firstName, lastName, phone, password, confirmPassword, email, loading} = this.state;
        return (
            <div className="ps-my-account" style={{minHeight: '110vh'}}>
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleSubmit}>
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Register An Account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your first name!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            value={firstName}
                                            name='firstName'
                                            onChange={this.handleInputChange}
                                            placeholder="First Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your last name!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            value={lastName}
                                            name='lastName'
                                            onChange={this.handleInputChange}
                                            placeholder="Last Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your email!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            value={email}
                                            name='email'
                                            onChange={this.handleInputChange}
                                            placeholder="Email address"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter phone!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            value={phone}
                                            name='phone'
                                            onChange={this.handleInputChange}
                                            placeholder="Phone Number"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Password is required!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            value={password}
                                            name='password'
                                            onChange={this.handleInputChange}
                                            placeholder="Password..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="confirmPassword"
                                        rules={[
                                            {
                                                required: true,
                                                messagePassword:
                                                    'Confirm Password is required!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            value={confirmPassword}
                                            name='confirmPassword'
                                            onChange={this.handleInputChange}
                                            placeholder="Confirm Password..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        disabled={loading}
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth mb-4">
                                        {loading? <React.Fragment>
                                            <span className="spinner-border spinner-border-lg mr-2" role="status"
                                                  aria-hidden="true"/>
                                            Loading...
                                        </React.Fragment> : <span>
                                            Register
                                        </span>}
                                    </button>
                                </div>
                            </div>
                            {/*<div className="ps-form__footer">*/}
                            {/*    <p>Connect with:</p>*/}
                            {/*    <ul className="ps-list--social">*/}
                            {/*        <li>*/}
                            {/*            <a className="facebook" href="#">*/}
                            {/*                <i className="fa fa-facebook"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a className="google" href="#">*/}
                            {/*                <i className="fa fa-google-plus"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a className="twitter" href="#">*/}
                            {/*                <i className="fa fa-twitter"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a className="instagram" href="#">*/}
                            {/*                <i className="fa fa-instagram"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
