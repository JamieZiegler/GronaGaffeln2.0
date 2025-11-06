import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Menu } from './menu/menu';
import { About } from './about/about';
import { Review } from './review/review';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Menu, About, Review, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gronagaffeln2');
}
