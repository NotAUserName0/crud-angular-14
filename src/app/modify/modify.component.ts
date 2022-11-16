import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Alumno } from '../alumno.model';
import { ListarService } from '../listar.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  @ViewChild('help')help:ElementRef;

  alumno : Alumno[];
  res : number;

  @ViewChild('err')err:ElementRef; //referencia a objeto del html
  @ViewChild('tab')tab:ElementRef;

  constructor(private listarService : ListarService) { 
    
  }

  ngOnInit(): void {
  }

  displayHelp(){
    console.log("entro nya");
    this.help.nativeElement.style.display = 'block';
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