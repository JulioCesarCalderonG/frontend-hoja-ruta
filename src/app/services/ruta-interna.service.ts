import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { apiHojaRuta } from '../api/apiHojaRuta';
import { Observable } from 'rxjs';
import { EnvioTramiteInterno } from '../interface/envio-tramite-interno';

@Injectable({
  providedIn: 'root'
})
export class RutaInternaService {
  url = `${apiHojaRuta}/ruta-interna`;
  constructor(private http: HttpClient, private router:Router) { }

  getRutaInternas():Observable<any>{
    return this.http.get(this.url);
  }
  getTramiteDerivado(buscar:string):Observable<any>{
    return this.http.get(`${this.url}/tramite/derivado`,{params:{buscar}});
  }
  getTramiteInternoGeneral(buscar:string):Observable<any>{
    return this.http.get(`${this.url}/tramite/interno/general`,{params:{buscar}});
  }
  getRutaInterna(id_ruta:number):Observable<any>{
    return this.http.get(`${this.url}/${id_ruta}`)
  }
  getRutaInternaCodigo(codigo:string):Observable<any>{
    return this.http.get(`${this.url}/codigo/${codigo}`)
  }
  postRutaInterna(data:EnvioTramiteInterno):Observable<any>{
    return this.http.post(this.url,data);
  }
  putRutaInterna(id:number,data:EnvioTramiteInterno):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data);
  }
}
