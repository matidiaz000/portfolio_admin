import { NgModule } from '@angular/core';

import { NotFoundRouting } from './not-found.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    NotFoundRouting,
]

import { PageNotFoundComponent } from './not-found.component';

const Components = [
    PageNotFoundComponent
]

@NgModule({
    imports:      [ Modules ],
    declarations: [ Components ]
})
export class NotFoundModule { }