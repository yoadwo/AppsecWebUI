export interface OsvDevQueryResult {
    vulns: Vulnerability[]
  }
  
  export interface Vulnerability {
    id: string
    summary: string
    nist: string[]
    ghSeverity: string
  }