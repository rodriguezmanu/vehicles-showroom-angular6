import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './modules/app-material/app-material.module';

import { MenuComponent } from './components/menu/menu.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { ComparativeComponent } from './components/comparative/comparative.component';

import { VehiclesService } from './services/vehicles.service';

@NgModule({
  declarations: [
    MenuComponent,
    ListingComponent,
    DetailsComponent,
    ComparativeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [VehiclesService],
  bootstrap: [MenuComponent]
})
export class AppModule {}
