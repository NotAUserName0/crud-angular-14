import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ListarService } from '../listar.service';
import { Responses } from '../responses.model';

@Component({
  selector: 'app-mod-help',
  templateUrl: './mod-help.component.html',
  styleUrls: ['./mod-help.component.css']
})
export class ModHelpComponent implements OnInit {

  @Input() alumno: Alumno;
  modAlumno:FormGroup;
  resp : Responses;

  constructor(private listService: ListarService, private router:Router) { }

  ngOnInit(): void {

    this.modAlumno = new FormGroup({
      nombre : new FormControl( this.alumno.nombre ),
      grupo : new FormControl( this.alumno.grupo ),
      grado : new FormControl( this.alumno.grado )
  });
  }

  modiAlumno(){
    console.log(JSON.stringify(this.modAlumno.value));
  }
}