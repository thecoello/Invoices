import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormGroup, FormGroupDirective, FormsModule, NgForm, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ReactiveFormsModule]
};
