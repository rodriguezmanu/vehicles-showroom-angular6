import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehiclesService } from '../../services/vehicles.service';
import { Car } from './../../models/car';

@Component({
  selector: 'comparative-vehicles',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss']
})
export class ComparativeComponent implements OnInit {
  formComparative: FormGroup;
  vehicles: Car[];
  selectedVehicles: Car[] = [];

  constructor(
    private vehiclesService: VehiclesService,
    private formBuilder: FormBuilder
  ) {
    this.formComparative = formBuilder.group({
      vehicles: ['', Validators.compose([Validators.maxLength(2)])]
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

  /**
   * Selection vehicle from select box
   *
   * @param {Object} vehicle
   * @memberof ComparativeComponent
   */
  selectionVehicle(vehicle: Car): void {
    vehicle.selected = vehicle.selected ? !vehicle.selected : true;
  }

  /**
   * Get Vehicles
   *
   * @memberof ComparativeComponent
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
