import React from 'react';
import Link from 'next/link';

const HomePromotions = () => (
    <div className="ps-home-promotions ">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <div className={'iphone-dev'}>
                                <h3>iPhone X 128GB</h3>
                                <h4>Retina Display</h4>
                                <h5>Discount 25% Off</h5>
                                <button className={'px-md-5 p-md-3 p-2 px-4 mt-md-3 mt-1'}>Shop Now</button>
                            </div>
                            <img src="/static/img/promotions/home-10/2.png" alt="martfury" />
                        </a>
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <div className={'iphone-dev slider-dev'}>
                                <h3>iPhone X 128GB</h3>
                                <h4>Retina Display</h4>
                                <h5>Discount 25% Off</h5>
                                <button className={'px-md-5 p-md-3 p-2 px-4 mt-md-3 mt-1'}>Shop Now</button>
                            </div>
                            <img src="/static/img/promotions/home-10/2.png" alt="martfury" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default HomePromotions;
