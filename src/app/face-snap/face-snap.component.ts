import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

//La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. Elle permet notamment d'initialiser des propriétés.

@Component({ // @Component: Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe.  décorateur
  selector: 'app-face-snap', // Le sélecteur (avec le préfixe app- par défaut), c'est ce qui va nous permettre d'insérer ce component dans notre application.
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
}) // le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. 
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;  // injecter depuis l'extérieur 
  buttonText!: string; 
  
  constructor(
    private faceSnapsService: FaceSnapsService, 
    private router: Router) {} //Pour tester cette méthode, il faudra injecter FaceSnapsService dans FaceSnapComponent. Vous vous souvenez comment faire ?

  ngOnInit() { // Au moment d'initialisation du component, on initialiser les propriétées
    this.buttonText = 'On Sanp!'
  }

  // Ajoutez un bouton avec le texte "Oh Snap!" à côté du nombre de snaps dans votre component :
  onSnap() { //Le nom de méthode qui commence par on signale que cette méthode répond à un événement.
    if(this.buttonText === 'On Sanp!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Opps, unSnap!';
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'On Sanp!';
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
