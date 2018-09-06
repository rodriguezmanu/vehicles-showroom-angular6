import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { ComparativeComponent } from './components/comparative/comparative.component';

const routes: Routes = [
  {
    path: 'listing',
    component: ListingComponent
  },
  {
    path: 'listing/:id',
    component: DetailsComponent
  },
  {
    path: 'comparative',
    component: ComparativeComponent
  },
  {
    path: '**',
    redirectTo: '/listing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
