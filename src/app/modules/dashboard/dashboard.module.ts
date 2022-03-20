import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListTrainingsComponent } from './pages/list-trainings/list-trainings.component';
import { CreateTrainingComponent } from './pages/create-training/create-training.component';
import { UpdateTrainingComponent } from './pages/update-training/update-training.component';
import { DeleteTrainingComponent } from './modals/delete-training/delete-training.component';
import { MatDividerModule } from '@angular/material/divider';
import { CreateParticipantComponent } from './pages/create-participant/create-participant.component';
import { ListParticipantsComponent } from './pages/list-participants/list-participants.component';
import { UpdateParticipantComponent } from './pages/update-participant/update-participant.component';
import { DeleteParticipantComponent } from './modals/delete-participant/delete-participant.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,
    ListTrainingsComponent,
    CreateTrainingComponent,
    UpdateTrainingComponent,
    DeleteTrainingComponent,
    CreateParticipantComponent,
    ListParticipantsComponent,
    UpdateParticipantComponent,
    DeleteParticipantComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule



  ]
})
export class DashboardModule { }
