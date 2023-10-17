import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { maliciousForm } from 'src/app/consts/formTypeNames';
import { DependencyMalicous } from 'src/app/models/dependencyMalicious';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-malicious-form',
  templateUrl: './malicious-form.component.html',
  styleUrls: ['./malicious-form.component.css']
})
export class MaliciousFormComponent implements OnInit, OnDestroy  {
  @Input() events?: Observable<string>;
  packageName: string;
  // packageVersion: string;
  selectedRepo: string;
  dependenciesResults?: DependencyMalicous[];
  eventsSubscription?: Subscription;

  repos: string[] = [
    'NuGet', 'npm', 'Maven', 'PyPi', 'Go', 'Linux',
  ];
  
  constructor(private http: HttpClient) {
    this.packageName = '';
    // this.packageVersion = '';
    this.selectedRepo = '';
    this.dependenciesResults = undefined;
   }

   ngOnInit(){
    this.eventsSubscription = this.events?.subscribe((type: string) => {
      if (type === maliciousForm) {
        //Make a request to your server-side
        const url = `https://wneyc5jhak.execute-api.us-east-1.amazonaws.com/dependencyMalicious?packageName=${this.packageName}&repo=${this.selectedRepo}`;

        this.http.get<Response>(url).subscribe(resp => {
          this.dependenciesResults = resp.data;
        })
      }
    });
  }
  
  ngOnDestroy() {
    this.eventsSubscription?.unsubscribe();
  }

}
