/*
* File: app-routing-modulte.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-01-20
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "cities", component: CitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
