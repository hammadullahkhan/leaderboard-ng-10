import { Pipe, PipeTransform } from '@angular/core';
import { sortByKeys } from './sort-by-keys';

@Pipe({ name: 'SortBy', pure: false})
export class SortByPipe implements PipeTransform {

  // transform(value: any[], sortKey: string, orderType: boolean): any {
  transform(value: any[], ...sortKey: string[]): any {
    if (!value) return;
    return sortByKeys<any>(value.slice(), ...sortKey);
  }

}