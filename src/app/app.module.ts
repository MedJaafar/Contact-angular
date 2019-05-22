import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactserviceService } from 'src/services/contactservice.service';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { OpenstreetmapComponent } from './openstreetmap/openstreetmap.component';
import { LoginComponent } from './login/login.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


//Dans Routes on fait la liaison entre les composants
const appRoutes : Routes=[
{path: 'about',component  :AboutComponent},
{path: 'contacts',component : ContactsComponent},
{path: 'newcontact',component : NewContactComponent},
{path: 'openstreetmap',component : OpenstreetmapComponent},
{path: 'login',component : LoginComponent},
{path: 'upload',component : UploadFileComponent},
{path: '',redirectTo: '/about',pathMatch: 'full'}
]
  
//Chaque component de l'application est ajouté ici automatiquement
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    EditContactComponent,
    OpenstreetmapComponent,
    LoginComponent,
    UploadFileComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  providers: [ContactserviceService],//déclarations des services à injecter dans l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
