import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ShopService {
    constructor(private httpClient: HttpClient) { }

    getCategories() {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/categories`)
    }

    getOptionsCategories() {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/options/categories`)
    }

    getProducts(category_id: number) {
        const params = {category_id};
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products`, {params})
    }

    getProduct(product_id: number) {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/${product_id}`)
    }

    getLocations(fullrack: boolean = false): Observable<any> {
        const params = { fullrack };
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/locations`, { params })
    }

    getPower(fullrack: boolean = false): Observable<any> {
        const params = { fullrack };
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/power`, { params })
    }

    getItems(fullrack: boolean = false, location: string = '', power: string = '', price_from: number = 1, price_to: number = 10000): Observable<any> {
        const params = { location, power, price_from, price_to };
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/${fullrack ? 'fullracks' : 'racks'}`, { params })
    }

    getItem(fullrack: string, id: string): Observable<any> {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/${fullrack === 'frack' ? 'fullracks' : 'racks'}/${id}`)
    }

    getCartById(cartId: string): Observable<any> {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/cart/${cartId}`, {})
    }

    createCart(): Observable<any> {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
          });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/cart`, {headers}, {})
    }

    addItemToCart(item: any): Observable<any> {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
          });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/cart/items`, item, {headers})
    }

    addProductItem(item: any): Observable<any> {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
          });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/products/items`, item, {headers})
    }

    getProductItemDetails(itemId: any): Observable<any> {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/products/items/${itemId}/details`, {})
    }

    checkout(order_id: string): Observable<any> {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
          });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/payment/create-checkout-session`, {headers}, {params: {order_id}})
    }

    order(order: any): Observable<any> {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
          });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/orders/orders`, order, {headers})
    }

    makeAnOrder(customer_id: string, cart_id: string) {
        const headers = new HttpHeaders({
            'Cache-Control': 'public, max-age=86400'
          });
        return this.httpClient.post(`${environment.testingBackendUrl}/api/orders/`, {headers}, {params: {customer_id, cart_id}})
    }

    getOrders(): Observable<any> {
        return this.httpClient.get(`${environment.testingBackendUrl}/api/orders/orders`)
    }
}