import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterText: string, callback? : any): any[] {
    if (!items || !filterText) {
      return items;
    }
    
    filterText = filterText.toLowerCase();

    let result =  items.filter(item => {
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
      
    if (callback) 
     callback(result);
    return result;
  }
}
