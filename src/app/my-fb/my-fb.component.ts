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
constructor(private myBFService: MyFBService) {}

ngOnInit(): void {
   this.button = 'go';
   this.liked = false;
}
  // onLike(){
  //   if(!this.liked) {
  //     this.myFB.like++;
  //     this.liked = true;
  //   } else {
  //     this.myFB.like--;
  //     this.liked = false; 
  //   }
  // }
}
