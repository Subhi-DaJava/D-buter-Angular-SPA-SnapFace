import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./app/face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./app/landing-page/landing-page.component";
import { MyFB } from "./app/models/my-fb.model";

const routes: Routes= [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent},
    // { path: '', component: MyFB},
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