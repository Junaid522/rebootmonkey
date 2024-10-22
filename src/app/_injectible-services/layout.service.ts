import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService {

    private contactUsVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    contactUsVisible$: Observable<boolean> = this.contactUsVisible.asObservable();

    private shoppingCartId: Subject<string> = new Subject<string>;
    shoppingCartId$: Observable<string> = this.shoppingCartId.asObservable();
    
    private shoppingCart: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    shoppingCart$: Observable<any> = this.shoppingCart.asObservable();
    
    private shoppingCartLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    shoppingCartLength$: Observable<number> = this.shoppingCartLength.asObservable();
    
    private loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('token') != undefined);
    loginState$: Observable<boolean> = this.loginState.asObservable();
    
    private username: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('username') || '');
    username$: Observable<string> = this.username.asObservable();
    
    constructor() { }    

    setContactUsVisible(isVisible: boolean) {
        this.contactUsVisible.next(isVisible);
    }
    
    setShoppingCartId(id: any) {
        if (id === undefined) {
            localStorage.removeItem('shoppingCartId');
        } else {
            localStorage.setItem('shoppingCartId', id);
        }
        this.shoppingCartId.next(id);
    }
    
    addToShoppingCart(item: any) {
        this.shoppingCart.next([...this.shoppingCart.value, item]);
        this.setShoppingCartLength(this.shoppingCart.value.length);
    }
    
    setShoppingCartLength(length: number) {
        this.shoppingCartLength.next(length);
    }
    
    emptyCart() {
        this.shoppingCart.next([]);
        this.shoppingCartLength.next(0);
    }
    
    setLoginState(token: string | undefined) {
        if (token === undefined) {
            localStorage.removeItem('token');
            this.loginState.next(false);
        } else {
            localStorage.setItem('token', token);
            this.loginState.next(true);
        }
    }
}