import { Injectable } from "@angular/core";
import { MyFB } from "../models/my-fb.model";

@Injectable({
    providedIn: 'root'
})
export class MyFBService {
    myBb: MyFB = 
        {
          name : 'Subhi',
          age: 40,
          profession: 'Dev Java',
          profil: 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg',
          sex: 'men',
          like: 1
        } 
        
        getMyFB() {
            return this.myBb;
        }
}