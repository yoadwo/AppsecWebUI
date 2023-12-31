import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { dependenciesForm } from 'src/app/consts/formTypeNames';
import { OsvDevQueryResult } from 'src/app/models/osv.dev';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-dependencies-form',
  templateUrl: './dependencies-form.component.html',
  styleUrls: ['./dependencies-form.component.css']
})
export class DependenciesFormComponent implements OnInit, OnDestroy  {
  @Input() events?: Observable<string>;
  packageName: string;
  packageVersion: string;
  selectedRepo: string;
  dependenciesResults?: OsvDevQueryResult[];
  eventsSubscription?: Subscription;

  repos: string[] = [
    'NuGet', 'npm', 'Maven', 'PyPi', 'Go', 'Linux',
  ];

  constructor(private http: HttpClient) {
    this.packageName = '';
    this.packageVersion = '';
    this.selectedRepo = '';
    this.dependenciesResults = undefined;
   }

  ngOnInit(){
    this.eventsSubscription = this.events?.subscribe((type: string) => {
      if (type === dependenciesForm) {
        //Make a request to your server-side
        const url = `https://wneyc5jhak.execute-api.us-east-1.amazonaws.com/dependencyCves?packageName=${this.packageName}&packageVersion=${this.packageVersion}&repo=${this.selectedRepo}`;

        this.http.get<Response>(url).subscribe(resp => {
          console.log(resp);
          this.dependenciesResults = resp.data;
        })
      }
    });
  }
  
  ngOnDestroy() {
    this.eventsSubscription?.unsubscribe();
  }

}
