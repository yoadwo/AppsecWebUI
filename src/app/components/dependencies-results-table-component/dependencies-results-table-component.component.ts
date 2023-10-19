import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependencies-results-table-component',
  templateUrl: './dependencies-results-table-component.component.html',
  styleUrls: ['./dependencies-results-table-component.component.css']
})
export class DependenciesResultsTableComponentComponent implements OnInit {
  @Input() results?: any[]; // Assuming the results are passed as an input to the component
  
  columnsToDisplay: string[] = ['id', 'summary', 'severity'];

  constructor() { 
    this.results = undefined;
  }

  ngOnInit(): void {
    console.log('ng on init', this.results);
  }

  getSeverityClass(severity: string): string {
    switch (severity) {
      case 'critical':
        return 'severity-critical';
      case 'high':
        return 'severity-high';
      case 'medium':
        return 'severity-medium';
      case 'moderate':
        return 'severity-medium';
      case 'low':
        return 'severity-low';
      default:
        return 'severity-unknown';
    }
  }
}
