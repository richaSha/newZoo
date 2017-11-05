import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAnimalComponent } from './list-animal/list-animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';

const appRoutes: Routes = [
  {
     path: '',
     component: ListAnimalComponent
   },
  {
    path: 'new',
    component: AddAnimalComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
