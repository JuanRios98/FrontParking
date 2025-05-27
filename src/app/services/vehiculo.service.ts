import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.module';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private ApiUrl = environment.apiUrl + 'vehiculo';

  constructor(private _httpCliente: HttpClient) { }

  getVehiculo(): Observable<Vehiculo[]>{
    return this._httpCliente.get<Vehiculo[]>(this.ApiUrl)
  }

  getVehiculoByPlaca(placa: string): Observable<Vehiculo>{
    return this._httpCliente.get<Vehiculo>(this.ApiUrl + placa)
  }

  postVehiculo(data: any): Observable<Vehiculo>{
    return this._httpCliente.post<Vehiculo>(this.ApiUrl, data)
  }

}
