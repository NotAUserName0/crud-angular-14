import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../alumno.model';
import { ListarService } from '../listar.service';
import { Responses } from '../responses.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  alumno : Alumno[];
  resNam : number;
  show : boolean;
  resp : Responses;

  @ViewChild('err')err:ElementRef; //referencia a objeto del html
  @ViewChild('help')help:ElementRef;

  constructor(private listService: ListarService, private router:Router) { }

  ngOnInit(): void {
    this.obternerAlumnos();
  }

  obternerAlumnos(){
    this.listService.obtenerAlumnos().subscribe(
      respuesta => {
        this.resNam = Object.keys(respuesta).length;
        if(this.resNam >= 1){
          this.alumno = respuesta;
          this.alumno.forEach(a => a.show = false);
        }else{
          this.err.nativeElement.style.display = 'block';
        }
      }
    );
  }

  eliminarAlumno(id:string){
    this.listService.eliminarAlumnos(id).subscribe(
      respuesta => { this.resp = respuesta;
        if(this.resp.res == 'Exito!'){
          if(confirm("Estado de la solicitud: "+this.resp.res)){
            this.router.navigate(['']); //redireccion
          }
        }else{
          confirm("Error del lado del servidor!");
        }}
    );
  }

}
