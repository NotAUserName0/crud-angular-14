import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../alumno.model';
import { ListarService } from '../listar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  type : string;
  ans : any;
  tam: number;

  @ViewChild('err')err:ElementRef; //referencia a objeto del html
  @ViewChild('tab')tab:ElementRef;

  alumno : Alumno[];
  res : number;

  constructor(private listarService : ListarService) {
   }

  ngOnInit(): void {
    this.type = "home";
    this.obternerAlumnos();

  }

  obternerAlumnos(){
    this.listarService.obtenerAlumnos().subscribe(
      respuesta => {
        this.res = Object.keys(respuesta).length;
        if(this.res >= 1){
          this.alumno = respuesta;
        }else{
          this.err.nativeElement.style.display = 'block';
          this.tab.nativeElement.style.display = 'none';
        }
      }
    )
  }

  
}
