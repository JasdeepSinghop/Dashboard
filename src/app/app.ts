import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Maincontent } from './maincontent/maincontent';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Header,Sidebar,RouterOutlet,Maincontent],
  //  imports: [Header,RouterOutlet],
  //  imports: [Header,RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Dashboard';
}
