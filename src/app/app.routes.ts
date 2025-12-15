import { Routes } from '@angular/router';
import { OverviewComponent } from './features/brand-dashboard/pages/overview/overview.component';

export const routes: Routes = [
    { path: 'brand', component: OverviewComponent },
    { path: '', redirectTo: 'brand', pathMatch: 'full' },
    { path: '**', redirectTo: 'brand' }
];
