import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { API } from './../app.constant';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

  /**
   * Get Vehicles
   *
   * @returns {Observable<Car[]>}
   * @memberof VehiclesService
   */
  getVehicles(): Observable<Car[]> {
    return this.http.get(environment.api + API.CARS.GET_ALL).pipe(
      map((res: Response) => {
        return _.sortBy(res, ['company']);
      })
    );
  }

  /**
   * Get single Vehicle
   *
   * @param {number} id
   * @returns {Observable<Car>}
   * @memberof VehiclesService
   */
  getSingleVehicle(id): Observable<Car> {
    return this.http.get<Car>(environment.api + API.CARS.GET_SINGLE + id);
  }
}
