import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiMap } from 'src/app/common/api.map';
import { DataService } from 'src/app/core/services/data.service';
import { HomeModule } from '../home.module';
import { CustomerByCalls } from '../models/customer-by-calls.model';
import { CustomerCall } from '../models/customer-call.model';

@Injectable()
export class HomeService {

    constructor(
        private data: DataService
    ) { }

    GetCustomerByCalls(): Observable<CustomerByCalls[]> {
        return this.data.request(ApiMap.GetCustomerByCalls).pipe(map(r => r.body ?? []));
    }
    GetCustomerCalls(id : number): Observable<CustomerCall[]> {
        return this.data.request(ApiMap.GetCustomerCalls.clone({ url: (ApiMap.GetCustomerCalls.url + "/" + id) })).pipe(map(r => r.body ?? []));
    }
}
