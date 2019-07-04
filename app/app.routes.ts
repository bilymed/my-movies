import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

export const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "singup", component: SingupComponent },
    { path: "movies", component: ListMoviesComponent },
    { path: "", redirectTo: "login", pathMatch: "full" }
]