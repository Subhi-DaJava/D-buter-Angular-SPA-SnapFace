import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { MyFB } from './models/my-fb.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap; // déclaration d'un attribut
  otherSnap!: FaceSnap;
  lastSnap!: FaceSnap;
  myFirstFB! : MyFB;

  ngOnInit() {
      this.mySnap = new FaceSnap(
        'Adbuweli',
        'Mon meilleur ami dupuis de l\'université !',
        'https://cdn.pixabay.com/photo/2022/07/30/04/46/sunrise-7353034_960_720.jpg',
        new Date(),
        1
      );
      this.otherSnap = new FaceSnap(
        'Matin',
        'Belle Avanture!',
        'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg',
        new Date(),
        1
      );
      this.lastSnap = new FaceSnap(
        'Family trip',
        'On a fait des vacanses inoubliables !',
        'https://cdn.pixabay.com/photo/2022/08/19/10/35/scooter-7396608_960_720.jpg',
        new Date(),
        1
      );

      this.myFirstFB = new MyFB(
        'Subhi',
        40,
        'Dev Java',
        'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg',
        'men',
        0
      );

  }
}


