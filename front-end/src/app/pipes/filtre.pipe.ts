import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    if (!items || !filterText) {
      return items;
    }
    
    filterText = filterText.toLowerCase();

    return items.filter(item => {
      const rueNumeroDetails = (item.Rue + ' ' + item.Numero).toLowerCase();
      const autresDetails = [
        item.Nom,
        item.Prenom,
        item.Date_de_naissance,
        item.Revenus,
        item.Code_Postal,
        item.Commune
      ].map(detail => detail ? detail.toString().toLowerCase() : '').join(' ');

      // Recherche à la fois dans plusieurs propriétés
      return rueNumeroDetails.includes(filterText) || autresDetails.includes(filterText);
    });
  }
}
