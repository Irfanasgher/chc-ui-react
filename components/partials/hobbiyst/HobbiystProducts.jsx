import React, { Component } from 'react';

import ProductWide from '../../elements/products/ProductWide';
import { relatedProduct } from '../../../public/static/data/product';
import ProductOffline from '../../elements/products/ProductOffline';
import ApiCall from '../../../confiig/network';
import Url from '../../../confiig/api';
import {config} from '../../../confiig/env';
import Product from '../../elements/products/Product';
class HobbiystProducts extends Component {
    state = {
        listView: true,
        products: []
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };
    componentDidMount() {
        this._isUnMounted = false
        this.getHobbyistProducts();
    };
    componentWillUnmount() {
        this._isUnMounted = true
    }
    getHobbyistProducts = async () => {
        if(!this._isUnMounted) {
            let response = await ApiCall.get(`${Url.HOBBIYST_PRODUCTS}/5`, await config());
            if(response.status === 200){
                this.setState({
                    products: response.data.products
                })
            }
            // console.log("API PRODUCTS",response)
            // console.log("HARDCODED PRODUCTS",relatedProduct)
        }
    }
    render() {
        const viewMode = this.state.listView;
        const { products } = this.state;
        return (
            <div className="ps-shopping vendor-shop">
                <div className="ps-shopping__header">
                    <p>
                        <strong>
                            {' '}
                            {products ? products.length : 0}
                        </strong>{' '}
                        Products found
                    </p>
                    <div className="ps-shopping__actions">
                        <select
                            className="ps-select"
                            data-placeholder="Sort Items">
                            <option>Sort by latest</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                        {/*<div className="ps-shopping__view">*/}
                        {/*    <p>View</p>*/}
                        {/*    <ul className="ps-tab-list">*/}
                        {/*        <li*/}
                        {/*            className={*/}
                        {/*                viewMode === true ? 'active' : ''*/}
                        {/*            }>*/}
                        {/*            <a*/}
                        {/*                href="#"*/}
                        {/*                onClick={this.handleChangeViewMode}>*/}
                        {/*                <i className="icon-grid"></i>*/}
                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*        <li*/}
                        {/*            className={*/}
                        {/*                viewMode !== true ? 'active' : ''*/}
                        {/*            }>*/}
                        {/*            <a*/}
                        {/*                href="#"*/}
                        {/*                onClick={this.handleChangeViewMode}>*/}
                        {/*                <i className="icon-list4"></i>*/}
                        {/*            </a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="ps-shopping__content">
                    <div className="ps-shopping-product">
                        <div className="row">
                            {products && products.length > 0
                                ? products.map((product, index) => (
                                    <div
                                        className="col-lg-3 col-md-4 col-sm-6 col-6 "
                                        key={index}>
                                        <Product
                                            product={product}
                                        />
                                    </div>
                                ))
                                : ''}
                        </div>
                    </div>
                    {/*{viewMode === true ? (*/}
                    {/*    <div className="ps-shopping-product">*/}
                    {/*        <div className="row">*/}
                    {/*            {relatedProduct && relatedProduct.length > 0*/}
                    {/*                ? relatedProduct.map((product) => (*/}
                    {/*                    <div*/}
                    {/*                        className="col-lg-3 col-md-4 col-sm-6 col-6 "*/}
                    {/*                        key={product.id}>*/}
                    {/*                        <ProductOffline*/}
                    {/*                            product={product}*/}
                    {/*                        />*/}
                    {/*                    </div>*/}
                    {/*                ))*/}
                    {/*                : ''}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*) : (*/}
                    {/*    <div className="ps-shopping-product">*/}
                    {/*        {relatedProduct && relatedProduct.length > 0*/}
                    {/*            ? relatedProduct.map((product) => (*/}
                    {/*                <ProductWide*/}
                    {/*                    product={product}*/}
                    {/*                    key={product.id}*/}
                    {/*                />*/}
                    {/*            ))*/}
                    {/*            : ''}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>
        );
    }
}

export default HobbiystProducts;
