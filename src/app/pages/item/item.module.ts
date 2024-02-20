import { NgModule } from '@angular/core';

import { ItemRouting } from './item.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    ItemRouting,
]

import { PageItemComponent } from './item.component';

const Components = [
    PageItemComponent
]

@NgModule({
    imports:      [ Modules ],
    declarations: [ Components ]
})
export class ItemModule { }