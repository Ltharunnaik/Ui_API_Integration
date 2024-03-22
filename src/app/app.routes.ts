import { Routes } from '@angular/router';
import { SeedComponent } from './seed/seed.component';
import { SowingComponent } from './sowing/sowing.component';

export const routes: Routes = [
    {
        path:'sowing', component : SowingComponent
    },
    {
        path:'seed', component : SeedComponent
    }
];
