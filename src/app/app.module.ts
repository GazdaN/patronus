import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmergencyComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
