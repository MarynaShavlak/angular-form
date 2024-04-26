import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile'
    },
    {
        path: '**',
        component: HomeComponent,
        redirectTo: ''
    },
];
