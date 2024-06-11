import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { EightWaistesComponent } from './8-wastes/eight-wastes.component';
import { CustomTestComponent } from './custom-test/custom-test.component';
import { CreateTestComponent } from './create-test/create-test.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'flash-cards', component: FlashCardsComponent },
  { path: 'custom-test', component: CustomTestComponent },
  { path: 'eight-wastes', component: EightWaistesComponent},
  { path: 'create-test', component: CreateTestComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
