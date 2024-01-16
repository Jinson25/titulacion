import { Routes } from '@angular/router';
import path from 'path';
import { ClientComponent } from './pages/client/client.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {
        path: '', component: ClientComponent,
        title: 'Client',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },
    {
        path: 'dashboard', component: AdminComponent,
        title: 'Admin',
        children: [
            { path: '', component: AdminComponent, pathMatch: 'full' },
        ]
    }
];
