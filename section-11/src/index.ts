import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './report-targets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './report-targets/HmtlReport';

const reader = new MatchReader('football.csv');
reader.read();

// const summary = new Summary(new WinAnalysis('Liverpool'), new ConsoleReport());
const summary = Summary.winsAnalysisWithConsoleReport('Chelsea');
summary.buildAndPrintReport(reader.data);

// const htmlSummary = new Summary(
//   new WinAnalysis('Man City'),
//   new HtmlReport('html-report.html')
// );
const htmlSummary = Summary.winsAnalysisWithHtmlReport(
  'Man City',
  'html-report-city.html'
);
htmlSummary.buildAndPrintReport(reader.data);
