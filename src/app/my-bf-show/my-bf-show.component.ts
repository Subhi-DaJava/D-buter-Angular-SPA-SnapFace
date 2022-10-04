import { Component, OnInit } from '@angular/core';
import { MyFB } from '../models/my-fb.model';
import { MyFBService } from '../services/my-fb.service';

@Component({
  selector: 'app-my-bf-show',
  templateUrl: './my-bf-show.component.html',
  styleUrls: ['./my-bf-show.component.scss']
})
export class MyBfShowComponent implements OnInit {
  myFb!: MyFB;
  constructor(private myFbService: MyFBService) { }

  ngOnInit(): void {
    this.myFb = this.myFbService.getMyFB();
  }

}
