import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { maliciousForm } from 'src/app/consts/formTypeNames';

@Component({
  selector: 'app-malicious-form',
  templateUrl: './malicious-form.component.html',
  styleUrls: ['./malicious-form.component.css']
})
export class MaliciousFormComponent implements OnInit, OnDestroy  {
  @Input() events?: Observable<string>;
  packageName: string;
  packageVersion: string;
  selectedRepo: string;
  //dependenciesResults?: OsvDevQueryResult;
  eventsSubscription?: Subscription;
  
  constructor(private http: HttpClient) {
    this.packageName = '';
    this.packageVersion = '';
    this.selectedRepo = '';
   }

   ngOnInit(){
    this.eventsSubscription = this.events?.subscribe((type: string) => {
      if (type === maliciousForm) {
        //Make a request to your server-side
        const url = `https://wneyc5jhak.execute-api.us-east-1.amazonaws.com/dependencyMalicious?packageName=${this.packageName}&packageVersion=${this.packageVersion}&repo=${this.selectedRepo}`;

        // this.http.get<OsvDevQueryResult>(url).subscribe(resp => {
        //   console.log(resp);
        //   this.dependenciesResults = resp;
        // })
      }
    });
  }
  
  ngOnDestroy() {
    this.eventsSubscription?.unsubscribe();
  }

}
