import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-malicious-results-table-component',
  templateUrl: './malicious-results-table-component.component.html',
  styleUrls: ['./malicious-results-table-component.component.css']
})
export class MaliciousResultsTableComponentComponent implements OnInit {
  @Input() results?: any[]; // Assuming the results are passed as an input to the component
  
  columnsToDisplay: string[] = ['severity', 'link'];

  constructor() { }

  ngOnInit(): void {
    console.log('ng on init', this.results);
  }

  getSeverityClass(severity: string): string {
    switch (severity) {
      case 'critical':
        return 'severity-critical';
      case 'high':
        return 'severity-high';
      case 'medium' || 'moderate':
        return 'severity-medium';
      case 'low':
        return 'severity-low';
      default:
        return 'severity-unknown';
    }
  }
}
