import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Details } from './details/details';
import { PageNotFound } from './page-not-found/page-not-found';
import { Home } from './home/home';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"",component:Home},
    {path:"about",component:About},
    {path:"contact",component:Contact},
    {path:"details",component:Details},
    {path:"**",component:PageNotFound}
];
