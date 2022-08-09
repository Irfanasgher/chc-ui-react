import React, { Component } from 'react';
import Link from 'next/link';
import { Form } from 'antd';
import Products from '../../../components/partials/hobbiyst/products';
import HeaderDefault from '../../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../components/shared/navigation/NavigationList';
// import SubscribePopup from '../../../components/shared/SubscribePopup';
import BreadCrumb from '../../../components/elements/BreadCrumb';
import FooterDefault from '../../../components/shared/footers/FooterDefault';

class Index extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const accountLinks = [
            {
                text: 'Dashboard',
                url: '/hobbiyst/dashboard/info',
                active: true,
            },
            {
                text: 'Products',
                url: '/hobbiyst/dashboard/products',
                // icon: 'icon-alarm-ringing',
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
                text: 'Index',
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
                            <div className="row mt-5">
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
                                            className="ps-form--account-setting"
                                            onSubmit={this.handleLoginSubmit}>
                                            <div className="ps-form__header">
                                                <h3 className={'mt-md-0 mt-5'}>Dashboard</h3>
                                            </div>
                                        </Form>
                                        <div className={"text-center col-lg-12"}>
                                            <h3>Welcome</h3>
                                            <h2>Michael</h2>
                                            <img src={'/static/img/hobbiyst/user-avatar-png-7.png'} height={100}/>
                                            <h3>50 Products</h3>
                                            <div className={'d-flex justify-content-center mt-5'}>
                                                {/*<button type={'submit'}> Add Category </button>*/}
                                                <button type={'submit'} className={'ml-4'}><Link href={'/hobbiyst/dashboard/product/create'}>Add Products</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                    <Products />
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

export default Index;
