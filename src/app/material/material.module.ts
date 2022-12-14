import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker/';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox'
import {COMMA, ENTER} from '@angular/cdk/keycodes';

const materialComponents = [
  MatSnackBarModule,
  MatExpansionModule,
  MatTooltipModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  NgxDropzoneModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatCheckboxModule
  
]

@NgModule({
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }
  ],
  imports: [materialComponents],
  exports : [materialComponents]
})
export class MaterialModule { }
