import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing/landing.component';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';
// Add this import manually
import { CreateCampaignComponent } from './features/campaigns/create-campaign/create-campaign.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }, 

  { 
    path: 'about', 
    loadComponent: () => 
      import('./features/about/about/about.component').then(m => m.AboutComponent) 
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'home', component: HomeComponent }, 
  { 
    path: 'campaigns', 
    loadComponent: () => 
      import('./features/campaigns/campaigns-page/campaigns-page.component')
        .then(m => m.CampaignsPageComponent) 
  },

  // ADD THIS NEW ROUTE HERE
  { path: 'campaigns/new', component: CreateCampaignComponent },

  { path: '**', redirectTo: '' }
];