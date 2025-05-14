import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Celda } from '../models/celda.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeldaService {

  private urlApi = environment.apiUrl + 'Celda'

  constructor(private _httpCliente: HttpClient) { }

  getCelda(): Observable<Celda[]>{
    return this._httpCliente.get<Celda[]>(this.urlApi)
  }

  postCelda(celda: Celda): Observable<Celda>{
    return this._httpCliente.post<Celda>(this.urlApi, celda)
  }
}