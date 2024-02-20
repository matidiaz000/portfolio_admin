import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageItemComponent } from './item.component';

const routes: Routes = [
    {
        path: '',
        component: PageItemComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRouting { }
