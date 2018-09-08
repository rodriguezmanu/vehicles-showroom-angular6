import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { NgBusyModule } from 'ng-busy';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { ComparativeComponent } from './components/comparative/comparative.component';

import { VehiclesService } from './services/vehicles.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ListingComponent,
    DetailsComponent,
    ComparativeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgBusyModule
  ],
  providers: [VehiclesService],
  bootstrap: [MenuComponent]
})
export class AppModule {}
