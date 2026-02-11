import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing/landing.component';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';
import { CreateCampaignComponent } from './features/campaigns/create-campaign/create-campaign.component';
// 1. IMPORT THE LAYOUT COMPONENT
import { DashboardLayoutComponent } from './shared/dashboard-layout/dashboard-layout.component';
// ADD THIS IMPORT:
import { CreativeStudioComponent } from './features/creative-studio/creative-studio.component';
// ADD THIS ASSET LIBRARY IMPORT:
import { AssetLibraryComponent } from './features/asset-library/asset-library.component';

export const routes: Routes = [
  // 1. External Pages (No Sidebar)
  { path: '', component: LandingComponent, pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { 
    path: 'about', 
    loadComponent: () => 
      import('./features/about/about/about.component').then(m => m.AboutComponent) 
  },

  // 2. Internal Dashboard Pages (WITH SIDEBAR)
  { 
    path: '', 
    component: DashboardLayoutComponent, // USE THE LAYOUT AS THE SHELL
    children: [
      { path: 'home', component: HomeComponent }, // Content only (No sidebar code inside)
      { 
        path: 'campaigns', 
        loadComponent: () => 
          import('./features/campaigns/campaigns-page/campaigns-page.component')
            .then(m => m.CampaignsPageComponent) 
      },
      { path: 'campaigns/new', component: CreateCampaignComponent },
      // ADD THIS LINE:
      { path: 'creative-studio', component: CreativeStudioComponent }, 
      // ADD THIS ASSET LIBRARY LINE:
      { path: 'assets', component: AssetLibraryComponent }, 
      
      // Keep your redirections clean
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // 3. Wildcard Catch-all
  { path: '**', redirectTo: '' }
];