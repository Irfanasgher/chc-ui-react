import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    // handleDecreaseItemQty(product) {
    //     this.props.dispatch(decreaseItemQty(product));
    // }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    handleIncreaseItemQty = e => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    {/*<div className="ps-section__header">*/}
                    {/*    <h1>Shopping Cart xgs</h1>*/}
                    {/*</div>*/}
                    <div className={'row'} id={'view-cart'}>
                        <div className={'col-md-8'}>
                            <div className="ps-section__content">
                                <div className="table-responsive d-flex justify-content-between align-items-center">
                                    <div className={'d-flex align-items-center'}>
                                        <img src={'/static/img/products/detail/fullwidth/1.jpg'} />
                                        <div className={'ml-4'}>
                                            <h4>Product Name</h4>
                                            <p>$135</p>
                                            <div className="form-group--number" style={{borderRadius: 0}}>
                                                <button
                                                    className="up"
                                                    onClick={this.handleIncreaseItemQty.bind(this)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                                <button
                                                    className="down"
                                                    onClick={this.handleDecreaseItemQty.bind(this)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={this.state.quantity}
                                                    disabled

                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button className={'review-button cart px-4 p-2'}>Remove</button>
                                </div>
                                <div className="table-responsive d-flex justify-content-between align-items-center mt-md-4 mt-5">
                                    <div className={'d-flex align-items-center'}>
                                        <img src={'/static/img/products/detail/fullwidth/1.jpg'} width={'130'}/>
                                        <div className={'ml-4'}>
                                            <h4>Product Name</h4>
                                            <p>$135</p>
                                            <div className="form-group--number" style={{borderRadius: 0}}>
                                                <button
                                                    className="up"
                                                    onClick={this.handleIncreaseItemQty.bind(this)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                                <button
                                                    className="down"
                                                    onClick={this.handleDecreaseItemQty.bind(this)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={this.state.quantity}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button className={'review-button px-4 cart p-2'}>Remove</button>
                                </div>

                                <div className="table-responsive d-flex justify-content-between align-items-center mt-md-4 mt-5">
                                    <div className={'d-flex align-items-center'}>
                                        <img src={'/static/img/products/detail/fullwidth/1.jpg'} width={'130'}/>
                                        <div className={'ml-4'}>
                                            <h4>Product Name</h4>
                                            <p>$135</p>
                                            <div className="form-group--number" style={{borderRadius: 0}}>
                                                <button
                                                    className="up"
                                                    onClick={this.handleIncreaseItemQty.bind(this)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                                <button
                                                    className="down"
                                                    onClick={this.handleDecreaseItemQty.bind(this)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={this.state.quantity}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button className={'review-button cart px-4 p-2'}>Remove</button>
                                </div>

                            </div>
                        </div>
                        <div className={'col-md-4  col-12 mt-md-0 mt-5'}>
                            <div className="ps-form__orders">
                                <div className="ps-block--checkout-order">
                                    <div className="ps-block__content">
                                        <div>
                                             <h4>Add Promo code</h4>
                                             <input type={'text'} />
                                             <div className={'mt-2'}>
                                                <button className={'review-button px-4 p-2'}>Add</button>
                                             </div>

                                        </div>
                                        <figure className={'mt-5'}>
                                            <figcaption>
                                                <strong>Summary</strong>
                                            </figcaption>
                                        </figure>
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
                                        <div className={'d-flex justify-content-between'}>
                                            <h5>Total</h5>
                                            <strong>US 128.60</strong>
                                        </div>
                                        <div className={'d-flex justify-content-between mt-5'}>
                                            <button className={'review-button1 cart px-4 p-2'}>CONTINUE SHOPPING</button>
                                            <button className={'review-button cart px-4 p-2'}>PLACE ORDER</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(ShoppingCart);
