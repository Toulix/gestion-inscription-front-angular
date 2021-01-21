import { MatDialogConfig } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  configInfo: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
  }

  configWarning: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom'
  }

  succes(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  info(msg) {
    this.configInfo['panelClass'] = ['notification', 'info'];
    this.snackBar.open(msg, '', this.configInfo);
  }

  warn(msg) {
    this.configInfo['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.configWarning);
  }
}
