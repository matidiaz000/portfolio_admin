import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { NotFoundModule } from './not-found/not-found.module';

export const PagesModules = [
  HomeModule,
  CategoryModule,
  ItemModule,
  NotFoundModule
];

import { AngularModules } from '../shared/shared.config';
import { PagesRouting } from './pages.routing';

export const Modules = [
  AngularModules,
  PagesRouting,
  PagesModules
];