import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const AngularModules = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
]

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

export const Modules = [
    AngularModules,
    SharedModule,
    PagesModule
]

import { AppComponent } from './app.component';

export const Bootstrap = AppComponent