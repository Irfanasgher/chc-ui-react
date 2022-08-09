import React, { Component } from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
// import Newletters from '../../components/partials/commons/Newletters';
// import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
// import ProductDetailBox from '../../components/elements/detail/ProductDetailBox';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import DescriptionBox from '../../components/elements/detail/modules/description/DescriptionBox';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { connect } from 'react-redux';
import { getCollections } from '../../store/collection/action';
import { getProductsById } from '../../store/product/action';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import ProductWidgets from '../../components/partials/product/ProductWidgets';

class SingleProduct extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        const pid = '2';
        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
        this.props.dispatch(getProductsById(pid));
    }
    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Ecommerce',
                url: '/shop',
            },
            {
                text: 'Single Procuct',
                url: '/shop',
            }
        ];

        return (
            <div className="layout--product">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth"/>
                <div className="ps-page--product ">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">
                                <ProductDetailFullwidth />
                            </div>
                            <div className="ps-page__right">
                                <ProductWidgets collectionSlug="widget_same_brand" />
                            </div>
                        </div>
                        <DescriptionBox />
                        {/*<CustomerBought*/}
                        {/*    boxed={true}*/}
                        {/*    collectionSlug="customer_bought"*/}
                        {/*/>*/}
                        <RelatedProduct
                            boxed={true}
                            collectionSlug="shop-recommend-items"
                        />
                    </div>
                </div>
                {/*<Newletters layout="container"/>*/}
                <FooterDefault />
            </div>
        );
    }
}

export default connect()(SingleProduct);
