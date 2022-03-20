import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { CreateParticipantComponent } from './pages/create-participant/create-participant.component';
import { CreateTrainingComponent } from './pages/create-training/create-training.component';
import { ListParticipantsComponent } from './pages/list-participants/list-participants.component';
import { ListTrainingsComponent } from './pages/list-trainings/list-trainings.component';
import { UpdateParticipantComponent } from './pages/update-participant/update-participant.component';

const routes: Routes = [
  { path: '', redirectTo: 'trainings', pathMatch: 'full' },
  {
    path: 'trainings', component: DashboardLayoutComponent,
    children: [
      { path: '', component: ListTrainingsComponent },
      { path: 'create', component: CreateTrainingComponent },
      { path: 'update/:id', component: UpdateParticipantComponent },
    ]
  },
  {
    path: 'participants', component: DashboardLayoutComponent,
    children: [
      { path: '', component: ListParticipantsComponent },
      { path: 'create', component: CreateParticipantComponent },
      { path: 'update/:id', component: UpdateParticipantComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
