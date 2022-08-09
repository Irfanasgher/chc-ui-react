import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../../components/elements/products/Product';
import ProductWide from '../../../components/elements/products/ProductWide';

import HeaderDefault from '../../../components/shared/headers/HeaderDefault';
// import DashboardInfo from '../../components/partials/hobbiyst/info';
import HeaderMobile from '../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../components/shared/navigation/NavigationList';
// import SubscribePopup from '../../components/shared/SubscribePopup';
import FooterDefault from '../../../components/shared/footers/FooterDefault';
import BreadCrumb from '../../../components/elements/BreadCrumb';

// import ShopWidget from './modules/ShopWidget';
// import BestSaleItems from './modules/BestSaleItems';
// import RecommendItems from './modules/RecommendItems';
import { Form, Pagination, Skeleton } from 'antd';
import { getHobbiystProducts, getProducts, getTotalProducts } from '../../../store/product/action';
import Link from 'next/link';
import {Table} from "rsuite";
import ReactTable from '../../../components/elements/Table/ReactTable';
import ApiCall from '../../../confiig/network';
import Url from '../../../confiig/api';
import { config } from '../../../confiig/env';
const { Column, HeaderCell, Cell } = Table;
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allProducts: [],
            products: [],
            spinning: false,

            //Pagination
            displayLength: 10,
            page: 1
        }
    }

    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    handlePagination(page, pageSize) {
        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };
        this.props.dispatch(getProducts(params));
    }
    componentDidMount() {
        const params = {
            _start: 1,
            _limit: 12,
        };
        this.props.dispatch(getProducts(params));
        // this.props.dispatch(getHobbiystProducts(params));
        this.props.dispatch(getTotalProducts());
        this.getAllHobbiystProducts()
    }
    getAllHobbiystProducts = async () => {
        let response = await ApiCall.get(Url.ALL_PRODUCTS, await config());
        if (response.status === 200) {

        }
    };
    getData =() => {
        const { displayLength, page, allProducts } = this.state;
        return   allProducts.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });

    };
    handleFilterChange = (e) => {
        this.setState({page: 1})
        const data = this.state.products.filter((v, i) => {
            const start = 1000 * (1 - 1);
            const end = start + 1000;
            return i >= start && i < end;
        })
        const filteredData = data.filter(item => {
            const query = e.target.value.toLowerCase();
            return (
                item.name.toLowerCase().indexOf(query) >= 0
            )
        });
        this.setState({
            allProducts: filteredData
        })
        if(e.target.value=== ''){
            this.setState({
                allProducts: this.state.products
            })
        }
    };
    handleChangePage = (dataKey)=> {
        // console.log(dataKey)
        this.setState({
            page: dataKey
        });
    };
    handleChangeLength=(dataKey)=> {
        this.setState({
            page: 1,
            displayLength: dataKey
        });
    };
    render() {
        const data = this.getData()
        const { allProducts, totalProducts } = this.props;
        const products = allProducts;
        const total = totalProducts;
        const viewMode = this.state.listView;
        const accountLinks = [

            {
                text: 'Dashboard',
                url: '/hobbiyst/dashboard/info',
                // icon: 'icon-user',
            },
            {
                text: 'Products',
                url: '/hobbiyst/dashboard/products',
                // icon: 'icon-alarm-ringing',
                active: true,
            },
            {
                text: 'Analytics',
                url: '/hobbiyst/dashboard/analytics',
                // icon: 'icon-user',
            },
            {
                text: 'Discount',
                url: '/hobbiyst/dashboard/discount',
                // icon: 'icon-user',
            },
            {
                text: 'Coupon',
                url: '/hobbiyst/dashboard/coupon',
                // icon: 'icon-user',
            },
            // {
            //     text: 'Shop',
            //     url: '/hobbiyst/dashboard/shop',
            //     // icon: 'icon-papers',
            // },
        ];

        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Hobbiyst',
                url: '/hobbiyst',
            },
            {
                text: 'Dashboard',
                url: '/dashboard',
            },
            {
                text: 'Products',
            },
        ];

        return (
            <div>
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                {/*<SubscribePopup active={subscribe} />*/}
                <main id="homepage-1">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <section className="ps-my-product ps-page--account">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="ps-section__left">
                                    <aside className="ps-widget--account-dashboard">
                                        <div className="ps-widget__content">
                                            <ul>
                                                {accountLinks.map(link => (
                                                    <li
                                                        key={link.text}
                                                        className={
                                                            link.active
                                                                ? 'active'
                                                                : ''
                                                        }>
                                                        <Link href={link.url}>
                                                            <a>
                                                                <i
                                                                    className={
                                                                        link.icon
                                                                    }></i>
                                                                {link.text}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="ps-page__content">
                                    <Form
                                        className="ps-form--account-setting">
                                        <div className="ps-form__header">
                                            <h3 className={'mt-md-0 mt-5'}>Products</h3>
                                        </div>
                                    </Form>
                                    <ReactTable
                                        data={data}
                                        loading={this.state.spinning}
                                        activePage={this.state.page}
                                        displayLength={this.state.displayLength}
                                        total={this.state.allProducts.length}
                                        onChangePage={this.handleChangePage}
                                        onChangeLength={this.handleChangeLength}
                                        handleFilterChange={this.handleFilterChange}

                                    >
                                        <Column width={200} align="center">
                                            <HeaderCell>No</HeaderCell>
                                            <Cell>
                                                {(rowData, rowIndex) => {
                                                    return <span>1</span>
                                                }}
                                            </Cell>
                                        </Column>

                                        <Column width={200} align="center">
                                            <HeaderCell>Name</HeaderCell>
                                            <Cell>
                                                {(rowData, rowIndex) => {
                                                    return <span>Test</span>
                                                }}
                                            </Cell>
                                        </Column>
                                    </ReactTable>
                                </div>
                                {/*<div className="ps-shopping">*/}
                                {/*    /!*<BestSaleItems collectionSlug="shop_best_sale_items" />*!/*/}
                                {/*    /!*<RecommendItems collectionSlug="shop-recommend-items" />*!/*/}
                                {/*    <div className="ps-shopping__header mt-5">*/}
                                {/*        <p>*/}
                                {/*            <strong className="mr-2">{total}</strong>*/}
                                {/*            Products found*/}
                                {/*        </p>*/}
                                {/*        <div className="ps-shopping__actions">*/}
                                {/*            <select*/}
                                {/*                className="ps-select form-control"*/}
                                {/*                data-placeholder="Sort Items">*/}
                                {/*                <option>Sort by latest</option>*/}
                                {/*                <option>Sort by popularity</option>*/}
                                {/*                <option>Sort by average rating</option>*/}
                                {/*                <option>Sort by price: low to high</option>*/}
                                {/*                <option>Sort by price: high to low</option>*/}
                                {/*            </select>*/}
                                {/*            <div className="ps-shopping__view">*/}
                                {/*                <p>View</p>*/}
                                {/*                <ul className="ps-tab-list">*/}
                                {/*                    <li*/}
                                {/*                        className={*/}
                                {/*                            viewMode === true ? 'active' : ''*/}
                                {/*                        }>*/}
                                {/*                        <a*/}
                                {/*                            href="#"*/}
                                {/*                            onClick={this.handleChangeViewMode}>*/}
                                {/*                            <i className="icon-grid"></i>*/}
                                {/*                        </a>*/}
                                {/*                    </li>*/}
                                {/*                    <li*/}
                                {/*                        className={*/}
                                {/*                            viewMode !== true ? 'active' : ''*/}
                                {/*                        }>*/}
                                {/*                        <a*/}
                                {/*                            href="#"*/}
                                {/*                            onClick={this.handleChangeViewMode}>*/}
                                {/*                            <i className="icon-list4"></i>*/}
                                {/*                        </a>*/}
                                {/*                    </li>*/}
                                {/*                </ul>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="ps-shopping__content">*/}
                                {/*        {viewMode === true ? (*/}
                                {/*            <div className="ps-shopping-product">*/}
                                {/*                <div className="row">*/}
                                {/*                    {products && products.length > 0*/}
                                {/*                        ? products.map((item) => (*/}
                                {/*                            <div*/}
                                {/*                                className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 "*/}
                                {/*                                key={item.id}>*/}
                                {/*                                <Product product={item} />*/}
                                {/*                            </div>*/}
                                {/*                        ))*/}
                                {/*                        : ''}*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        ) : (*/}
                                {/*            <div className="ps-shopping-product">*/}
                                {/*                {products && products.length > 0*/}
                                {/*                    ? products.map((item) => (*/}
                                {/*                        <ProductWide*/}
                                {/*                            product={item}*/}
                                {/*                            key={item.id}*/}
                                {/*                        />*/}
                                {/*                    ))*/}
                                {/*                    : ''}*/}
                                {/*            </div>*/}
                                {/*        )}*/}
                                {/*        <div className="ps-shopping__footer text-center pt-40">*/}
                                {/*            <Pagination*/}
                                {/*                total={total - 1}*/}
                                {/*                pageSize={12}*/}
                                {/*                responsive={true}*/}
                                {/*                defaultCurrent={1}*/}
                                {/*                onChange={this.handlePagination.bind(this)}*/}
                                {/*            />*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    </section>
                </main>
                <FooterDefault />
            </div>
        );
    }
}

export default connect((state) => state.product)(Products);
