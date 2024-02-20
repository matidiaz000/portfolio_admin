import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCategoryComponent } from './category.component';

const routes: Routes = [
    {
        path: '',
        component: PageCategoryComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRouting { }
