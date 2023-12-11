// gsm-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gsmFormat'
})
export class GsmFormatPipe implements PipeTransform {
  transform(value: any): string {
    // Vérifiez si la valeur est définie et est une chaîne de caractères
    if (value == null ) {
      return value; // Retournez la valeur inchangée si elle n'est pas une chaîne de caractères
    }

    // Formater le numéro selon le format "0491 973 264"
    return `0${value.toString().substring(0, 3)} ${value.toString().substring(3, 6)} ${value.toString().substring(6)}`;
  }
}
