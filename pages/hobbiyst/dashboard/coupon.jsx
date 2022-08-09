import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, DatePicker, Select, Upload, Button } from 'antd';
import { UploadOutlined, StarOutlined } from '@ant-design/icons';
import HeaderDefault from '../../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../components/shared/navigation/NavigationList';
import SubscribePopup from '../../../components/shared/SubscribePopup';
import BreadCrumb from '../../../components/elements/BreadCrumb';
import FooterDefault from '../../../components/shared/footers/FooterDefault';
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    defaultFileList: [
        // {
        //     uid: '1',
        //     name: 'xxx.png',
        //     status: 'done',
        //     response: 'Server Error 500', // custom error message to show
        //     url: 'http://www.baidu.com/xxx.png',
        // },
        // {
        //     uid: '2',
        //     name: 'yyy.png',
        //     status: 'done',
        //     url: 'http://www.baidu.com/yyy.png',
        // },
        // {
        //     uid: '3',
        //     name: 'zzz.png',
        //     status: 'error',
        //     response: 'Server Error 500', // custom error message to show
        //     url: 'http://www.baidu.com/zzz.png',
        // },
    ],
    showUploadList: {
        showRemoveIcon: true,
        removeIcon: <StarOutlined onClick={e => console.log(e, 'custom removeIcon event')} />,
    },
};


class Coupon extends Component {
    constructor(props) {
        super(props);
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    handleChange = (value) =>{
        console.log(`selected ${value}`);
    }

    onAddProduct = (values) =>{
        console.log(values)
    }

    render() {
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
                active: true,
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
                url: '/hobbiyst/dashboard',
            },
            {
                text: 'Dashboard',
                url: '/hobbiyst/dashboard/info',
            },
            {
                text: 'Coupon',
            },
        ];
        return (
            <div className="site-content">
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
                                                <h3 className={'mt-md-0 mt-5'}>Coupon</h3>
                                            </div>
                                        </Form>
                                        <div className={"col-lg-12"}>
                                            <h3>Coupon</h3>

                                            {/*<div className={'row'}>*/}
                                            {/*    <div className={'col-lg-6'}>*/}
                                            {/*        <div className={'form-group'}>*/}
                                            {/*            <label>Select Category *</label><br/>*/}
                                            {/*            <select id="pet-select" style={{padding: "5px",width: "200px"}}>*/}
                                            {/*                <option value="">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*            </select>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*    <div className={'col-lg-6'}>*/}
                                            {/*        <div className={'form-group'}>*/}
                                            {/*            <label>Select SubCategory *</label><br/>*/}
                                            {/*            <select id="pet-select" style={{padding: "5px",width: "200px"}}>*/}
                                            {/*                <option value="">Jersey</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*                <option value="clothes">Clothes</option>*/}
                                            {/*            </select>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <Form onFinish={() => this.onAddProduct()}>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h5>Name</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="First Name"
                                                                name="name"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Name is required!',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h5>Code</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="code"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h5>Minimum Spend</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="First Name"
                                                                name="minimumSpend"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="number"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <h5>Maximum Spend</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="maximumSpend"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="number"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'row'}>
                                                    <div className={'col-sm-6'}>
                                                        <h5>Value</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="value"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="number"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={'row'}>
                                                    <div className={'col-sm-6'}>
                                                        <h5>Usage limit per coupen</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="usageLimitPerCoupen"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="number"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={'col-sm-6'}>
                                                        <h5>Usage limit per customer</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="usageLimitPerCustomer"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="number"
                                                                    placeholder=""
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'row'}>
                                                    <div className={'col-sm-6'}>
                                                        <h5>Start Date</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="startDate"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <DatePicker onChange={this.onChange} size={'large'} style={{width: '100%', padding:'11px'}}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>


                                                    <div className={'col-sm-6'}>
                                                        <h5>End Date</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="endDate"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            '',
                                                                    },
                                                                ]}>
                                                                <DatePicker onChange={this.onChange} size={'large'} style={{width: '100%', padding:'11px'}}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={'form-group'}>
                                                    <input type="checkbox" /> <label> isActive</label><br/>
                                                    <input type={"checkbox"} /> <label> isPercent</label>

                                                </div>

                                                <div className={' col-md-12 d-flex justify-content-center button'}>
                                                    <button type={'submit'} className={'product-button'}>Submit</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                    {/*<Products />*/}
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

export default Coupon;
