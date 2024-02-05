import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  filename: string;

  // map the row data to the correct type
  abstract mapRow(row: string[]): T;

  constructor(filename: string) {
    this.filename = filename;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      // convert the row value to the right type
      .map(this.mapRow);
  }
}
