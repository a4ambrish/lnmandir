import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatGridListModule} from '@angular/material';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatGridListModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
