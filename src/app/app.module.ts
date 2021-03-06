import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { NgBusyModule } from 'ng-busy';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { ComparativeComponent } from './components/comparative/comparative.component';

import { VehiclesService } from './services/vehicles.service';
import { ToastrsService } from './services/toastr.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ListingVehiclesComponent } from './components/listing-vehicles/listing-vehicles.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ListingComponent,
    DetailsComponent,
    ComparativeComponent,
    FilterPipe,
    ListingVehiclesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgBusyModule,
    ToastrModule.forRoot()
  ],
  providers: [VehiclesService, ToastrsService],
  bootstrap: [MenuComponent]
})
export class AppModule {}
