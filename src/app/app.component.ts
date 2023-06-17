import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DockerHubQueryResult, Result } from './models/dockerhub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appsec-web-ui';
  imageName: string;
  imageTag: string;
  imageInfo?: DockerHubQueryResult
  imageInfoResults?: Result[];

  constructor(private http: HttpClient){
    this.imageName = '';
    this.imageTag = '';
    this.imageInfo = undefined;
    this.imageInfoResults = undefined;
  }

  async submitForm() {
    // Make a request to your server-side
    const url = `https://wneyc5jhak.execute-api.us-east-1.amazonaws.com/dockerImagesCves?imageName=${this.imageName}&imageTag=${this.imageTag}`; // Replace with your server-side URL
        

    this.http.get<DockerHubQueryResult>(url).subscribe(resp => {
      console.log(resp);
      this.imageInfo = resp;
      this.imageInfoResults = resp.results;
    })
  }
}
