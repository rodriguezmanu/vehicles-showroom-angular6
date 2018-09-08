import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { ComparativeComponent } from './components/comparative/comparative.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'brand/:brand',
    component: ListingComponent
  },
  {
    path: 'brand/:brand/vehicle/:id',
    component: DetailsComponent
  },
  {
    path: 'comparative',
    component: ComparativeComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
