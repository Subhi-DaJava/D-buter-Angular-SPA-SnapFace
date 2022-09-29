import { Component, Input, OnInit } from '@angular/core';
import { MyFB } from '../models/my-fb.model';

@Component({
  selector: 'app-my-fb',
  templateUrl: './my-fb.component.html',
  styleUrls: ['./my-fb.component.scss']
})
export class MyFbComponent implements OnInit {
@Input() myFB!: MyFB;

button!: string;
liked!: boolean;
  ngOnInit() {
    this.button = "Visit my GitHub repo !";
    this.liked = false;
  }

  onLike(){
    if(!this.liked) {
      this.myFB.like++;
      this.liked = true;
    } else {
      this.myFB.like--;
      this.liked = false; 
    }
  }
}
