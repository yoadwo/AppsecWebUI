import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsTableComponentComponent } from './components/results-table-component/results-table-component.component';
import { DependenciesResultsTableComponentComponent } from './components/dependencies-results-table-component/dependencies-results-table-component.component';
import { ContainersFormComponent } from './components/containers-form/containers-form.component';
import { DependenciesFormComponent } from './components/dependencies-form/dependencies-form.component';
import { MaliciousFormComponent } from './components/malicious-form/malicious-form.component';
import { MaliciousResultsTableComponentComponent } from './components/malicious-results-table-component/malicious-results-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsTableComponentComponent,
    DependenciesResultsTableComponentComponent,
    ContainersFormComponent,
    DependenciesFormComponent,
    MaliciousFormComponent,
    MaliciousResultsTableComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
