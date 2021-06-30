import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { TaskComponent } from './components/task/task.component';
import { TaskNewComponent } from './components/task/task-new.component';

// Definir las rutas
const appRoutes: Routes = [
    {path:'', component: LoginComponent},
    {path:'inicio', component: LoginComponent },
    {path:'logout/:sure', component: LoginComponent },
    {path:'dashboard', component: TaskComponent },
    {path:'taskNew', component: TaskNewComponent },
    {path:'login', component: LoginComponent },
    {path:'registro', component: RegisterComponent },
    {path:'**', component: ErrorComponent }

];

// Exportar configuracion
export const appRoutingProviders: any[] = [];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);





