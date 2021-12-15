import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerByCalls } from '../models/customer-by-calls.model';
import { HomeService } from '../services/home.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerByCallsResolver implements Resolve<CustomerByCalls[]> {

    constructor(
        private homeService: HomeService,
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CustomerByCalls[]> {
        return this.homeService.GetCustomerByCalls();;
    }
}
