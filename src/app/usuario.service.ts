import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from './usuario/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 

  }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:3000/usuarios',usuario);
  }

  obterTodos() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');
  }

}
