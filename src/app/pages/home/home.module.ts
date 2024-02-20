import { NgModule } from '@angular/core';

import { HomeRouting } from './home.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    HomeRouting,
]

import { PageHomeComponent } from './home.component';

const Components = [
    PageHomeComponent
]

@NgModule({
    imports:      [ Modules ],
    declarations: [ Components ]
})
export class HomeModule { }