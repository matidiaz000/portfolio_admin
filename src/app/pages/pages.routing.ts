import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "inicio",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: "categoria/:category_id",
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
    },
    {
        path: "categoria/:category_id/item/:item_id",
        loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
    },
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: '**',
        loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class PagesRouting { }