import { Routes } from '@angular/router';
import path from 'path';
import { ClientComponent } from './pages/client/client.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginPagesComponent } from './pages/client/login-pages/login-pages.component';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';

export const routes: Routes = [
    {
        path: '', component: ClientComponent,
        title: 'SocialMedia | Cliente',
        children: [
            { path: 'login', component: LoginPagesComponent, pathMatch: 'full'},
        ]
    },
    {
        path: 'dashboard', component: AdminComponent,
        title: 'SocialMedia | dashboard',
        children: [
            { path: '', component: AdminComponent, pathMatch: 'full' },
        ]
    },
    {
        path: '**', component: NotFound404Component,
    }
];
