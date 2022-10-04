import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;  // injecter depuis l'extérieur 
  buttonText!: string; 
  
  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {} // Récupérer les infos de la route activée, il faut injecter ActivatedRoute dans notre component 

  ngOnInit() { // Au moment d'initialisation du component, on initialiser les propriétées
    const faceSnapId = +this.route.snapshot.params['id']; // ['id'] type litteral, + type case
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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

}
