import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { RouterModule }   from '@angular/router';
import { HeroService }         from './hero.service';
import { HeroesComponent }     from './heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent }     from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
