import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminGuard } from './guards/admin.guard';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './posts/create/create.component';
import { ListComponent } from './posts/list/list.component';
import { UpdateComponent } from './posts/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: '',
        component: ListComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'editar/:id',
        component: UpdateComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'publicar',
        component: CreateComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    LayoutAdminComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
