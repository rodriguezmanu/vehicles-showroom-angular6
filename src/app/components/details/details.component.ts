import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/vehicle';
import { Subscription } from 'rxjs';
import { ToastrsService } from '../../services/toastr.service';

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
    private router: Router,
    private toastrService: ToastrsService
  ) {}

  ngOnInit() {
    this.getVehicle();
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
   * @memberof DetailsComponent
   */
  getVehicle(): void {
    const idBrand = this.route.snapshot.paramMap.get('brand');
    const idVehicle = this.route.snapshot.paramMap.get('id');

    this.busy = this.vehiclesService
      .getSingleVehicle(idBrand, idVehicle)
      .subscribe(
        (response: Car) => {
          this.vehicle = response;
        },
        (error: Response) => {
          this.toastrService.showError(error);
        }
      );
  }

  /**
   * Go to listing brand page
   *
   * @memberof DetailsComponent
   */
  gotoListingBrand(): void {
    const id = this.route.snapshot.paramMap.get('brand');

    this.router.navigate(['/brand', id]);
  }
}
