import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BookingComponent } from './booking/booking.component';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatGridListModule} from '@angular/material';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatGridListModule,
    RouterModule.forChild([{ path: '', component: Tab1Page },
    { path: '/booking', component: BookingComponent }])
  ],
    declarations: [Tab1Page, BookingComponent]
})
export class Tab1PageModule {}
