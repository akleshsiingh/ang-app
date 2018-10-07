import { AuthGuard } from './service/authguard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowersComponent } from './followers/followers.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler, Component } from '@angular/core';
import { AuthorServices } from './author.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostsService } from './service/posts.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    CustomdirectiveComponent,
    ContactFormComponent,
    SignupFormComponent,
    FormArrayComponent,
    PostsComponent,
    HomeComponent,
    FollowersComponent,
    ProfileComponent,
    NotFoundComponent,
    NavBarComponent,
    LoginComponent,
    AdminComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '', component: HomeComponent, canActivate: [AuthGuard] },
      {path : 'admin', component: AdminComponent, canActivate: [AuthGuard] },
      {path : 'login', component: LoginComponent },
      {path : 'followers/:id/:name', component: ProfileComponent },
      {path : 'followers', component: FollowersComponent },
      {path : 'posts', component: PostsComponent },
      {path : '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    AuthorServices,
    PostsService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
