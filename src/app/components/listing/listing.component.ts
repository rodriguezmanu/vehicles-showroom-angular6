import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Car } from './../../models/car';

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  vehicles: Car[];
  searchText: string;

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit() {
    this.getVehicles();
  }

  /**
   * Get vehicles
   *
   * @memberof ListingComponent
   */
  getVehicles(): void {
    this.vehiclesService.getVehicles().subscribe(
      response => {
        this.vehicles = response;
      },
      (error: Response) => {
        console.log('error');
      }
    );
  }
}
