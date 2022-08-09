import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login, register } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import ApiCall from '../../../confiig/network';
import Url from '../../../confiig/api';
import { config } from '../../../confiig/env';
const initialState = {
    password: '',
    email: '',
    loading: false
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
        return false;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleLoginSubmit =async (values) => {
        this.setState({ loading: true })
        let response = await ApiCall.post(Url.LOGIN_USER, {
            email: values.email,
            password: values.password,
        }, await config());
     // return    console.log(response)
        if(response.status === 200){
            this.props.dispatch(login());
            localStorage.setItem('userToken', response.data.user.token);
            localStorage.setItem('currentUser', JSON.stringify(response.data.user));
            Router.push('/');
            this.setState({ loading: false });
        }else {
            this.setState({ loading: false })
        }

    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        const {password, email, loading} = this.state;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleLoginSubmit.bind(this)}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
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
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
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
                                {/*<div className="form-group">*/}
                                {/*    <div className="ps-checkbox">*/}
                                {/*        <input*/}
                                {/*            className="form-control"*/}
                                {/*            type="checkbox"*/}
                                {/*            id="remember-me"*/}
                                {/*            name="remember-me"*/}
                                {/*        />*/}
                                {/*        <label htmlFor="remember-me">*/}
                                {/*            Rememeber me*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth mb-4">
                                        {loading? <React.Fragment>
                                            <span className="spinner-border spinner-border-lg mr-2" role="status"
                                                  aria-hidden="true"/>
                                            Loading...
                                        </React.Fragment> : <span>
                                            Login
                                        </span>}
                                    </button>
                                </div>
                            </div>
                            {/*<div className="ps-form__footer">*/}
                            {/*    <p>Connect with:</p>*/}
                            {/*    <ul className="ps-list--social">*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                className="facebook"*/}
                            {/*                href="#"*/}
                            {/*                onClick={e =>*/}
                            {/*                    this.handleFeatureWillUpdate(e)*/}
                            {/*                }>*/}
                            {/*                <i className="fa fa-facebook"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                className="google"*/}
                            {/*                href="#"*/}
                            {/*                onClick={e =>*/}
                            {/*                    this.handleFeatureWillUpdate(e)*/}
                            {/*                }>*/}
                            {/*                <i className="fa fa-google-plus"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                className="twitter"*/}
                            {/*                href="#"*/}
                            {/*                onClick={e =>*/}
                            {/*                    this.handleFeatureWillUpdate(e)*/}
                            {/*                }>*/}
                            {/*                <i className="fa fa-twitter"></i>*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                className="instagram"*/}
                            {/*                href="#"*/}
                            {/*                onClick={e =>*/}
                            {/*                    this.handleFeatureWillUpdate(e)*/}
                            {/*                }>*/}
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
export default connect(mapStateToProps)(Login);
