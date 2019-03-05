import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import * as moment from "moment";
import { ErrorInterceptor, AuthenticationInterceptor } from './helpers';
import { AlertService, CustomerService } from './services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

export const HELPERS = [ErrorInterceptor, AuthenticationInterceptor];

export const SERVICES = [AlertService, CustomerService];

import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material';

moment.locale("pt-BR");

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    PerfectScrollbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    PerfectScrollbarModule
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
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE]
        },
      ]
    };
  }
}
