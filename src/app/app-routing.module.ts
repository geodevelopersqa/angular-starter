import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StarterComponent } from './components/starter/starter.component';
import { VarStarterComponent } from './components/var-starter/var-starter.component';

const routes: Routes = [
  { path: 'test', component: VarStarterComponent },
  { path: 'shangavi', component: StarterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
