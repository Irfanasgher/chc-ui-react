import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { Form, Input, Slider } from 'antd';
import { getProductsByPrice } from '../../../../store/product/action';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };
    handleChangeRange(value) {
        this.setState({
            priceMin: value[0],
            priceMax: value[1],
        });
        const params = {
            price_gt: value[0],
            price_lt: value[1],
            _start: 1,
            _limit: 999,
        };
        // this.props.dispatch(getProductsByPrice(params));
    }

    render() {
        const { amount, cartItems, cartTotal } = this.props;
        return (
            <Form
                className="ps-form--checkout"
                onFinish={this.handleLoginSubmit}>
                <div className="ps-form__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-form__billing-info">
                                <h3 className="ps-form__heading mb-5">
                                    CHECKOUT
                                </h3>
                                <Slider
                                    range
                                    defaultValue={[0, 2000]}
                                    max={2000}
                                    onAfterChange={this.handleChangeRange.bind(this)}
                                />
                                <div className={'d-flex justify-content-between'}>
                                    <p>Shiping Details</p>
                                    <p>Billing Details</p>
                                </div>
                                <h5 className={'mt-4'}>Type of Address</h5>
                                <div className={'row'}>
                                    <div className={'col-sm-6'}>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Name"
                                                name="name"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter an email or mobile phone number!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Personal"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="form-group">*/}
                                {/*    <div className="ps-checkbox">*/}
                                {/*        <input*/}
                                {/*            className="form-control"*/}
                                {/*            type="checkbox"*/}
                                {/*            id="keep-update"*/}
                                {/*        />*/}
                                {/*        <label htmlFor="keep-update">*/}
                                {/*            Keep me up to date on news and*/}
                                {/*            exclusive offers?*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<h3 className="ps-form__heading">*/}
                                {/*    Shipping address*/}
                                {/*</h3>*/}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>First Name</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="First Name"
                                                name="firstName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your first name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Last Name</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Last Name"
                                                name="lastName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your last name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>Street Address</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="First Name"
                                                name="firstName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your first name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Area</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Last Name"
                                                name="lastName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your last name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>Qty</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="First Name"
                                                name="firstName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your first name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Phone Number</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Last Name"
                                                name="lastName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your last name!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                <div className={'row'}>
                                    <div className="col-sm-6">
                                        <h5>Delivery Instructions:</h5>
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Last Name"
                                                name="lastName"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Enter your last name!',
                                                    },
                                                ]}>
                                                <textarea
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                {/*<div className="form-group">*/}
                                {/*    <Form.Item*/}
                                {/*        name="address"*/}
                                {/*        rules={[*/}
                                {/*            {*/}
                                {/*                required: false,*/}
                                {/*                message: 'Enter an address!',*/}
                                {/*            },*/}
                                {/*        ]}>*/}
                                {/*        <Input*/}
                                {/*            className="form-control"*/}
                                {/*            type="text"*/}
                                {/*            placeholder="Address"*/}
                                {/*        />*/}
                                {/*    </Form.Item>*/}
                                {/*</div>*/}
                                {/*<div className="form-group">*/}
                                {/*    <Form.Item*/}
                                {/*        name="apartment"*/}
                                {/*        rules={[*/}
                                {/*            {*/}
                                {/*                required: false,*/}
                                {/*                message: 'Enter an Apartment!'*/}

                                {/*            },*/}
                                {/*        ]}>*/}
                                {/*        <Input*/}
                                {/*            className="form-control"*/}
                                {/*            type="text"*/}
                                {/*            placeholder="Apartment, suite, etc. (optional)"*/}
                                {/*        />*/}
                                {/*    </Form.Item>*/}
                                {/*</div>*/}
                                {/*<div className="row">*/}
                                {/*    <div className="col-sm-6">*/}
                                {/*        <div className="form-group">*/}
                                {/*            <Form.Item*/}
                                {/*                name="city"*/}
                                {/*                rules={[*/}
                                {/*                    {*/}
                                {/*                        required: false,*/}
                                {/*                        message: 'Enter a city!',*/}
                                {/*                    },*/}
                                {/*                ]}>*/}
                                {/*                <Input*/}
                                {/*                    className="form-control"*/}
                                {/*                    type="city"*/}
                                {/*                    placeholder="City"*/}
                                {/*                />*/}
                                {/*            </Form.Item>*/}

                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-sm-6">*/}
                                {/*        <div className="form-group">*/}
                                {/*            <Form.Item*/}
                                {/*                name="postalCode"*/}
                                {/*                rules={[*/}
                                {/*                    {*/}
                                {/*                        required: false,*/}
                                {/*                        message: 'Enter a postal oce!',*/}
                                {/*                    },*/}
                                {/*                ]}>*/}
                                {/*                <Input*/}
                                {/*                    className="form-control"*/}
                                {/*                    type="postalCode"*/}
                                {/*                    placeholder="Postal Code"*/}
                                {/*                />*/}
                                {/*            </Form.Item>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="form-group">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                    {/*<div className="ps-checkbox">*/}
                                    {/*    <input*/}
                                    {/*        className="form-control"*/}
                                    {/*        type="checkbox"*/}
                                    {/*        id="keep-update"*/}
                                    {/*    />*/}
                                    {/*    <label htmlFor="keep-update">*/}
                                    {/*        Save this information for next time*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="ps-form__submit">
                                    {/*<Link href="/account/cart">*/}
                                    {/*    <a>*/}
                                    {/*        <i className="icon-arrow-left mr-2"></i>*/}
                                    {/*        Return to shopping cart*/}
                                    {/*    </a>*/}
                                    {/*</Link>*/}
                                    <div className="ps-block__footer">
                                        <button className="ps-btn">
                                            CONTINUE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                {/*<h3>Your order</h3>*/}
                                <div className="ps-block--checkout-order">
                                    <div className="ps-block__content">
                                        <figure>
                                            <figcaption>
                                                <strong>Summary</strong>
                                                {/*<strong>total</strong>*/}
                                            </figcaption>
                                        </figure>
                                        {/*<figure className="ps-block__items">*/}
                                        {/*    {cartItems &&*/}
                                        {/*    cartItems.map(product => (*/}
                                        {/*        <Link*/}
                                        {/*            href="/"*/}
                                        {/*            key={product.id}>*/}
                                        {/*            <a>*/}
                                        {/*                <strong>*/}
                                        {/*                    {product.title}*/}
                                        {/*                    <span>*/}
                                        {/*                            x*/}
                                        {/*                        {*/}
                                        {/*                            product.quantity*/}
                                        {/*                        }*/}
                                        {/*                        </span>*/}
                                        {/*                </strong>*/}
                                        {/*                <small>*/}
                                        {/*                    $*/}
                                        {/*                    {product.quantity **/}
                                        {/*                    product.price}*/}
                                        {/*                </small>*/}
                                        {/*            </a>*/}
                                        {/*        </Link>*/}
                                        {/*    ))}*/}
                                        {/*</figure>*/}
                                        <figure>
                                            <figcaption>
                                                <small>Price (4 items)</small>
                                                <strong>US 128.60</strong>
                                            </figcaption>
                                        </figure>
                                        <figure>
                                            <figcaption>
                                                <small>Delivery Charge</small>
                                                <strong>US 15.00</strong>
                                            </figcaption>
                                        </figure>
                                        {/*<figure>*/}
                                            <div className={'d-flex justify-content-between'}>
                                                <h5>Total</h5>
                                                <strong>US 128.60</strong>
                                            </div>
                                        {/*</figure>*/}

                                        {/*<figure className="ps-block__shipping">*/}
                                        {/*    <h3>Shipping</h3>*/}
                                        {/*    <p>Calculated at next step</p>*/}
                                        {/*</figure>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }
}

export default FormCheckoutInformation;
