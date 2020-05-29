import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GoshalahomeComponent } from './goshalahome/goshalahome.component';
import { FormsModule } from '@angular/forms';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { FilterPipe } from './goshalahome/filter.pipe';
const demoRoutes: Routes =[
  { path: 'home',  component: HomeComponent },
  { path: 'newuser', component: NewuserComponent },
  {path:'feedback', component: FeedbackComponent},
  {path:'goshalahome', component:GoshalahomeComponent},
  {path:'userregistrationcomponent', component:UserregistrationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewuserComponent,
    FeedbackComponent,
    GoshalahomeComponent,
    UserregistrationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      demoRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

