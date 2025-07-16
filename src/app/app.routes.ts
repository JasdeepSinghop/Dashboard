import { Routes } from '@angular/router';

// Main Components
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Dashboard } from './dashboard/dashboard';

// Dashboard Children Pages
import { Home } from './dashboard/pages/home/home';
import { About } from './dashboard/pages/about/about';
import { Contact } from './dashboard/pages/contact/contact';
import { Details } from './dashboard/pages/details/details';

import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'details', component: Details }
    ]
  },

  { path: '**', component: PageNotFound }
];


// import { Routes } from '@angular/router';
// import { About } from './dashboard/pages/about/about';
// import { Contact } from './dashboard/pages/contact/contact';
// import { Details } from './dashboard/pages/details/details';
// import { PageNotFound } from './page-not-found/page-not-found';
// import { Home } from './dashboard/pages/home/home';

// export const routes: Routes = [
//     {path:"home",component:Home},
//     {path:"",component:Home},
//     {path:"about",component:About},
//     {path:"contact",component:Contact},
//     {path:"details",component:Details},
//     {path:"**",component:PageNotFound}
// ];


// Rotes with help of chatgpt

// import { Routes } from '@angular/router';

// import { Login } from './auth/login/login';
// import { Signup } from './auth/signup/signup';
// import { Dashboard } from './dashboard/dashboard'; // ✅ Layout Component

// Dashboard child pages
// import { Home } from './pages/home/home';
// import { About } from './pages/about/about';
// import { Contact } from './pages/contact/contact';
// import { Details } from './pages/details/details';
// import { Home } from './dashboard/pages/home/home';
// import { PageNotFound } from './page-not-found/page-not-found';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: Login },
//   { path: 'signup', component: Signup },

//   {
//     path: 'dashboard',
//     component: Dashboard, // ✅ layout wrapper
//     children: [
//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//       { path: 'home', component: Home },
//       { path: 'about', component: About },
//       { path: 'contact', component: Contact },
//       { path: 'details', component: Details }
//     ]
//   },

//   { path: '**', component: PageNotFound }
// ];