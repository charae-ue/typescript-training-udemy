import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './report-targets/ConsoleReport';
import { HtmlReport } from './report-targets/HmtlReport';

// export to help us satisfy the interface when defining the class
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, filename: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport(filename));
  }

  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
