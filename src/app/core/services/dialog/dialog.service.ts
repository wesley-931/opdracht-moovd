import {ComponentType} from '@angular/cdk/portal';
import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public open<T, R = T>(
    component: ComponentType<unknown>,
    data?: T,
    disableClose = false
  ): Observable<R> {
    const dialog = this.dialog.open(
      component,
      this.getConfig({data, disableClose})
    );
    return dialog.afterClosed() as Observable<R>;
  }

  private getConfig(config?: Partial<MatDialogConfig>): MatDialogConfig {
    return {
      autoFocus: false,
      restoreFocus: true,
      panelClass: 'dialog-pop-up',
      backdropClass: 'dialog-pop-up-backdrop',
      disableClose: false,
      maxHeight: '100%',
      maxWidth: '100%',
      ...config,
    };
  }
}
