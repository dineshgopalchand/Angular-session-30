import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit = 50): string {
    if (!value) {
      return '';
    }
    return value.substr(0, limit) + (value.length > limit ? '...' : '');
  }

}
