import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() type: string;

  constructor() {
    
   }

  ngOnInit(): void {

    if(this.type == "add"){
      document.getElementById('a')?.classList.add("active");
      document.getElementById('h')?.classList.remove("active");
      document.getElementById('e')?.classList.remove("active");
    }else if(this.type == "home"){
      document.getElementById('h')?.classList.add("active");
      document.getElementById('a')?.classList.remove("active");
      document.getElementById('e')?.classList.remove("active");
    }else if(this.type == "edit"){
      document.getElementById('e')?.classList.add("active");
      document.getElementById('a')?.classList.remove("active");
      document.getElementById('h')?.classList.remove("active");
    }
  }

}
