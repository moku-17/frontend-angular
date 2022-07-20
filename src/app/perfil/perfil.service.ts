import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getPerfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(`${this.apiServerUrl}/perfil/all`)
  }

  public updatePerfil(perfil: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.apiServerUrl}/perfil/update`, perfil)
  }

}
