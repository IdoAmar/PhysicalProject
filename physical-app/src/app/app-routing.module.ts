import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPages } from './common/pages.enum';

const routes: Routes = [
    {
        path: AppPages.Home,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
