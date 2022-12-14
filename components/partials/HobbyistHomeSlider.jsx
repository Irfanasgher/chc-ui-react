import React, { Component } from 'react';
// import CountDownSimple from '../elements/CountDownSimple';
import Link from 'next/link';
// import Product from '../elements/products/Product';
import Slider from 'react-slick';
import { carouselStandard } from '../../utilities/carousel-helpers';
import { connect } from 'react-redux';
// import { getColletionBySlug } from '../../utilities/product-helper';
import Rating from '../elements/Rating';

class HobbyistHomeSlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collections, collectionSlug } = this.props;
        const hobbyeists = [
            {
                name: 'Daneil Brad',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/1.jpg',
                profileImage: '/static/img/vendor/store/user/4.jpg',
            },
            {
                name: 'David Robles',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/2.jpg',
                profileImage: '/static/img/vendor/store/user/3.jpg',
            },{
                name: 'Hassie Martin',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/3.jpg',
                profileImage: '/static/img/vendor/store/user/5.jpg',
            },{
                name: 'Brosel Deff',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/2.jpg',
                profileImage: '/static/img/vendor/store/user/4.jpg',
            },{
                name: 'Neil Moli',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/1.jpg',
                profileImage: '/static/img/vendor/store/user/4.jpg',
            }, {
                name: 'Daneil Brad',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/1.jpg',
                profileImage: '/static/img/vendor/store/user/4.jpg',
            },
            {
                name: 'David Robles',
                address: '325 Orchard, Buenos Aires, Formosa Argentina',
                coverImage: '/static/img/vendor/store/2.jpg',
                profileImage: '/static/img/vendor/store/user/3.jpg',
            },
        ];

        return (
            <div className="ps-deal-of-day mt-80">
                <div className="ps-container hobbyist">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>HOBBYIST</h3>
                            </div>
                            {/*<div className="ps-block__right">*/}
                            {/*    <figure>*/}
                            {/*        <figcaption>End in:</figcaption>*/}
                            {/*        <CountDownSimple*/}
                            {/*            timeTillDate="12 31 2020, 6:00 am"*/}
                            {/*            timeFormat="MM DD YYYY, h:mm a"*/}
                            {/*        />*/}
                            {/*    </figure>*/}
                            {/*</div>*/}
                        </div>
                        <Link href="/shop">
                            <a>View all</a>
                        </Link>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
                            {hobbyeists.map((item, index) => (
                                <div key={index}>
                                    <div className="col-12">
                                        <article className="ps-block--store">
                                            <div
                                                className="ps-block__thumbnail bg--cover"
                                                style={{
                                                    background: `url(${item.coverImage})`,
                                                }}
                                            />
                                            <div className="ps-block__content text-center">
                                                <div className="ps-block__author">
                                                    <a className="ps-block__user" href="#">
                                                        <img
                                                            src={item.profileImage}
                                                            alt="chc"
                                                        />
                                                    </a>
                                                </div>
                                                <h4 className='text-center'>{item.name}</h4>
                                                <Rating/>
                                                <p className='text-center'>{item.address}</p>
                                                <div className="ps-block__inquiry text-center d-block" style={{margin: '-10px'}}>
                                                    <Link href={'/hobbiyst/store'}>
                                                        <a>
                                                            Shop With Me
                                                        </a>
                                                    </Link>

                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(HobbyistHomeSlider);
