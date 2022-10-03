import { Component, OnInit } from '@angular/core';
import { MyFB } from './models/my-fb.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myFirstFB!: MyFB;
  ngOnInit() {
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

