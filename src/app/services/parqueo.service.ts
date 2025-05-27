import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Parqueo } from '../models/parqueo.module';
import { Observable } from 'rxjs';
import { vistaParqueo } from '../models/vista.models';
import { DetalleParqueo } from '../models/detalleParqueo.module';

@Injectable({
  providedIn: 'root'
})
export class ParqueoService {

  private urlApi = environment.apiUrl + 'parqueo';

  constructor(private _httpClient: HttpClient) { };

  getParqueo(): Observable<Parqueo[]>{
    return this._httpClient.get<Parqueo[]>(this.urlApi)
  }

  getParqueoById(id: number): Observable<Parqueo>{
    return this._httpClient.get<Parqueo>(this.urlApi + '/' + id)
  }

  getParqueoByEstado(estado: string): Observable<Parqueo[]>{
    return this._httpClient.get<Parqueo[]>(this.urlApi + '/estado/' + estado)}

  postParqueo(data: any): Observable<Parqueo>{
    return this._httpClient.post<Parqueo>(this.urlApi, data )
  }

  getDetalleParqueo(celdaId: number): Observable<DetalleParqueo>{
    return this._httpClient.get<DetalleParqueo>(this.urlApi + '/detalle/' + celdaId);
  }

}
