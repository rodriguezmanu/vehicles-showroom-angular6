import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/vehicle';

@Component({
  selector: 'vehicles-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  vehicles: Car[];
  searchText: string;

  constructor(
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getVehiclesByBrand();
  }

  /**
   * Get vehicles
   *
   * @memberof ListingComponent
   */
  getVehiclesByBrand(): void {
    const id = this.route.snapshot.paramMap.get('brand');

    this.vehiclesService.getBrandVehicles(id).subscribe(
      (response: Car[]) => {
        this.vehicles = response;
      },
      (error: Response) => {
        console.log('error');
      }
    );
  }
}
