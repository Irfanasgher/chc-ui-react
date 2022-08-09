import React, { Component } from 'react';
import Link from 'next/link';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import SearchHeader from './modules/SearchHeader';
import { stickyHeader } from '../../../utilities/common-helpers';
import Router  from 'next/router';
import ApiCall from '../../../confiig/network';
import Url from '../../../confiig/api';
import { config } from '../../../confiig/env';
class HeaderDefault extends Component {
	constructor({ props }) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		this._isUnmounted = false;
		this.getAllCategories();
		if (process.browser) {
			window.addEventListener('scroll', stickyHeader);
		}
		if(!localStorage.userToken &&
			(Router.route.includes('account/my-account') ||
				Router.route.includes('account/user-information') ||
				Router.route.includes('account/recent-viewed-product') ||
				Router.route.includes('account/wishlist') ||
				Router.route.includes('account/my-account') ||
				Router.route.includes('account/addresses') ||
				Router.route.includes('account/invoices') ||
				Router.route.includes('hobbiyst/dashboard') ||
				Router.route.includes('account/notifications'))

		){
			Router.push('/')
		}
	}
	getAllCategories = async () => {
		if(!this._isUnmounted){
			let response = await ApiCall.get(Url.ALL_CATEGORIES, await config());
			if(response.status === 200){
				const filteredCategories = response.data.categories.map(cat => {
					return {
						icon: 'icon-star',
						text: cat.name,
						url: cat.slug, extraClass: "menu-item-has-children has-mega-menu",
						subClass: "sub-menu",
						megaContent: [
							{
								heading: cat.name,
								megaItems: cat.subCategories.map(sub => {return { text: sub.name, url: sub.slug}}),
							}]
					}
				});
				this.setState({
					categories: filteredCategories
				})
			}
		}

		// console.log("CATEGORIES =>",response)
	}


	render() {
		return (
			<header className='header header--1' data-sticky='true' id='headerSticky'>
				<div className='header__top'>
					<div className='ps-container'>
						<div className='header__left'>
							<Link href='/'>
								<a className='ps-logo'>
									<img
										src="/static/img/chc-logo.png"
										alt="chc"
										height='52'
									/>

								</a>
							</Link>
							{/*<Link href='/'>*/}
							{/*<a style={{color: 'white', marginTop: '5px',*/}
							{/*	fontSize: '16px',*/}
							{/*	fontWeight: 'bold'}}>*/}
							{/*	/!*Colorado Hockey Connection*!/*/}
							{/*	CHC*/}
							{/*</a>*/}
							{/*</Link>*/}
							<div className='menu--product-categories'>
								<div className='menu__toggle'>
									<i className='icon-menu' />
									<span>Shop by Category </span>
								</div>
								<div className='menu__content'>
									<MenuCategories categories={this.state.categories}/>
								</div>
							</div>
						</div>
						<div className='header__center'>
							<SearchHeader />
						</div>
						<div className='header__right'>
							<HeaderActions />
						</div>
					</div>
				</div>
				<NavigationDefault categories={this.state.categories} />
			</header>
		);
	}
}

export default HeaderDefault;
