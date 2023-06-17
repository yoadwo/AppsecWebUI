import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-table-component',
  templateUrl: './results-table-component.component.html',
  styleUrls: ['./results-table-component.component.css']
})
export class ResultsTableComponentComponent implements OnInit {
  @Input() results?: any[]; // Assuming the results are passed as an input to the component
  
  columnsToDisplay: string[] = ['osArch', 'severities'];

  constructor() { 
    this.results = undefined;
  }

  ngOnInit(): void {
  }

  getSeverityClass(severity: string, value: number): string {
    if (value === 0) {
      return 'severity-grey';
    } else {
      switch (severity) {
        case 'critical':
          return 'severity-critical';
        case 'high':
          return 'severity-high';
        case 'medium':
          return 'severity-medium';
        case 'low':
          return 'severity-low';
        default:
          return 'severity-unknown';
      }
    }
  }
  

}
