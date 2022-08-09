import {base} from './env';

export default {
//Authentication
    LOGIN_USER: base + '/api/user/login',
    REGISTER_USER: base + '/api/user/register',
    USER_DETAILS: base + '/api/user/details',
    //Hobbiyst
    HOBBIYST_PRODUCTS: base + '/api/user/products',
    //SHOP
    //Categories
    ALL_CATEGORIES: base + '/api/shop/categories',
    ALL_SUB_CATEGORIES: base + '/api/shop/sub-categories',
    //Products
    ALL_PRODUCTS: base + '/api/shop/products',
    STORE_PRODUCT: base + '/api/admin/product/store',
}