import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Tarifa } from '../models/tarifa.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private urlApi = environment.apiUrl + 'tarifa';

  constructor(private _httpcliente: HttpClient) { }

  getTarifa(): Observable<Tarifa[]>{
    return this._httpcliente.get<Tarifa[]>(this.urlApi)
  }

  getTarifaById(Id: number): Observable<Tarifa>{
    return this._httpcliente.get<Tarifa>(this.urlApi + '/' + Id)}

  getTarifaByTipo(tipo: string): Observable<Tarifa[]>{
    return this._httpcliente.get<Tarifa[]>(this.urlApi + '/tipo/' + tipo)}
  
 
  getTarifaByVehiculoTipo(vehiculoTipo: string): Observable<Tarifa[]>{
    return this._httpcliente.get<Tarifa[]>(this.urlApi + '/vehiculoTipo/' + vehiculoTipo)}

  postTarifa(data: any): Observable<Tarifa>{
    return this._httpcliente.post<Tarifa>(this.urlApi, data)
  }

}
