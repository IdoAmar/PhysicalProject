import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPages } from './common/pages.enum';
import { CustomerByCallsResolver } from './home/resolvers/customer-by-calls.resolver';

const routes: Routes = [
    {
        path: AppPages.Home,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        resolve: { customerByCalls : CustomerByCallsResolver }
    },
    {
        path: '',
        redirectTo: `/${AppPages.Home}`,
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
