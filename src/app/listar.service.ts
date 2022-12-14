import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './alumno.model';
import { Observable } from 'rxjs';
import { Responses } from './responses.model';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  URL = "http://localhost/api-crud-angular-14/";

  constructor(private http: HttpClient) { }

  obtenerAlumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.URL}listar.php`);
  }

  agregarAlumnos(alumno:any):Observable<Responses>{
    console.log(alumno);
    return this.http.post<Responses>(`${this.URL}agregar.php`,alumno);
  }

  modificarAlumnos(alumno:any):Observable<Responses>{
    return this.http.put<Responses>(`${this.URL}editar.php`,alumno);
  }

  eliminarAlumnos(id:string):Observable<Responses>{
    console.log(id);
    return this.http.delete<Responses>(`${this.URL}eliminar.php?id=${id}`);
  }


}
