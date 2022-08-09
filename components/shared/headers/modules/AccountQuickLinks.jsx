import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { logOut } from '../../../../store/auth/action';
import Router from 'next/router';
class AccountQuickLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: ''
        };
    }


    handleLogout = e => {
        e.preventDefault();
        if(Router.route.includes('account/my-account') ||
            Router.route.includes('account/user-information') ||
            Router.route.includes('account/recent-viewed-product') ||
            Router.route.includes('account/wishlist') ||
            Router.route.includes('account/my-account') ||
            Router.route.includes('account/addresses') ||
            Router.route.includes('account/invoices') ||
            Router.route.includes('hobbiyst/dashboard') ||
            Router.route.includes('account/notifications')){
            Router.push('/')
        }
        this.props.dispatch(logOut());
    };
    componentDidMount() {
        if(localStorage.userToken){
            this.setState({
                user: JSON.parse(localStorage.currentUser)
            })
        }else {
            this.setState({
                user: ''
            })
        }
    }

    render() {

        const accountLinks = [
            {
                text: 'My Account',
                url: '/account/my-account',
            },{
                text: 'Dashboard',
                url: '/hobbiyst/dashboard',
            },
            {
                text: 'Notifications',
                url: '/account/notifications',
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
            },
            {
                text: 'Address',
                url: '/account/addresses',
            },
            {
                text: 'Recent Viewed Product',
                url: '/account/recent-viewed-product',
            },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
            },
        ];
        const { isLoggedIn } = this.props;
        if (isLoggedIn === true) {
            return (
                <div className="ps-block--user-account">
                    <i className="icon-user" style={{color: 'white'}}/>
                    <span className='text-white font-weight-bold ml-1 mb-4'>
                        {this.state.user.first_name}{" "}{this.state.user.last_name}
                    </span>

                    <div className="ps-block__content">
                        <ul className="ps-list--arrow">
                            {accountLinks.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url}>
                                        <a>{link.text}</a>
                                    </Link>
                                </li>
                            ))}
                            <li className="ps-block__footer">
                                <a
                                    // style={{color: 'white'}}
                                    href="#"
                                    onClick={this.handleLogout.bind(this)}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ps-block--user-header">
                    <div className="ps-block__left">
                        <i className="icon-user" style={{color: 'white'}}/>
                    </div>
                    <div className="ps-block__right">
                        <Link href="/account/login">
                            <a style={{color: 'white'}}>Login</a>
                        </Link>
                        <Link href="/account/register">
                            <a style={{color: 'white'}}>Register</a>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(AccountQuickLinks);
