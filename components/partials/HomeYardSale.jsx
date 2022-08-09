import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../elements/products/ProductSimple';
import { carouselSingle } from '../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../utilities/product-helper';
import { connect } from 'react-redux';

class HomeYardSale extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        // console.log(categories)

        return (
            <div>
                <div className={'ps-block__left pb-5'}>
                    <h3>Yard Sale</h3>
                    <hr/>
                </div>
            <div className="ps-block--products-of-category mt-5">
                {/*<div className="ps-block__categories">*/}
                {/*    <h3>*/}
                {/*        Yard Sale*/}
                {/*    </h3>*/}
                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/best-seller">*/}
                    {/*            <a>Best Seller</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/new-arrivals">*/}
                    {/*            <a>New Arrivals</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/women">*/}
                    {/*            <a>Women</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/men">*/}
                    {/*            <a>Men</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/girls">*/}
                    {/*            <a>Girls</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/boys">*/}
                    {/*            <a>Boys</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/baby">*/}
                    {/*            <a>Baby</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link href="/shop" as="/shop/sale-and-deal">*/}
                    {/*            <a>Sales & Deals</a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    {/*<Link href="/shop">*/}
                    {/*    <a className="ps-block__more-link">View All</a>*/}
                    {/*</Link>*/}
                {/*</div>*/}
                <div className="ps-block__slider">
                    <Slider {...carouselSingle} className="ps-carousel">
                        <a>
                            <div className={'slider-yard slider-dev text-center'}>
                                <h3>Best Seller</h3>
                                <h4>Mixed Blender</h4>
                                <button className={'px-md-5 p-md-3 p-2 px-4 mt-3'}>Shop Now</button>
                            </div>
                            <img
                                src="/static/img/slider/home-3/kitchen-3.png"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <div className={'slider-yard slider-dev text-center'}>
                                <h3>Best Seller</h3>
                                <h4>Mixed Blender</h4>
                                <button className={'px-md-5 p-md-3 p-2 px-4 mt-3'}>Shop Now</button>
                            </div>
                            <img
                                src="/static/img/slider/home-3/technology-3.png"
                                alt="martfury"
                            />
                        </a>
                        {/*<a>*/}
                        {/*    <img*/}
                        {/*        src="/static/img/slider/home-3/kitchen-3.png"*/}
                        {/*        alt="martfury"*/}
                        {/*    />*/}
                        {/*</a>*/}
                    </Slider>
                </div>
                <div className="ps-block__product-box">
                    {products.map((product, index) => {
                        if (index < 6) {
                            return (
                                <ProductSimple
                                    product={product}
                                    key={product.id}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(HomeYardSale);
