import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CallsPopupComponent } from './components/calls-popup/calls-popup.component';
import { CustomerByCalls } from './models/customer-by-calls.model';
import { HomeService } from './services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['id', 'fullName', 'city', 'totalCallTime'];
    customerByCalls! : CustomerByCalls[];
    cities : string[] = [];
    filteredCustomerCalls! : CustomerByCalls[];
    constructor(
        private homeService: HomeService,
        private dialog: MatDialog,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.customerByCalls = this.route.snapshot.data.customerByCalls;
        this.filteredCustomerCalls = this.customerByCalls;
        this.cities = this.customerByCalls.map(c => c.city).filter((e, i, a) => a.indexOf(e) === i);
    }

    ngOnDestroy(): void {
    }

    TableRowClicked(row: CustomerByCalls) {
        this.homeService.GetCustomerCalls(row.id).pipe(take(1)).subscribe( c => {
            const dialogRef = this.dialog.open(CallsPopupComponent, { width: '400px' , data: c});
        })
    }
    OnCityChanged(city : string){
        this.filteredCustomerCalls = this.customerByCalls.filter( v => v.city === city);
    }
}
