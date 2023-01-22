import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit = 50): string | null {
    if (!value) {
      return null;
    }
    return value.substr(0, limit) + (value.length > limit ? '...' : '');
  }

}
