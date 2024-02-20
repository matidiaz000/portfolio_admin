import { BannerComponent } from './components/banner/banner.component';
import { FilterDesktopComponent } from './components/filter-desktop/filter-desktop.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FilterMobileComponent } from './components/filter-mobile/filter-mobile.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { LogoComponent } from './components/logo/logo.component';

export const Components = [
  BannerComponent,
  FilterDesktopComponent,
  FilterItemComponent,
  FilterMobileComponent,
  HeaderComponent,
  ItemComponent,
  LogoComponent
]

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export const AngularModules = [
    CommonModule,
    RouterModule
]

export const Modules = [
    AngularModules
]