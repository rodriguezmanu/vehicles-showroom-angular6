import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/car';
import { Subscription } from 'rxjs';

@Component({
  selector: 'details-cars',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  vehicle: Car;
  busy: Subscription;
  loading: boolean;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getVehicle(id);
  }

  /**
   * on Busy End handler
   *
   * @memberof DetailsComponent
   */
  onBusyStop() {
    this.loading = true;
  }

  /**
   * on Busy Start handler
   *
   * @memberof DetailsComponent
   */
  onBusyStart() {
    this.loading = false;
  }

  /**
   * Get vehicle
   *
   * @param id
   *
   * @memberof DetailsComponent
   */
  getVehicle(id) {
    this.busy = this.vehiclesService.getSingleVehicle(id).subscribe(
      response => {
        this.vehicle = response;
      },
      (error: Response) => {
        this.router.navigate(['/listing']);
      }
    );
  }
}
