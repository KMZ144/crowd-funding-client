import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { LatestProjectsComponent } from './components/latest-projects/latest-projects.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HighestProjectsComponent } from './components/highest-projects/highest-projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectComponent,
    LatestProjectsComponent,
    FeaturedProjectsComponent,
    CategoryComponent,
    CategoriesComponent,
    ProjectsComponent,
    HighestProjectsComponent,
    ProjectCardComponent,
    SearchComponent,
    ProjectItemComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
