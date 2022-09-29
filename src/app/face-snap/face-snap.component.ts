import { Component } from '@angular/core';

@Component({ // @Component: Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe.  décorateur
  selector: 'app-face-snap', // Le sélecteur (avec le préfixe  app-  par défaut), c'est ce qui va nous permettre d'insérer ce component dans notre application.
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
}) // le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. 
export class FaceSnapComponent {}
