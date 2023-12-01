// Importe les classes Pipe et PipeTransform depuis Angular Core
import { Pipe, PipeTransform } from '@angular/core';

// Déclare un nouveau Pipe avec le nom 'filter'
@Pipe({
    name: 'filter',
  })
  export class FilterPipe implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
      if (!items || !filterText) {
        return items;
      }
      filterText = filterText.toLowerCase();
      return items.filter(item => {
        // Utilisez la propriété 'Rue' pour la recherche
        const rue = item.Rue ? item.Rue.toLowerCase() : '';
        
        // Retourne true si le filtre (filterText) est inclus dans la propriété 'Rue'
        return rue.includes(filterText);
      });
    }
  }