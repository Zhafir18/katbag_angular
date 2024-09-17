import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { KatbagCollectionComponent } from './katbag-collection/katbag-collection.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutusComponent,
  },
  {
    path: 'new-collection',
    component: NewCollectionComponent,
  },
  {
    path: 'collections',
    component: KatbagCollectionComponent,
  },
];
