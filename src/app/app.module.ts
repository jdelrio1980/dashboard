// Modulos 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {DragDropModule} from '@angular/cdk/drag-drop';
//import { StoreModule } from '@ngrx/store';

// Routers
import { routing, appRoutingProviders } from './app.routing';

// Variables de ambiente
import { environment } from '../environments/environment';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { TaskComponent } from './components/task/task.component';
import { TaskNewComponent } from './components/task/task-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    HomeComponent,
    ErrorComponent,
    TaskComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    DragDropModule
    /*StoreModule.forRoot({
      mensaje: miReducer
    });*/
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
