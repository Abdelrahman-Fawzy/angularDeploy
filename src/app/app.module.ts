import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentFromCliComponent } from './component-from-cli/component-from-cli.component';
import { dbServices } from './services/db.services';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryPipe } from './pipes/summary.pipe';
import { UpperDirective } from './directives/upper.directive';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentFromCliComponent,
    BindingComponent,
    SummaryPipe,
    UpperDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    dbServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
