import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ADD THIS
import { routes } from './app.routes';          // ADD THIS

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),                    // Now routes exists
    provideAnimationsAsync(),
    importProvidersFrom(FormsModule),         // ADD THIS - fixes ngModel
  ],
};
