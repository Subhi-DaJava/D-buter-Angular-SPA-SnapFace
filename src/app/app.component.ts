import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { MyFB } from './models/my-fb.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[]; // déclaration d'un tableau
  
  myFirstFB! : MyFB;

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Adbuweli',
        description: 'Mon meilleur ami dupuis de l\'université !',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/07/30/04/46/sunrise-7353034_960_720.jpg',
        createDate: new Date(),
        snaps: 1,
      },
      {
        title: 'Matin',
        description: 'Belle Avanture!',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg',
        createDate: new Date(),
        snaps: 6,
        location: 'Paris'
      },

      {
        title: 'Family trip',
        description: 'On a fait des vacanses inoubliables !',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/08/19/10/35/scooter-7396608_960_720.jpg',
        createDate: new Date(),
        snaps: 1,
        location: 'Lyon'
      }
    ],
     
      this.myFirstFB = new MyFB(
        'Subhi',
        40,
        'Dev Java',
        'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg',
        'men',
        1
      );

  }
}


