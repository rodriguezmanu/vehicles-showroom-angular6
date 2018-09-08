import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/vehicle';

@Component({
  selector: 'app-listing-vehicles',
  templateUrl: './listing-vehicles.component.html',
  styleUrls: ['./listing-vehicles.component.sass']
})
export class ListingVehiclesComponent implements OnInit {
  @Input()
  vehicles: Car[];

  @Input()
  textFilter: string;

  @Input()
  alignLayout: string;

  constructor() {}

  ngOnInit() {}
}
