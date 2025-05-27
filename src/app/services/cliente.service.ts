import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlApi = environment.apiUrl + 'cliente';

  constructor(private _httpclient: HttpClient) { }

  getCliente(): Observable<Cliente[]>{
    return this._httpclient.get<Cliente[]>(this.urlApi)
  }

  getClienteById(id: number): Observable<Cliente>{
    return this._httpclient.get<Cliente>(this.urlApi + '/' + id)
  }
  
  postCliente(cliente: Cliente): Observable<Cliente>{
    return this._httpclient.post<Cliente>(this.urlApi, cliente)
  }





}
