import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable ({ // une seule instance de ce service, L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Adbuweli',
          description: 'Mon meilleur ami dupuis de l\'université !',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/07/30/04/46/sunrise-7353034_960_720.jpg',
          createDate: new Date(),
          snaps: 500,
        },
        
        { 
          id: 2,
          title: 'Matin',
          description: 'Belle avanture !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg',
          createDate: new Date(),
          snaps: 6,
          location: 'Paris'
        },
  
        {
          id: 3,
          title: 'family trip',
          description: 'On a fait des vacanses inoubliables !',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/08/19/10/35/scooter-7396608_960_720.jpg',
          createDate: new Date(),
          snaps: 0,
          location: 'Lyon'
        },
        {
          id: 4,
          title: 'Adbuweli',
          description: 'Mon meilleur ami dupuis de l\'université !',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/07/30/04/46/sunrise-7353034_960_720.jpg',
          createDate: new Date(),
          snaps: 500,
        },
        
        { 
          id: 5,
          title: 'Matin',
          description: 'Belle avanture !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg',
          createDate: new Date(),
          snaps: 6,
          location: 'Paris'
        },
  
        {
          id: 6,
          title: 'family trip',
          description: 'On a fait des vacanses inoubliables !',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/08/19/10/35/scooter-7396608_960_720.jpg',
          createDate: new Date(),
          snaps: 0,
          location: 'Lyon'
        }
      ];
      
      getAllFaceSnaps() {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap=> faceSnap.id === faceSnapId);
        if(!faceSnap) {
          throw new Error('FaceSnap not found');
        } else {
          return faceSnap;
        }
      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' |'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
      // unSnapedFaceSnapById(faceSnapId: number): void {
      //   const faceSnap = this.faceSnaps.find(faceSnap=> faceSnap.id === faceSnapId);
      //   if(faceSnap) {
      //     faceSnap.snaps--;
      //   } else {
      //     throw new Error('FaceSnap not found');
      //   }
      // }
    }
