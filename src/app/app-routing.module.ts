import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AdvertenciasComponent } from './advertencias/advertencias.component';
import { AnalizeComponent } from './analize/analize.component';


const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'advertencias', component: AdvertenciasComponent},
  {path: 'analize', component: AnalizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
