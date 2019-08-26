import { Component } from '@angular/core';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  formErrors = '';
  formHasErrors = false;
  toggleLogin = true;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private alertController: AlertController
  ) {}

  register(form) {
    if (form.value.password === form.value.confirm) {
      this.formHasErrors = false;
      this.authService.register(form.value).subscribe(
        res => {
          this.authService
            .login({
              email: form.value.email,
              password: form.value.password
            })
            .subscribe(resp => console.log(resp));
          this.router.navigateByUrl('account');
        },
        err => this.presentAlert(err.message)
      );
    } else {
      this.formHasErrors = true;
      this.formErrors = 'Password missmatch';
      form.controls.confirm.setErrors({ incorrect: true });
    }
  }

  login(form) {
    this.authService.login(form.value).subscribe(
      res => {
        this.router.navigateByUrl('account');
      },
      err => this.presentAlert(err.message)
    );
  }

  switchForm() {
    this.toggleLogin = !this.toggleLogin;
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Registration error',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
