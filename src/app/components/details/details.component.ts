import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/car';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vehicles-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  vehicle: Car;
  busy: Subscription;
  loading: boolean;

  constructor(
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getVehicle(id);
  }

  /**
   * on Busy End handler
   *
   * @memberof DetailsComponent
   */
  onBusyStop(): void {
    this.loading = true;
  }

  /**
   * on Busy Start handler
   *
   * @memberof DetailsComponent
   */
  onBusyStart(): void {
    this.loading = false;
  }

  /**
   * Get vehicle
   *
   * @param id
   *
   * @memberof DetailsComponent
   */
  getVehicle(id: string): void {
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
