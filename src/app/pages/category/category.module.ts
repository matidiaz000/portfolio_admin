import { NgModule } from '@angular/core';

import { CategoryRouting } from './category.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    CategoryRouting,
]

import { PageCategoryComponent } from './category.component';

const Components = [
    PageCategoryComponent
]

@NgModule({
    imports:      [ Modules ],
    declarations: [ Components ]
})
export class CategoryModule { }