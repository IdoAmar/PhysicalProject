import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home.service';
import { SharedModule } from '../shared/shared.module';
import { CallsPopupComponent } from './components/calls-popup/calls-popup.component';


@NgModule({
    declarations: [
        HomeComponent,
        CallsPopupComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }
