import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing/landing.component';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },                    // Landing (marketing page)
  { path: 'login', component: LoginComponent },                 // Login page  
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },                   // Dashboard (after login)
  { 
    path: 'campaigns', 
    loadComponent: () => import('./features/campaigns/campaigns-page/campaigns-page.component').then(m => m.CampaignsPageComponent) 
  },  // Campaigns dashboard
  { path: '**', redirectTo: '' }                               // 404 → landing
];
