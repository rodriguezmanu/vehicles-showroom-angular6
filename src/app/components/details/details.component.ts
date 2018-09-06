import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/Cars';

@Component({
  selector: 'details-cars',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute
  ) {}

  vehicle: Car;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getVehicle(id);
  }

  /**
   * Get vehicle
   * @param id
   */
  getVehicle(id) {
    this.vehiclesService.getSingleVehicle(id).subscribe(
      response => {
        this.vehicle = response;
      },
      (error: Response) => {
        console.log('error');
        // cta listing
      },
      () => {
        console.log('finally');
      }
    );
  }
}
