import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
    if( activar ){
      let l = value.length;
      let retval = '';
      for( let i = 0;  i < l; i++  ){
        retval = retval + '*';
      }
      return retval;
    }else
      return value;
  }

}
