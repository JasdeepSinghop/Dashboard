import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Header } from './dashboard/components/header/header';
// import { Sidebar } from './dashboard/components/sidebar/sidebar';
// import { Maincontent } from './dashboard/components/maincontent/maincontent';
// import { Sidebar } from './sidebar/sidebar';
// import { Maincontent } from './maincontent/maincontent';
// import { Signup } from './signup/signup';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // imports: [Header,Sidebar,RouterOutlet,Maincontent],
  // imports: [Header,Sidebar,RouterOutlet,Signup],
  //  imports: [Header,RouterOutlet],
  //  imports: [Header,RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Dashboard';
}
