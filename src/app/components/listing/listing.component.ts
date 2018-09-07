import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Car } from './../../models/car';

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  constructor(private vehiclesService: VehiclesService) {}

  vehicles: Car[];
  searchText: string;

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vehiclesService.getVehicles().subscribe(
      response => {
        this.vehicles = response;
      },
      (error: Response) => {
        console.log('error');
      },
      () => {
        console.log('finally');
      }
    );
  }
}
