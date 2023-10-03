import { Component } from '@angular/core';
import { DockerHubQueryResult, Result } from './models/dockerhub';
import { Subject } from 'rxjs';

import { containersForm, dependenciesForm } from './consts/formTypeNames';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appsec-web-ui';  
  formType: string;
  eventsSubject: Subject<string> = new Subject<string>();
  readonly CONTAINERS = containersForm
  readonly DEPENDENCIES = dependenciesForm;


  constructor(){
    this.formType = this.CONTAINERS;
  }

  submitForm() {
    this.eventsSubject.next(this.formType);
  }

  toggleForm(type: string) {
    this.formType = type;
  }
}
