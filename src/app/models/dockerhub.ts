export interface DockerHubQueryResult {
    name: string
    version: string
    results: Result[]
  }
  
  export interface Result {
    arch: string
    os: string
    vulnerabilities: Vulnerability[]
  }
  
  export interface Vulnerability {
    vulnerabilityReport: VulnerabilityReport
  }
  
  export interface VulnerabilityReport {
    critical: number
    high: number
    medium: number
    low: number
    unspecified: number
  }
  