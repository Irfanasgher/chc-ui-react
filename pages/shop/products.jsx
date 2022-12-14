import React from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import LayoutShopSidebar from '../../components/partials/shop/LayoutShopSidebar';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { getProducts, getTotalProducts } from '../../store/product/action';
import { getCollections } from '../../store/collection/action';
import ShopSidebarBestSeller from '../../components/partials/shop/modules/ShopSidebarBestSeller';
import ShopSidebarBanner from '../../components/partials/shop/ShopSidebarBanner';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import ApiCall from '../../confiig/network';
import Url from '../../confiig/api';
import {config} from '../../confiig/env';
class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        // this._isUnmounted = false;
        const params = {
            _start: 1,
            _limit: 12,
        };

        const collectionsSlug = [
            'shop_best_sale_items',
            'shop-recommend-items',
        ];
        this.props.dispatch(getProducts(params));
        this.props.dispatch(getTotalProducts());
        this.props.dispatch(getCollections(collectionsSlug));
        this.props.dispatch(getProducts());
        // this.getAllProducts();
    }
    // componentWillUnmount() {
    //     this._isUnmounted = true;
    // }

    // getAllProducts = async () => {
    //     if(!this._isUnmounted){
    //         let response = await ApiCall.get(Url.ALL_PRODUCTS, await config());
    //         console.log("ALL Products",response)
    //     }
    // }
    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'All Products',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-page--shop" id="shop-sidebar">
                    <div className="container">
                        <div className="ps-layout--shop">
                            <ShopWidget />
                            <div className="ps-layout__right">
                                <div className="ps-page__header">
                                    <h1>All Products</h1>
                                    {/*<ShopSidebarBanner />*/}
                                </div>
                                {/*<ShopSidebarBestSeller collectionSlug="shop_best_sale_items" />*/}
                                <LayoutShopSidebar />
                            </div>
                        </div>
                    </div>
                </div>
                {/*<Newletters layout="container" />*/}
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.product)(Products);
