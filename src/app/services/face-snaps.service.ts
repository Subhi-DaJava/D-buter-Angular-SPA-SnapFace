import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable ({ // une seule instance de ce service, L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: 'Adbuweli',
          description: 'Mon meilleur ami dupuis de l\'université !',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/07/30/04/46/sunrise-7353034_960_720.jpg',
          createDate: new Date(),
          snaps: 500,
        },
        {
          title: 'Matin',
          description: 'Belle avanture !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg',
          createDate: new Date(),
          snaps: 6,
          location: 'Paris'
        },
  
        {
          title: 'family trip',
          description: 'On a fait des vacanses inoubliables !',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/08/19/10/35/scooter-7396608_960_720.jpg',
          createDate: new Date(),
          snaps: 0,
          location: 'Lyon'
        }
      ]
    }
