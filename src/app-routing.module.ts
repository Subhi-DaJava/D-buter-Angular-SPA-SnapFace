import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./app/face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./app/landing-page/landing-page.component";
import { MyBfShowComponent } from "./app/my-bf-show/my-bf-show.component";
import { SingleFaceSnapComponent } from "./app/single-face-snap/single-face-snap.component";

const routes: Routes= [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent},
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'myfb', component: MyBfShowComponent},
    { path: '', component: LandingPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}