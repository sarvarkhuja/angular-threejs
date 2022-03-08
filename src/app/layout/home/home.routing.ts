import { Routes, RouterModule } from '@angular/router';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';
import { HomeComponent } from './home.component';
import { HomeIndexComponent } from './components/home-index/home-index.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeIndexComponent,
      },
      {
        path: 'edit/:id',
        component: SingleEntryComponent,
      },
    ],
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
