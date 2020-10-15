import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker/';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatButtonModule } from '@angular/material/button';

const materialComponents = [
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  NgxDropzoneModule,
  MatButtonModule
]

@NgModule({
  
  imports: [materialComponents],
  exports : [materialComponents]
})
export class MaterialModule { }
