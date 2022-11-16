import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModHelpComponent } from './mod-help/mod-help.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarService } from './listar.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //VISTAS
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    PageNotFoundComponent,
    ModifyComponent,
    DeleteComponent,
    HeaderComponent,
    ModHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [  //SERVICIOS
    ListarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
