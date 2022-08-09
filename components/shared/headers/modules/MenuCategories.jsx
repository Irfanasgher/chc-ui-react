import React from 'react';
import menuData from '../../../../public/static/data/menu';
import Menu from '../../../elements/menu/Menu';
const MenuCategories = (props) => (
    <Menu data={props.categories} className="menu--dropdown" />
);

export default MenuCategories;
