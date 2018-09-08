import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Car } from './../../models/car';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vehicles-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Car[];
  searchText: string;
  filteredVehicles: Observable<any[]>;
  brandCtrl = new FormControl();

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
        this.getFilteredVehicles();
      },
      (error: Response) => {
        console.log('error');
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
   * @returns {any[]}
   * @memberof HomeComponent
   */
  filterBrands(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.vehicles.filter(
      item => item.brand.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
