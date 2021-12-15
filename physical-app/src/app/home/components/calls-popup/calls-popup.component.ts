import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerCall } from '../../models/customer-call.model';

@Component({
    selector: 'app-calls-popup',
    templateUrl: './calls-popup.component.html',
    styleUrls: ['./calls-popup.component.css']
})
export class CallsPopupComponent implements OnInit {
    displayedColumns: string[] = ['PhoneNumber', 'CallLength'];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: CustomerCall[]
    ) { }

    ngOnInit(): void {
    }

}
