
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<User>, searchText: string,userName: string): User {
    if(!items) return [];
    if(!searchText) return items;   
  return items.filter( it => {
  return it[userName].includes(searchText.toLowerCase());
        }
    );
  } 
}