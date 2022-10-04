import { Component, Input, OnInit } from '@angular/core';
import { MyFB } from '../models/my-fb.model';
import { MyFBService } from '../services/my-fb.service';

@Component({
  selector: 'app-my-fb',
  templateUrl: './my-fb.component.html',
  styleUrls: ['./my-fb.component.scss']
})
export class MyFbComponent implements OnInit {
@Input() myFb!: MyFB;
button!: string;
liked!: boolean;
constructor() {}

ngOnInit(): void {
   this.button = 'Viste to my GitHub';
   this.liked = false;
}
  onLike() {
    if(!this.liked) {
      this.myFb.like++;
      this.liked = true;
    } else {
      this.myFb.like--;
      this.liked = false; 
    }
  }
  onViste() : void {
    this.button = 'https://github.com/Subhi-DaJava?tab=repositories';
    //this.button = 'Viste to my GitHub';
  }
}
