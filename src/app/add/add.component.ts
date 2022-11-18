import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ListarService } from '../listar.service';
import { Responses } from '../responses.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  type : string;
  resp : Responses;

  constructor(private listService: ListarService, private router:Router) {}

  addAlumno = new FormGroup({
    nombre : new FormControl( '' ),
    grupo : new FormControl( '' ),
    grado : new FormControl( '' )
});

  ngOnInit(): void {
    this.type = "add";
  }

  saveAlumno(){
    console.log(JSON.stringify(this.addAlumno.value));
    
/*    this.listService.agregarAlumnos(JSON.stringify(this.addAlumno.value)).subscribe(
      respuesta => {
        this.resp = respuesta;
        if(this.resp.res == 'Exito!'){
          if(confirm("Estado de la solicitud: "+this.resp.res)){
            this.router.navigate(['']); //redireccion
          }
        }else{
          confirm("Error del lado del servidor!");
        }
        
      }
    );*/
  }

}
