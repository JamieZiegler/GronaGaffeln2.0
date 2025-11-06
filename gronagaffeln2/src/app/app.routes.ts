import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Menu } from './menu/menu';
import { About } from './about/about';
import { Review } from './review/review';

export const routes: Routes = [
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'review', component: Review },
    { path: 'header', component: Header },
    { path: 'footer', component: Footer },
    { path: 'menu', component: Menu }
];
