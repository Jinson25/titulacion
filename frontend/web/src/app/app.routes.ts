import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ForumComponent } from './pages/forum/forum.component';

export const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: "", component: HomeComponent},
            { path: "services", component: ServicesComponent },
            {path: "forum", component: ForumComponent}
        ]
    },
    {
        path: 'dashboard', component: AdminComponent,
        children: [
            { path: 'ho', redirectTo: 'hom', pathMatch: 'full' },
        ]
    }
];
