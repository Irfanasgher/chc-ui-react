import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import Link from 'next/link';

class HomeBanner extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-shop-banner">
                        <Slider {...carouselSetting} className="ps-carousel">
                            <div className="ps-banner">

                                {/*<Link href="/shop">*/}
                                <div className={'slider-dev'}>
                                    <p>Limited Edition</p>
                                    <h2>SCANDINAVIAN COLLECTION FOR YOUR BEDROOM JUST $599</h2>
                                    <button className={'px-md-5 p-md-3 p-2 px-4'}>Shop Now</button>
                                </div>
                                    {/*<a>*/}
                                        <img
                                            src="/static/img/slider/home-1/1.jpg"
                                            alt="martfury"
                                        />
                                    {/*</a>*/}
                                {/*</Link>*/}
                            </div>
                            <div className="ps-banner">
                                {/*<Link href="/shop">*/}
                                <div className={'slider-dev'}>
                                    <p>Limited Edition</p>
                                    <h2>EXPERIENCE FEEL GREATEST WITH VITURAL REALITY JUST $599</h2>
                                    <button className={'px-md-5 p-md-3 p-2 px-4'}>Shop Now</button>
                                </div>
                                    {/*<a>*/}
                                        <img
                                            src="/static/img/slider/home-1/2.jpg"
                                            alt="martfury"
                                        />
                                    {/*</a>*/}
                                {/*</Link>*/}
                            </div>
                            <div className="ps-banner">
                                {/*<Link href="/shop">*/}
                                <div className={'slider-dev'}>
                                    <p>Limited Edition</p>
                                    <h2>SCANDINAVIAN COLLECTION FOR YOUR BEDROOM JUST $599</h2>
                                    <button className={'px-md-5 p-md-3 p-2 px-4'}>Shop Now</button>
                                </div>
                                    {/*<a>*/}
                                        <img
                                            src="/static/img/slider/home-1/3.jpg"
                                            alt="martfury"
                                        />
                                    {/*</a>*/}
                                {/*</Link>*/}
                            </div>
                        </Slider>

            </div>
        );
    }
}

export default HomeBanner;
