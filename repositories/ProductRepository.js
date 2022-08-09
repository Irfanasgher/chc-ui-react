import Repository, { baseUrl, serializeQuery } from './Repository';
import ApiCall from '../confiig/network';
import Url from '../confiig/api';
import {config} from '../confiig/env';

class ProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        const reponse = await ApiCall.get(
            Url.ALL_PRODUCTS, await config()
        )
            .then(response => {
                return response.data.products;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getHobbiystPorducts(params) {
        const reponse = await ApiCall.get(
            Url.ALL_PRODUCTS, await config()
        )
            .then(response => {
                return response.data.products;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getBrands() {
        const reponse = await Repository.get(`${baseUrl}/brands`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductCategories() {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getTotalRecords() {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsById(payload) {
        const reponse = await Repository.get(`${baseUrl}/products/${payload}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByCategory(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?slug=${payload}`
        )
            .then(response => {
                return response.data[0].products;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByBrands(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id_in=${item}`;
            } else {
                query = query + `&id_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByPriceRange(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ProductRepository();
