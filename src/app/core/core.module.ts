import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ErrorInterceptor, AuthenticationInterceptor } from './helpers';
import { AlertService, CustomerService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const HELPERS = [ErrorInterceptor, AuthenticationInterceptor];

export const SERVICES = [AlertService, CustomerService];

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule
  ]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...HELPERS,
        ...SERVICES,
        { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
      ]
    };
  }
}
