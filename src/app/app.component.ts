import { AuthService } from './auth.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
              private dialog: MatDialog,
              public authService: AuthService){}
      opened = false;

      onCreateProfile() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%"
        this.dialog.open(CreateUserComponent, dialogConfig)
      }
}
