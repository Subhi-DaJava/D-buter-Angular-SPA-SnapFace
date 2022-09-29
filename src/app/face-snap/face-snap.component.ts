import { Component, OnInit } from '@angular/core';

//La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. Elle permet notamment d'initialiser des propriétés.

@Component({ // @Component: Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe.  décorateur
  selector: 'app-face-snap', // Le sélecteur (avec le préfixe  app-  par défaut), c'est ce qui va nous permettre d'insérer ce component dans notre application.
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
}) // le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. 
export class FaceSnapComponent implements OnInit{

  // créer un attribut de classe en associant le nom de l'attribut à son type.

  title!: string; // title!: string; initialisé l'attribut, sinon IDE se plaint 
  description!: string; // Pour "promettre" à TypeScript qu'on va les initialiser, on peut ajouter un bang ! à chaque propriété : 
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: true;
  buttonText!: string; 

  ngOnInit() { // Au moment d'initialisation du component, on initialiser les propriétées
    this.title = 'Adbuweli';
    this.description = 'Mon meilleur ami dupuis de l\'université !';
    this.createDate = new Date();
    this.snaps = 10;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2022/07/30/04/46/sunrise-7353034_960_720.jpg';
    //this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'On Sanp!'
  }

  // Ajoutez un bouton avec le texte "Oh Snap!" à côté du nombre de snaps dans votre component :
  onSnap() { //Le nom de méthode qui commence par on signale que cette méthode répond à un événement.
    if(this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Opps, unSnap!';
    }
    else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
