import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableStarterComponent } from './variable-starter/variable-starter.component';
import { VariableStarter2Component } from './variable-starter2/variable-starter2.component';
import { VariableStarter3Component } from './variable-starter3/variable-starter3.component';
import { VarStarterComponent } from './components/var-starter/var-starter.component';
import { StarterComponent } from './components/starter/starter.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VariableStarterComponent,
    VariableStarter2Component,
    VariableStarter3Component,
    VarStarterComponent,
    StarterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
