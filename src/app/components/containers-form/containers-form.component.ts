import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { containersForm } from 'src/app/consts/formTypeNames';
import { DockerHubQueryResult, Result } from 'src/app/models/dockerhub';

@Component({
  selector: 'app-containers-form',
  templateUrl: './containers-form.component.html',
  styleUrls: ['./containers-form.component.css']
})
export class ContainersFormComponent implements OnInit, OnDestroy {
  @Input() events?: Observable<string>;
  
  imageName: string;
  imageTag: string;
  imageInfo?: DockerHubQueryResult
  imageInfoResults?: Result[];
  eventsSubscription?: Subscription;
  

  constructor(private http: HttpClient) {
    this.imageName = '';
    this.imageTag = '';
  }

  ngOnInit() {
    this.eventsSubscription = this.events?.subscribe((type: string) => {
      if (type === containersForm) {
        //Make a request to your server-side
        const url = `https://wneyc5jhak.execute-api.us-east-1.amazonaws.com/dockerImagesCves?imageName=${this.imageName}&imageTag=${this.imageTag}`;

        this.http.get<DockerHubQueryResult>(url).subscribe(resp => {
          console.log(resp);
          this.imageInfo = resp;
          this.imageInfoResults = resp.results;
        })
      }

    });
  }

  ngOnDestroy() {
    this.eventsSubscription?.unsubscribe();
  }

}
