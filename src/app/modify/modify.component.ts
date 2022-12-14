import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Alumno } from '../alumno.model';
import { ListarService } from '../listar.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  alumno : Alumno[];
  res : number;
  show : boolean;

  @ViewChild('err')err:ElementRef; //referencia a objeto del html
  @ViewChild('help')help:ElementRef;

  constructor(private listarService : ListarService) { }

  ngOnInit(): void {
    this.obternerAlumnos();
  }

  obternerAlumnos(){
    this.listarService.obtenerAlumnos().subscribe(
      respuesta => {
        this.res = Object.keys(respuesta).length;
        if(this.res >= 1){
          this.alumno = respuesta;
          this.alumno.forEach(a => a.show = false);
        }else{
          this.err.nativeElement.style.display = 'block';
        }
      }
    );
  }
}