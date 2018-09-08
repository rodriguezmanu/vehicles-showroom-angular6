import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ToastrsService } from '../../services/toastr.service';
import { Brand } from '../../models/vehicle';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vehicles-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Brand[];
  searchText: string;
  filteredVehicles: Observable<Brand[]>;
  brandCtrl = new FormControl();

  constructor(
    private vehiclesService: VehiclesService,
    private toastrService: ToastrsService
  ) {}

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
      (response: Brand[]) => {
        this.vehicles = response;
        this.getFilteredVehicles();
      },
      (error: Response) => {
        this.toastrService.showError(error);
      }
    );
  }

  /**
   * Get filtered vehicles search box
   *
   * @memberof HomeComponent
   */
  getFilteredVehicles() {
    this.filteredVehicles = this.brandCtrl.valueChanges.pipe(
      startWith(''),
      map(item => (item ? this.filterBrands(item) : this.vehicles.slice()))
    );
  }

  /**
   * Filter brands search box
   *
   * @param {string} value
   * @returns {Brand[]}
   * @memberof HomeComponent
   */
  filterBrands(value: string): Brand[] {
    const filterValue = value.toLowerCase();

    return this.vehicles.filter(
      item => item.brand.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
