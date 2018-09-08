import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/vehicle';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Car[], searchText: string): Car[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter(item =>
      item.model.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
