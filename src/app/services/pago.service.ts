import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago.module';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private urlApi = environment.apiUrl + 'pago';

  constructor(private _httpcliente: HttpClient) { }

  getPago(): Observable<Pago[]>{
    return this._httpcliente.get<Pago[]>(this.urlApi)
  }
  
  getPagoById(id: number): Observable<Pago>{
    return this._httpcliente.get<Pago>(this.urlApi + '/' + id)
  }

  postPago(pago:Pago): Observable<Pago>{
    return this._httpcliente.post<Pago>(this.urlApi, pago)
  }


}
