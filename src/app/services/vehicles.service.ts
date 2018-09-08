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
    return this.http
      .get(environment.api + API.CARS.GET_ALL)
      .pipe(map((res: Response) => _.sortBy(res, ['brand'])));
  }

  /**
   * Get Vehicles
   *
   * @returns {Observable<Car[]>}
   * @memberof VehiclesService
   */
  getBrandVehicles(id: string): Observable<Car[]> {
    return this.http.get<Car>(environment.api + API.CARS.GET_ALL + id);
  }

  /**
   * Get single Vehicle
   *
   * @param {String} idBrand
   * @param {String} idVehicle
   * @returns {Observable<Car>}
   * @memberof VehiclesService
   */
  getSingleVehicle(idBrand: string, idVehicle: string): Observable<Car> {
    return this.http
      .get<Car>(environment.api + API.CARS.GET_SINGLE + idBrand)
      .pipe(
        map((res: Response) => res.vehicles.find(item => item.id == idVehicle))
      );
  }
}
