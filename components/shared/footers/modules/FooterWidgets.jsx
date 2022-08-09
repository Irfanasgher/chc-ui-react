import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
	<div className='ps-footer__widgets'>
		<aside className='widget widget_footer widget_contact-us'>
			<h4 className='widget-title'>Contact us</h4>
			<div className='widget_content'>
				<p>Call us 24/7</p>
				<a href="tel:+13038003500">
					<h3><i className='fa fa-phone'/> +1 303-800-3500</h3></a>
				<p>
					502 New Design Str, Melbourne, Australia <br />
					<a href='mailto:info@coloradohockeyconnection.com'>info@coloradohockeyconnection.com</a>
				</p>
				<ul className='ps-list--social'>
					<li>
						<a className='facebook' href='https://www.facebook.com/Colorado-Hockey-Connection-112121343648781' target='_blank'>
							<i className='fa fa-facebook' />
						</a>
					</li>
					{/*<li>*/}
					{/*	<a className='twitter' href='#'>*/}
					{/*		<i className='fa fa-twitter' />*/}
					{/*	</a>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<a className='google-plus' href='#'>*/}
					{/*		<i className='fa fa-google-plus' />*/}
					{/*	</a>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<a className='instagram' href='#'>*/}
					{/*		<i className='fa fa-instagram' />*/}
					{/*	</a>*/}
					{/*</li>*/}
				</ul>
			</div>
		</aside>
		<aside className='widget widget_footer'>
			<h4 className='widget-title'>Policy</h4>
			<ul className='ps-list--link'>
				<li>
					<Link href='/page/blank'>
						<a>Privacy Policy</a>
					</Link>
				</li>

				<li>
					<Link href='/page/blank'>
						<a>Terms of Usage</a>
					</Link>
				</li>
				{/*<li>*/}
				{/*	<Link href='/page/blank'>*/}
				{/*		<a>Term & Condition</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
				{/*<li>*/}
				{/*	<Link href='/page/blank'>*/}
				{/*		<a>Shipping</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
				{/*<li>*/}
				{/*	<Link href='/page/blank'>*/}
				{/*		<a>Return</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
				<li>
					<Link href='/page/faqs'>
						<a>FAQs</a>
					</Link>
				</li>
			</ul>
		</aside>
		<aside className='widget widget_footer'>
			<h4 className='widget-title'>Quick Menu</h4>
			<ul className='ps-list--link'>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Hobbiyst</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Professionals</a>
					</Link>
				</li><li>
					<Link href='/'>
						<a>Yard Sale</a>
					</Link>
				</li><li>
					<Link href='/'>
						<a>Community</a>
					</Link>
				</li>
				{/*<li>*/}
				{/*	<Link href='/page/about-us'>*/}
				{/*		<a>About Us</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
				{/*<li>*/}
				{/*	<Link href='/page/blank'>*/}
				{/*		<a>Affilate</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
				{/*<li>*/}
				{/*	<Link href='/page/blank'>*/}
				{/*		<a>Career</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
				{/*<li>*/}
				{/*	<Link href='/page/contact-us'>*/}
				{/*		<a>Contact</a>*/}
				{/*	</Link>*/}
				{/*</li>*/}
			</ul>
		</aside>
		<aside className='widget widget_footer'>
			<h4 className='widget-title'>Categories</h4>
			<ul className='ps-list--link'>
				<li>
					<Link href='/'>
						<a>Clothes</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Fitness</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Shoes</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>Socks & Rash Guards</a>
					</Link>
				</li>
			</ul>
		</aside>
	</div>
);

export default FooterWidgets;
