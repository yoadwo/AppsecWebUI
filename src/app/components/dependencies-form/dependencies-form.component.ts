import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { dependenciesForm } from 'src/app/consts/formTypeNames';

@Component({
  selector: 'app-dependencies-form',
  templateUrl: './dependencies-form.component.html',
  styleUrls: ['./dependencies-form.component.css']
})
export class DependenciesFormComponent implements OnInit, OnDestroy  {
  eventsSubscription?: Subscription;
  @Input() events?: Observable<string>;
  packageName: string;
  packageVersion: string;
  selectedRepo: string;

  repos: string[] = [
    'Nuget', 'npm', 'Maven', 'PyPi'
  ];

  constructor() {
    this.packageName = '';
    this.packageVersion = '';
    this.selectedRepo = '';
   }

  ngOnInit(){
    this.eventsSubscription = this.events?.subscribe((type: string) => {
      if (type === dependenciesForm) {
        //Make a request to your server-side
        const url = `https://wneyc5jhak.execute-api.us-east-1.amazonaws.com/dependencyCves?packageName=${this.packageName}&packageVersion=${this.packageVersion}&repo=${this.selectedRepo}`;
      }
    });
  }
  
  ngOnDestroy() {
    this.eventsSubscription?.unsubscribe();
  }

}
