import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Page/landing/landing.component';
import { SearchComponent } from './Page/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
