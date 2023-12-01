// Importe les classes Pipe et PipeTransform depuis Angular Core
import { Pipe, PipeTransform } from '@angular/core';

// Déclare une classe décorée par le Pipe d'Angular
@Pipe({
  name: 'filter', // Nom du filtre à utiliser dans le template Angular
})
export class FilterPipe implements PipeTransform {
  // Implémente la méthode transform de l'interface PipeTransform
  transform(items: any[], filterText: string): any[] {
    // Vérifie si la liste d'items ou le texte de filtre est vide
    if (!items || !filterText) {
      return items; // Retourne la liste d'items telle quelle
    }
    
    // Convertit le texte de filtre en minuscules pour une recherche insensible à la casse
    filterText = filterText.toLowerCase();

    // Filtrage des items en fonction du texte de filtre
    return items.filter(item => {
      // Utilise la propriété 'Rue' pour la recherche
      const rue = item.Rue ? item.Rue.toLowerCase() : '';
      
      // Retourne true si le filtre (filterText) est inclus dans la propriété 'Rue'
      return rue.includes(filterText);
    });
  }
}
