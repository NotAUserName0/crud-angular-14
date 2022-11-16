import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  type : string;

  constructor() { }

  ngOnInit(): void {
    this.type = "edit";
  }

}
