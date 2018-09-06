import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { API } from './../app.constant';
import { map, catch } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

  /**
   * Get Vehicles
   *
   * @returns {Observable<Object>}
   * @memberof VehiclesService
   */
  getVehicles(): Observable<Object> {
    return this.http.get(environment.api + API.CARS.GET_ALL);
    .map(response => {
      return {
        data: response.json()
      };
    })
    .catch((error: Response) => {});
  }

  /**
   * Get single Vehicle
   *
   * @param {number} id
   * @returns {Observable<Object>}
   * @memberof VehiclesService
   */
  getSingleVehicle(id): Observable<Object> {
    return this.http.get(environment.api + API.CARS.GET_SINGLE + id)
    // .map(response => {
    //   return {
    //     data: response.json()
    //   };
    // })
    // .catch((error: Response) => {});
  }
}
