import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, DatePicker, Select, Upload, Button } from 'antd';
import { UploadOutlined, StarOutlined } from '@ant-design/icons';
import HeaderDefault from '../../../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../../components/shared/navigation/NavigationList';
import SubscribePopup from '../../../../components/shared/SubscribePopup';
import BreadCrumb from '../../../../components/elements/BreadCrumb';
import FooterDefault from '../../../../components/shared/footers/FooterDefault';
import ReactQuill from '../../../../components/elements/ReactQuill';
import SingleDropZone from '../../../../components/elements/Dropzone/SingleDropZone';
import MultiDropZone from '../../../../components/elements/Dropzone/MultiDropZone';
import ApiCall from '../../../../confiig/network';
import Url from '../../../../confiig/api';
import { config, multipartConfig } from '../../../../confiig/env';
import moment from 'moment';

const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            sellingPrice: '',
            SKU: '',
            deliveryTime: '',
            subCategories: [],
            baseImage: '',
            additionalImages: [],
            selectedSubCategories: [],
            newFrom: '',
            newTo: '',
            summary: '',
            inStock: true,
            loading: false,
            isActive: true,
            isFeatured: true,
        };
    }

    componentDidMount() {
        this._isUnmounted = false;
        this.getAllSubCategories();
    }

    getAllSubCategories = async () => {
        let response = await ApiCall.get(Url.ALL_SUB_CATEGORIES, await config());
        if (response.status === 200) {
            this.setState({
                subCategories: response.data['sub-categories'],
            });
        }
    };
    onNewToChange = (date, dateString) => {
        // console.log(date);
        this.setState({
            newTo: date
        })
    };
    onNewFromChange = (date, dateString) => {
        // console.log(date, dateString);
        this.setState({
            newFrom: date
        })
    };
    handleChange = (value) => {
        this.setState({
            selectedSubCategories: value
        })
    };

    onAddProduct = async () => {
        const {
            name,
            sellingPrice,
            SKU,
            // deliveryTime,
            selectedSubCategories,
            summary,
            newFrom,
            newTo,
            inStock,
            isActive,
            // isFeatured,
            baseImage,
            additionalImages,
        } = this.state;
        this.setState({
            loading: true
        })
        const data = new FormData()
        data.append('base_image', baseImage)
        data.append('name', name)
        data.append('description', summary)
        data.append('type', 'ecommerce')
        data.append('price', sellingPrice)
        data.append('sku', SKU)
        data.append('in_stock', inStock? 1 : 0)
        data.append('is_active', isActive? 1 : 0)
        data.append('new_from', moment(newFrom).format('YYYY-MM-DD'))
        data.append('new_to', moment(newTo).format('YYYY-MM-DD'))
        data.append('categories', JSON.stringify(selectedSubCategories));
        additionalImages.forEach(item => {
            data.append('image[]', item)
        })
        let response = await ApiCall.post(Url.STORE_PRODUCT, data, await multipartConfig());
        if(response){
            this.setState({
                loading: false
            })
        }
        console.log(response)
    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSummaryChange = (summary) => {
        this.setState({
            summary,
        });
    };
    onFeaturedImageChange = (item) => {
        this.setState({
            baseImage: item,
        });
    };
    onProductImagesChange = (file) => {
        let files = this.state.additionalImages;
        files.push(file);
        this.setState({
            additionalImages: files,
        });
    };
    onCheckBoxChange = (e) => {
        if (e.target.name === 'inStock') {
            this.setState({
                inStock: e.target.checked,
            });
        }
        if (e.target.name === 'isActive') {
            this.setState({
                isActive: e.target.checked,
            });
        }
        if (e.target.name === 'isFeatured') {
            this.setState({
                isFeatured: e.target.checked,
            });
        }
    };

    render() {
        const {
            name,
            sellingPrice,
            SKU,
            deliveryTime,
            loading,
            subCategories,
            selectedSubCategories,
            summary,
            newFrom,
            newTo,
            inStock,
            isActive,
            isFeatured,
        } = this.state;
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
                url: '/hobbiyst/dashboard',
            },
            {
                text: 'Dashboard',
                url: '/hobbiyst/dashboard/info',
            },
            {
                text: 'Add Product',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault/>
                <HeaderMobile/>
                <NavigationList/>
                {/*<SubscribePopup active={subscribe} />*/}
                <main id="homepage-1">
                    <BreadCrumb breacrumb={breadCrumb}/>
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
                                                <h3 className={'mt-md-0 mt-5'}>Add Product</h3>
                                            </div>
                                        </Form>
                                        <div className={'col-lg-12'}>
                                            {/*<h3>Add Product</h3>*/}
                                            <Form onFinish={this.onAddProduct}>
                                                <div className="row">
                                                    <div className="col-sm-12">
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
                                                                    name={'name'}
                                                                    onChange={this.handleInputChange}
                                                                    value={name}
                                                                    placeholder="Product Name"
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h5>Selling Price</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="sellingPrice"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Selling price is required',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="number"
                                                                    name={'sellingPrice'}
                                                                    onChange={this.handleInputChange}
                                                                    value={sellingPrice}
                                                                    placeholder="Selling Price"
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h5>SKU</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="First Name"
                                                                name="sku"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'SKU is required',
                                                                    },
                                                                ]}>
                                                                <Input
                                                                    className="form-control"
                                                                    type="text"
                                                                    name={'SKU'}
                                                                    onChange={this.handleInputChange}
                                                                    value={SKU}
                                                                    placeholder="SKU"
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                    {/*<div className="col-sm-6">*/}
                                                    {/*    <h5>Delivery Time</h5>*/}
                                                    {/*    <div className="form-group">*/}
                                                    {/*        <Form.Item*/}
                                                    {/*            // label="Last Name"*/}
                                                    {/*            name="deliveryTime"*/}
                                                    {/*            rules={[*/}
                                                    {/*                {*/}
                                                    {/*                    required: true,*/}
                                                    {/*                    message:*/}
                                                    {/*                        'Delivery Time Is Required',*/}
                                                    {/*                },*/}
                                                    {/*            ]}>*/}
                                                    {/*            <Input*/}
                                                    {/*                className="form-control"*/}
                                                    {/*                type="number"*/}
                                                    {/*                name={'deliveryTime'}*/}
                                                    {/*                onChange={this.handleInputChange}*/}
                                                    {/*                value={deliveryTime}*/}
                                                    {/*                placeholder="Delivery Time"*/}
                                                    {/*            />*/}
                                                    {/*        </Form.Item>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <div className={'col-sm-6'}>
                                                        <h5>New From</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="newFrom"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            'New From Is Required',
                                                                    },
                                                                ]}>
                                                                <DatePicker
                                                                    onChange={this.onNewFromChange}
                                                                    name={'newFrom'}
                                                                    value={newFrom}
                                                                    // defaultValue={moment(newFrom)}
                                                                    size={'large'}
                                                                    style={{ width: '100%', padding: '11px' }}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={'col-sm-6'}>
                                                        <h5>New To</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="newTo"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message:
                                                                            'New To Is Required',
                                                                    },
                                                                ]}>
                                                                <DatePicker onChange={this.onNewToChange}
                                                                            value={newTo}
                                                                            // defaultValue={moment(newTo)}
                                                                            size={'large'}
                                                                            style={{ width: '100%', padding: '11px' }}/>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                    <div className={'col-sm-6'}>
                                                        <h5>Categories</h5>
                                                        <div className="form-group">
                                                            <Form.Item
                                                                // label="Last Name"
                                                                name="selectedCategories"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message:
                                                                            'Selected Categories Are Required',
                                                                    },
                                                                ]}>
                                                                <Select
                                                                    mode="multiple"
                                                                    style={{ width: '100%' }}
                                                                    placeholder="Please select"
                                                                    onChange={this.handleChange}
                                                                >
                                                                    {subCategories.map((item) => (
                                                                        <Option key={item.id} value={item.id}>{item.name}</Option>
                                                                    ))}

                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={'row'}>
                                                    <div className={'col-sm-12'}>
                                                        <h5>Featured Image</h5>
                                                        <div className="form-group">
                                                            <SingleDropZone
                                                                onChange={this.onFeaturedImageChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'col-sm-12'}>
                                                        <h5>Other Images</h5>
                                                        <div className="form-group">
                                                            <MultiDropZone
                                                                onChange={this.onProductImagesChange}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={'form-group mt-4'}>
                                                    <h5>Product Description</h5><br/>
                                                    <ReactQuill
                                                        value={summary}
                                                        onChange={this.handleSummaryChange}
                                                    />

                                                </div>
                                                <div className={'form-group'}>
                                                    <div className="ps-checkbox">
                                                        <input
                                                            checked={inStock}
                                                            className="form-control"
                                                            type="checkbox"
                                                            onChange={this.onCheckBoxChange}
                                                            id="inStock"
                                                            name="inStock"
                                                        />
                                                        <label htmlFor="inStock">
                                                            InStock
                                                        </label>
                                                    </div>
                                                    <br/>
                                                    <div className="ps-checkbox">
                                                        <input
                                                            checked={isActive}
                                                            className="form-control"
                                                            type="checkbox"
                                                            onChange={this.onCheckBoxChange}
                                                            id="isActive"
                                                            name="isActive"
                                                        />
                                                        <label htmlFor="isActive">
                                                            isActive
                                                        </label>
                                                    </div>
                                                    <br/>
                                                    {/*<div className="ps-checkbox">*/}
                                                    {/*    <input*/}
                                                    {/*        checked={isFeatured}*/}
                                                    {/*        onChange={this.onCheckBoxChange}*/}
                                                    {/*        className="form-control"*/}
                                                    {/*        type="checkbox"*/}
                                                    {/*        id="isFeatured"*/}
                                                    {/*        name="isFeatured"*/}
                                                    {/*    />*/}
                                                    {/*    <label htmlFor="isFeatured">*/}
                                                    {/*        isFeatured*/}
                                                    {/*    </label>*/}
                                                    {/*</div>*/}

                                                </div>

                                                <div className={' col-md-12 d-flex justify-content-center button'}>
                                                    <button type={'submit'} className={'product-button'}>
                                                        {loading? <React.Fragment>
                                            <span className="spinner-border spinner-border-lg mr-2" role="status"
                                                  aria-hidden="true"/>
                                                            Loading...
                                                        </React.Fragment> : <span>
                                            Submit
                                        </span>}
                                                    </button>
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
                <FooterDefault/>
            </div>
        );
    }
}

export default Create;
