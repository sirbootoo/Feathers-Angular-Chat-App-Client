import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let timeago = moment(value).fromNow();
    return timeago;
  }

}
