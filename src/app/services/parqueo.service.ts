import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Parqueo } from '../models/parqueo.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParqueoService {

  private urlApi = environment.apiUrl + 'parqueo';

  constructor(private _httpClient: HttpClient) { };

  getParqueo(): Observable<Parqueo[]>{
    return this._httpClient.get<Parqueo[]>(this.urlApi)
  }

  postParqueo(parqueo: Parqueo): Observable<Parqueo>{
    return this._httpClient.post<Parqueo>(this.urlApi, parqueo)
  }

}
