import React, { Component } from 'react';
import Rating from '../../elements/Rating';
import HobbiystProducts from './HobbiystProducts';

class HobbiystStore extends Component {
    render() {
        return (
            <div className="ps-vendor-store">
                <div className="container">
                    <div className="ps-section__container">
                        <div className="ps-section__left">
                            <div className="ps-block--vendor">
                                <div className="ps-block__thumbnail">
                                    <img
                                        src="/static/img/vendor/vendor-store.jpg"
                                        alt="martfury"
                                    />
                                </div>
                                <div className="ps-block__container">
                                    <div className="ps-block__header">
                                        <h4>Digitalworld us</h4>
                                        <Rating />
                                        <p>
                                            <strong>85% Positive</strong> (562
                                            rating)
                                        </p>
                                    </div>
                                    <div className="ps-block__divider"></div>
                                    <div className="ps-block__content">
                                        <p>
                                            <strong>Digiworld US</strong>, New
                                            York’s no.1 online retailer was
                                            established in May 2012 with the aim
                                            and vision to become the one-stop
                                            shop for retail in New York with
                                            implementation of best practices
                                            both online
                                        </p>
                                        <span className="ps-block__divider"></span>
                                        <p>
                                            <strong>Address</strong> 325 Orchard
                                            Str, New York, NY 10002
                                        </p>
                                        <figure>
                                            <figcaption>
                                                Foloow us on social
                                            </figcaption>
                                            <ul className="ps-list--social-color">
                                                <li>
                                                    <a
                                                        className="facebook"
                                                        href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="twitter"
                                                        href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="linkedin"
                                                        href="#">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="feed"
                                                        href="#">
                                                        <i className="fa fa-feed"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </figure>
                                    </div>
                                    <div className="ps-block__footer">
                                        <p>
                                            Call us directly
                                            <strong>(+053) 77-637-3300</strong>
                                        </p>
                                        <p>or Or if you have any question</p>
                                        <a
                                            className="ps-btn ps-btn--fullwidth"
                                            href="" style={{color: 'white'}}>
                                            Contact Seller
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <HobbiystProducts />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HobbiystStore;
