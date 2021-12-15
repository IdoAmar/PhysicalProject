import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerByCalls } from './models/customer-by-calls.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    displayedColumns: string[] = ['id','fullName','city','totalCallTime'];
    customerByCalls$ !: Observable<CustomerByCalls[]>;

  constructor(
      private homeService : HomeService,
  ) { }

  ngOnInit(): void {
       this.customerByCalls$ = this.homeService.GetCustomerByCalls();
  }

}
